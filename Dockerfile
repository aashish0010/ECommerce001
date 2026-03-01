# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Install Node.js 22 (required for Angular 21)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && node --version && npm --version

WORKDIR /src

# Copy solution + project files first (layer caching)
COPY BookManagementSystem.sln ./
COPY BookManagementSystem/BookManagementSystem.csproj                               BookManagementSystem/
COPY BookManagementSystem.Entities/BookManagementSystem.Domain.csproj               BookManagementSystem.Entities/
COPY BookManagementSystem.Infrastructure/BookManagementSystem.Infrastructure.csproj BookManagementSystem.Infrastructure/
COPY BookManagementSystem.Services/BookManagementSystem.Service.csproj              BookManagementSystem.Services/
COPY BookManagementSystem.Test/BookManagementSystem.Test.csproj                     BookManagementSystem.Test/

RUN dotnet restore BookManagementSystem.sln

# Copy the rest of the source
COPY . .

# Pre-build ecommerce Angular (browser/CSR only)
WORKDIR /src/ecommerce
RUN npm ci && npm run build:csr

# Pre-build ecommerce-admin Angular (production, baseHref=/admin/)
WORKDIR /src/ecommerce-admin
RUN npm ci && npm run build

# Copy Angular output directly into the source wwwroot BEFORE dotnet publish.
# ASP.NET Core's publish always includes the source wwwroot/ as static content,
# so this is 100% reliable regardless of MSBuild ItemGroup path-separator behaviour.
WORKDIR /src
RUN cp -r ecommerce/dist/ecommerce/browser/. BookManagementSystem/wwwroot/ \
 && mkdir -p BookManagementSystem/wwwroot/admin \
 && cp -r ecommerce-admin/dist/multikart-admin/browser/. BookManagementSystem/wwwroot/admin/

# Publish .NET (MSBuild targets skip npm since dist already exists)
RUN dotnet publish BookManagementSystem/BookManagementSystem.csproj \
    -c Release \
    -o /app/publish \
    --no-restore

# ── Stage 2: Runtime ──────────────────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 8080

# Use shell form CMD so $PORT is expanded at runtime from Railway's injected env var
CMD ASPNETCORE_URLS=http://+:${PORT:-8080} dotnet BookManagementSystem.dll
