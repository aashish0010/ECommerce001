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

RUN dotnet restore BookManagementSystem.sln

# Copy the rest of the source
COPY . .

# Build Angular + publish .NET (PublishRunWebpack target runs npm install + npm run build:csr)
RUN dotnet publish BookManagementSystem/BookManagementSystem.csproj \
    -c Release \
    -o /app/publish \
    --no-restore

# ── Stage 2: Runtime ──────────────────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app
COPY --from=build /app/publish .

# Railway injects PORT at runtime; ASP.NET Core reads ASPNETCORE_HTTP_PORTS
ENV ASPNETCORE_HTTP_PORTS=8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "BookManagementSystem.dll"]
