# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Install Node.js 22 (required for Angular 21)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && node --version && npm --version

WORKDIR /src

# Copy solution + project files first (layer caching)
COPY ECommerceApp.sln ./
COPY ECommerceApp/ECommerceApp.csproj                               ECommerceApp/
COPY ECommerceApp.Entities/ECommerceApp.Domain.csproj               ECommerceApp.Entities/
COPY ECommerceApp.Infrastructure/ECommerceApp.Infrastructure.csproj ECommerceApp.Infrastructure/
COPY ECommerceApp.Services/ECommerceApp.Service.csproj              ECommerceApp.Services/
COPY ECommerceApp.Test/ECommerceApp.Test.csproj                     ECommerceApp.Test/

RUN dotnet restore ECommerceApp.sln

# Copy the rest of the source
COPY . .

# Build ecommerce Angular (browser/CSR only)
WORKDIR /src/ecommerce
RUN npm ci && npm run build:csr

# Build ecommerce-admin Angular (production, baseHref=/admin/)
WORKDIR /src/ecommerce-admin
RUN npm ci && npm run build

# Copy Angular outputs into wwwroot before dotnet publish
WORKDIR /src
RUN mkdir -p ECommerceApp/wwwroot/admin \
 && cp -r ecommerce/dist/ecommerce/browser/. ECommerceApp/wwwroot/ \
 && cp -r ecommerce-admin/dist/multikart-admin/browser/. ECommerceApp/wwwroot/admin/

# Publish .NET
RUN dotnet publish ECommerceApp/ECommerceApp.csproj \
    -c Release \
    -o /app/publish \
    --no-restore

# ── Stage 2: Runtime ──────────────────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app
COPY --from=build /app/publish .

# Ensure Angular files are present in runtime image
COPY --from=build /src/ecommerce/dist/ecommerce/browser/ ./wwwroot/
COPY --from=build /src/ecommerce-admin/dist/multikart-admin/browser/ ./wwwroot/admin/

EXPOSE 8080

ENV ASPNETCORE_URLS=http://+:8080
ENTRYPOINT ["dotnet", "ECommerceApp.dll"]
