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
RUN npm ci && npm run build:csr \
 && test -f dist/ecommerce/browser/index.html || (echo "ERROR: ecommerce build did not produce browser/index.html" && exit 1)

# Pre-build ecommerce-admin Angular (production, baseHref=/admin/)
WORKDIR /src/ecommerce-admin
RUN npm ci && npm run build \
 && test -f dist/multikart-admin/browser/index.html || (echo "ERROR: admin build did not produce browser/index.html" && exit 1)

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

# Belt-and-suspenders: explicitly copy Angular outputs into the publish folder.
# This guarantees the files are present regardless of how MSBuild handles the
# wwwroot static-web-assets on Linux (backslash paths, lazy glob evaluation, etc.)
RUN mkdir -p /app/publish/wwwroot/admin \
 && cp -r ecommerce/dist/ecommerce/browser/. /app/publish/wwwroot/ \
 && cp -r ecommerce-admin/dist/multikart-admin/browser/. /app/publish/wwwroot/admin/ \
 && test -f /app/publish/wwwroot/index.html || (echo "ERROR: ecommerce index.html missing from publish output" && exit 1) \
 && test -f /app/publish/wwwroot/admin/index.html || (echo "ERROR: admin index.html missing from publish output" && exit 1) \
 && echo "✓ ecommerce files: $(ls /app/publish/wwwroot/*.js 2>/dev/null | wc -l) JS files" \
 && echo "✓ admin files: $(ls /app/publish/wwwroot/admin/*.js 2>/dev/null | wc -l) JS files" \
 && echo "✓ admin sample files:" && ls /app/publish/wwwroot/admin/main*.js /app/publish/wwwroot/admin/polyfills*.js 2>/dev/null \
 && echo "✓ admin total: $(find /app/publish/wwwroot/admin -type f | wc -l) files"

# Final verification: list everything in the runtime image
RUN echo "=== /app/publish/wwwroot/admin/ listing ===" \
 && ls -la /app/publish/wwwroot/admin/ | head -20

# ── Stage 2: Runtime ──────────────────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app
COPY --from=build /app/publish .

# Guarantee Angular files in runtime image (bypasses any dotnet publish quirks)
COPY --from=build /src/ecommerce/dist/ecommerce/browser/ ./wwwroot/
COPY --from=build /src/ecommerce-admin/dist/multikart-admin/browser/ ./wwwroot/admin/

# Runtime verification
RUN test -f wwwroot/admin/index.html || (echo "FATAL: admin index.html missing in runtime" && exit 1) \
 && echo "Runtime admin JS: $(ls wwwroot/admin/*.js 2>/dev/null | wc -l) files" \
 && ls wwwroot/admin/main*.js wwwroot/admin/polyfills*.js 2>/dev/null

EXPOSE 8080

# Use shell form CMD so $PORT is expanded at runtime from Railway's injected env var
CMD ASPNETCORE_URLS=http://+:${PORT:-8080} dotnet BookManagementSystem.dll
