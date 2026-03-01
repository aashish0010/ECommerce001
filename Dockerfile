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

# Publish .NET (MSBuild targets skip npm since dist already exists)
WORKDIR /src
RUN dotnet publish BookManagementSystem/BookManagementSystem.csproj \
    -c Release \
    -o /app/publish \
    --no-restore

# Belt-and-suspenders: explicitly copy Angular dist files into the publish output.
# This guarantees correct placement on Linux regardless of MSBuild path-separator behaviour.
RUN cp -r /src/ecommerce/dist/ecommerce/browser/. /app/publish/wwwroot/ \
 && mkdir -p /app/publish/wwwroot/admin \
 && cp -r /src/ecommerce-admin/dist/multikart-admin/browser/. /app/publish/wwwroot/admin/

# ── Stage 2: Runtime ──────────────────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 8080

# Use shell form CMD so $PORT is expanded at runtime from Railway's injected env var
CMD ASPNETCORE_URLS=http://+:${PORT:-8080} dotnet BookManagementSystem.dll
