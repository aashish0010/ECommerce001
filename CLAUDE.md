# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Full-stack e-commerce application with:
- **Backend**: ASP.NET Core 8 Web API (`BookManagementSystem/`)
- **Frontend**: Angular 21 standalone app (`ecommerce/`)
- **Database**: SQL Server (EF Core 8, database name: `WOWCommerce`)

## Commands

### Backend (.NET)

```bash
# Build
dotnet build BookManagementSystem.sln

# Run (from BookManagementSystem/ directory)
dotnet run --launch-profile http        # http://localhost:5241
dotnet run --launch-profile https       # https://localhost:7141

# Run tests
cd BookManagementSystem.Test
dotnet test

# Add EF migration
cd BookManagementSystem.Infrastructure
dotnet ef migrations add <MigrationName> --startup-project ../BookManagementSystem

# Apply migration
dotnet ef database update --startup-project ../BookManagementSystem
```

### Frontend (Angular)

```bash
cd ecommerce

npm install          # Install dependencies
npm start            # Dev server at http://localhost:4200
npm run build        # Production build (SSR)
npm run build:csr    # Production build (CSR only)
npm test             # Karma + Jasmine tests
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run format       # Prettier formatting
```

## Architecture

### Backend — Layered

```
BookManagementSystem/           ← API: controllers, middleware, Program.cs
BookManagementSystem.Entities/  ← Domain: entities, DTOs (no dependencies)
BookManagementSystem.Infrastructure/ ← Data: EF Core, migrations, ApplicationDbContext
BookManagementSystem.Services/  ← Business logic: services, interfaces, AutoMapper profiles
BookManagementSystem.Test/      ← XUnit + Moq + FluentAssertions
```

**Key patterns:**
- Services are registered via `UnitOfWork`, not individually via DI
- AutoMapper maps between entities and DTOs
- `ApplicationDbContext` extends `IdentityDbContext<User>` — the `User` class is at the bottom of that file
- Errors handled by `ErrorHandlerMiddleWare`; logging via Serilog to `/logs/`
- Rate limiting: 5 req/min sliding window on auth endpoints (returns 429)

### Frontend — NGXS + Standalone

```
ecommerce/src/app/
├── app.config.ts          ← Root DI setup, NGXS stores registered here
├── app.routes.ts          ← Root routes (lazy-loaded feature routes)
├── core/
│   ├── guard/             ← AuthGuard (sync, uses selectSnapshot)
│   └── interceptors/      ← AuthInterceptor, GlobalErrorHandler, LoaderInterceptor
├── shared/
│   ├── store/
│   │   ├── state/         ← 34+ NGXS state classes
│   │   └── action/        ← 34+ action sets
│   ├── services/          ← HTTP services (one per domain)
│   ├── interfaces/        ← TypeScript interfaces/types
│   └── routes/routes.ts   ← Shared route constants
└── components/            ← Feature components (lazy-loaded)
```

**Key patterns:**
- All components are standalone — no NgModules
- NGXS state is persisted to localStorage for: `auth`, `account`, `theme_option`, `theme`, `setting`, `cart`
- API calls go through services; services are called from NGXS state handlers
- Dev proxy (`proxy.conf.json`) routes `/api/*` → backend; in production the API is served from the same origin

### Auth Flow

1. Login: phone number used as `userName`
2. Register: splits `name` into `firstName/middleName/lastName`, sets `userName = phone`
3. OTP email verification required before registration completes
4. JWT stored in NGXS `auth.access_token` (60-min expiry)
5. `AuthInterceptor` attaches `Bearer` token; public endpoints listed in `publicEndpoints` array in that file

### Database Schema (EF Core)

Core tables managed by migrations in `BookManagementSystem.Infrastructure/Migrations/`:
- `AspNetUsers` (Identity) + custom fields: `FirstName`, `MiddleName`, `LastName`
- `Products`, `Categories`, `Brands`, `Colors`, `ProductColors` (junction)
- `Orders`, `OrderItems`, `UserAddresses`
- `CompanyDetails`, `CompanyServices`, `CompanySocialInfos`
- `OtpHandlers`, `ThirdPartyAuths`

## Key Conventions

- **Action naming**: `[StateName] Action Verb` — e.g., `[Account] User Get`, `[Product] Product Load`
- **API base URL**: `/api/` (resolved via Angular environment `baseURL`)
- **Country code default**: 977 (Nepal) on phone fields
- **`tokenService.UserName`** returns value of JWT `name` claim, which equals the phone number (username)
