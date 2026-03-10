# ECommerceApp

Full-stack e-commerce application built with **ASP.NET Core 8**, **Angular 21**, and **PostgreSQL**.

## Features

- JWT authentication with refresh tokens, OTP email verification
- Google & Facebook OAuth login
- Product catalog with categories, brands, colors, and image uploads (Cloudinary)
- Shopping cart, wishlist, and compare
- Order management with admin dashboard
- Coupon system (percentage & fixed discounts)
- Address management
- Admin panel (separate Angular app at `/admin`)
- API versioning (`/api/v1/`)
- Rate limiting on auth endpoints
- FluentValidation request validation
- Global error handling with ProblemDetails
- Serilog structured logging
- CORS whitelist configuration
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- Docker support with docker-compose

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | ASP.NET Core 8, Entity Framework Core 8, AutoMapper |
| Frontend | Angular 21 (standalone components, NGXS state) |
| Admin | Angular 21 (separate app, served at `/admin`) |
| Database | PostgreSQL 16 |
| Auth | ASP.NET Identity, JWT Bearer, refresh tokens |
| Storage | Cloudinary (image uploads) |
| Logging | Serilog (console + file) |
| Testing | xUnit, Moq, FluentAssertions |
| CI/CD | GitHub Actions |
| Deployment | Docker, Railway |

## Project Structure

```
ECommerceApp/                    # ASP.NET Core Web API
├── Controller/                  # 18 API controllers
├── Configuration/               # Service registration, middleware
├── Validators/                  # FluentValidation validators
└── wwwroot/                     # Static files (Angular builds)

ECommerceApp.Entities/           # Domain: entities, DTOs
ECommerceApp.Infrastructure/     # EF Core DbContext, migrations
ECommerceApp.Services/           # Business logic, service interfaces
ECommerceApp.Test/               # Unit tests (xUnit + Moq)

ecommerce/                       # Angular 21 customer frontend
ecommerce-admin/                 # Angular 21 admin panel
```

## Quick Start (Docker)

```bash
# 1. Clone the repository
git clone <repo-url> && cd ECommerceApp

# 2. Create environment file
cp .env.example .env
# Edit .env with your values (JWT_KEY, database password, etc.)

# 3. Start all services
docker-compose up -d

# 4. Access the application
# API:      http://localhost:8080/api/v1/auth/getecho
# Frontend: http://localhost:8080
# Admin:    http://localhost:8080/admin
# pgAdmin:  http://localhost:5050
```

## Manual Setup

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 22+](https://nodejs.org/)
- [PostgreSQL 16+](https://www.postgresql.org/download/)

### Backend

```bash
# 1. Configure connection string and secrets
# Edit ECommerceApp/appsettings.json or use environment variables

# 2. Apply database migrations
cd ECommerceApp.Infrastructure
dotnet ef database update --startup-project ../ECommerceApp

# 3. Run the API
cd ../ECommerceApp
dotnet run --launch-profile http
# API available at http://localhost:5241
```

### Frontend (Customer)

```bash
cd ecommerce
npm install
npm start
# Available at http://localhost:4200 (proxied to API)
```

### Frontend (Admin)

```bash
cd ecommerce-admin
npm install
npm start
# Available at http://localhost:4300 (proxied to API)
```

## Running Tests

```bash
dotnet test ECommerceApp.Test/ECommerceApp.Test.csproj
```

## API Endpoints

All endpoints are versioned under `/api/v1/`. Authentication uses Bearer JWT tokens.

### Auth (public, rate-limited)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register new user |
| POST | `/api/v1/auth/login` | Login (returns JWT + refresh token) |
| POST | `/api/v1/auth/admin-login` | Admin login (requires Admin role) |
| POST | `/api/v1/auth/refresh` | Refresh access token |
| GET | `/api/v1/auth/sendopt?email=` | Send OTP for forgot password |
| GET | `/api/v1/auth/sendemailotp?email=` | Send OTP for registration |
| POST | `/api/v1/auth/verifyemail` | Verify registration OTP |
| POST | `/api/v1/auth/verifyopt` | Verify forgot-password OTP + reset |
| POST | `/api/v1/auth/changepassword` | Change password |
| GET | `/api/v1/auth/companydetails?companyCode=` | Get company info |

### Products (public read, auth write)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/product` | List products (paginated, filterable) |
| GET | `/api/v1/product/{slug}` | Get product by slug |
| GET | `/api/v1/product/categories` | Get categories with products |
| POST | `/api/v1/product` | Create product |
| PUT | `/api/v1/product/{id}` | Update product |
| PATCH | `/api/v1/product/{id}/status` | Toggle product status |
| DELETE | `/api/v1/product/{id}` | Delete product |
| POST | `/api/v1/product/with-image` | Create product with image upload |
| POST | `/api/v1/product/seed` | Seed demo data |

**Product query parameters:** `category`, `brand`, `color`, `colorSlugs`, `subcategorySlugs`, `search`, `page`, `pageSize`, `topSelling`

### Orders (authenticated)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/order` | Place order |
| GET | `/api/v1/order` | Get my orders |
| GET | `/api/v1/order/admin` | Get all orders (Admin) |
| PUT | `/api/v1/order/admin/{id}/status` | Update order status (Admin) |

### Categories, Brands, Colors (public read, auth write)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/category` | List categories |
| POST | `/api/v1/category` | Create category |
| PUT | `/api/v1/category/{id}` | Update category |
| DELETE | `/api/v1/category/{id}` | Delete category |
| GET | `/api/v1/brand` | List brands |
| POST | `/api/v1/brand` | Create brand |
| PUT | `/api/v1/brand/{id}` | Update brand |
| DELETE | `/api/v1/brand/{id}` | Delete brand |
| GET | `/api/v1/color` | List colors |
| POST | `/api/v1/color` | Create color |

### User (authenticated)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/user/me` | Get current user profile |
| PUT | `/api/v1/user/profile` | Update profile |
| PUT | `/api/v1/user/password` | Change password |
| GET | `/api/v1/user/admin` | List all users (Admin) |
| POST | `/api/v1/user/admin` | Create user (Admin) |
| PUT | `/api/v1/user/admin/{phone}` | Update user (Admin) |
| DELETE | `/api/v1/user/admin/{phone}` | Delete user (Admin) |

### Wishlist & Compare (authenticated)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/wishlist` | Get wishlist |
| POST | `/api/v1/wishlist` | Add to wishlist |
| DELETE | `/api/v1/wishlist/{productId}` | Remove from wishlist |
| GET | `/api/v1/compare` | Get compare list |
| POST | `/api/v1/compare` | Add to compare |
| DELETE | `/api/v1/compare/{productId}` | Remove from compare |

### Address (authenticated)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/address` | Get addresses |
| POST | `/api/v1/address` | Add address |
| PUT | `/api/v1/address/{id}` | Update address |
| DELETE | `/api/v1/address/{id}` | Delete address |

### Coupons (public read, auth write)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/coupon` | List active coupons |
| POST | `/api/v1/coupon/apply` | Apply coupon code |
| GET | `/api/v1/coupon/admin` | List all coupons (Admin) |
| POST | `/api/v1/coupon` | Create coupon |
| PUT | `/api/v1/coupon/{id}` | Update coupon |
| DELETE | `/api/v1/coupon/{id}` | Delete coupon |

### Admin Configuration (authenticated)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/company` | Get company settings |
| PUT | `/api/v1/company/{id}` | Update company settings |
| PUT | `/api/v1/company/{id}/social-links` | Update social links |
| GET | `/api/v1/email-config` | Get email config |
| PUT | `/api/v1/email-config/{id}` | Update email config |
| GET | `/api/v1/media-config` | Get media config |
| PUT | `/api/v1/media-config/{id}` | Update media config |
| GET | `/api/v1/home-config` | Get home page config |
| PUT | `/api/v1/home-config/{id}` | Update home page config |

### Dashboard (Admin)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/dashboard/statistics` | Get dashboard stats |
| GET | `/api/v1/dashboard/chart` | Get chart data |

### Image Upload (authenticated)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/image/upload` | Upload image to Cloudinary |
| DELETE | `/api/v1/image/{publicId}` | Delete image from Cloudinary |

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `POSTGRES_DB` | Database name | `ecommerce_db` |
| `POSTGRES_USER` | Database user | `postgres` |
| `POSTGRES_PASSWORD` | Database password | — |
| `JWT_KEY` | JWT signing key (min 32 chars) | — |
| `JWT_ISSUER` | JWT issuer | `ECommerceApp` |
| `JWT_EXPIRY_MINUTES` | Token expiry | `60` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | — |
| `CLOUDINARY_API_KEY` | Cloudinary API key | — |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | — |
| `MAIL_ADDRESS` | SMTP email address | — |
| `MAIL_PASSWORD` | SMTP password / app password | — |

See `.env.example` for the full list.

## Docker Deployment

```bash
# Build and start
docker-compose up -d --build

# View logs
docker-compose logs -f api

# Stop
docker-compose down

# Stop and remove data
docker-compose down -v
```

## License

MIT
