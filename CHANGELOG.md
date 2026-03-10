# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-03-10

### Added
- Full project rename from BookManagementSystem to ECommerceApp
- API versioning (`/api/v1/`) with Asp.Versioning
- FluentValidation for request validation (Register, Login, CreateProduct, PlaceOrder)
- `ApiResponse<T>` generic wrapper and `PaginatedResult<T>` for standardized responses
- `BaseController` with helper methods (ApiOk, ApiCreated, ApiBadRequest, ApiNotFound)
- `JwtSettings` configuration class with startup validation
- Security headers middleware (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy)
- 15 unit tests across Auth, Product, Order, and Coupon controllers
- `docker-compose.yml` with PostgreSQL, pgAdmin, and API services
- `.env.example` with all environment variable documentation
- GitHub Actions CI/CD pipeline (build, test, Docker build)
- Comprehensive README with API endpoint documentation
- Postman collection for all API endpoints

### Changed
- CORS: replaced `AllowAnyOrigin` with config-driven origin whitelist
- Error handler: now returns RFC 9110 ProblemDetails format
- Angular frontends updated to use `/api/v1/` base URL

### Removed
- Debug endpoint (`/api/debug/admin-files`)
- Hardcoded secrets from `appsettings.json` (replaced with placeholders)
- Startup filesystem debug logging

### Security
- Secrets moved to environment variables
- CORS restricted to configured origins only
- JWT key validation at startup (minimum 32 characters)
- Security headers added to all responses
