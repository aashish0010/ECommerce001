# Company Integration Implementation

## Overview
This document describes the implementation of linking AspNetUser with Company using CompanyCode in both registration and login flows.

## Backend Changes (BookManagementSystem)

### 1. Database Schema
- **AspNetUsers Table**: Already has `CompanyInfoId` column (nullable, integer)
- **Foreign Key**: Links to `CompanyDetails` table with cascade delete

### 2. DTOs Updated

#### LoginRequest (UserManagement.cs)
```csharp
public class LoginRequest
{
    [Required(ErrorMessage = "Username is required")]
    public string UserName { get; set; }

    [Required(ErrorMessage = "Password is required")]
    public string Password { get; set; }

    [Required(ErrorMessage = "Company code is required")]
    public string CompanyCode { get; set; }
}
```

#### RegisterRequest (UserManagement.cs)
- Already had `CompanyCode` field (no changes needed)

### 3. Service Layer Changes

#### UserManagementService.cs - Login Method
- Updated to validate CompanyCode against user's associated company
- Returns 403 Forbidden if CompanyCode doesn't match
- Includes CompanyInfo in user query using `.Include(u => u.CompanyInfo)`

#### UserManagementService.cs - Register Method
- Already validates CompanyCode and links user to company
- No changes needed

### 4. Controller
- AuthController already supports CompanyCode in third-party login callbacks
- No changes needed

## Frontend Changes

### 1. ecommerce-admin

#### Environment Configuration
- **environment.ts**: Added `companyCode: 'COMP001'`
- **environment.development.ts**: Added `companyCode: 'COMP001'`

#### Interface Updates
- **auth.interface.ts**: Added `companyCode: string` to `IAdminLoginModel`

#### Component Updates
- **login.ts**: 
  - Imports environment
  - Adds companyCode from environment to login payload
  ```typescript
  const loginData = {
    ...this.form.value,
    companyCode: environment.companyCode,
  };
  ```

### 2. ecommerce (Customer Frontend)

#### Environment Configuration
- Already had `companyCode: 'WOW001'` and `companyInfoId: 1`

#### Interface Updates
- **auth.interface.ts**: 
  - Added `companyCode: string` to `IAuthUserState`
  - Added `companyCode: string` to `IRegisterModal`

#### Service Updates
- **auth.service.ts**:
  - Login method updated to accept and send companyCode
  - Register method already sends companyCode from environment

#### Component Updates
- **login.ts**: 
  - Imports environment
  - Adds companyCode from environment to login payload

## How It Works

### Registration Flow
1. User fills registration form
2. Frontend adds `companyCode` from environment config
3. Backend validates company exists using `FindCompanyByCompanyCode`
4. User is created with `CompanyInfoId` linking to the company
5. User is assigned "user" role

### Login Flow
1. User enters username and password
2. Frontend adds `companyCode` from environment config
3. Backend finds user by username
4. Backend validates user's `CompanyInfo.CompanyCode` matches provided code
5. If match: generates JWT token and refresh token
6. If no match: returns 403 Forbidden error

### Third-Party Login (Google/Facebook)
- Already implemented with CompanyCode support
- CompanyCode passed via authentication properties
- User linked to company on first login

## Configuration

### Setting Company Code

#### For Admin Panel (ecommerce-admin)
Edit `src/environments/environment.ts` and `environment.development.ts`:
```typescript
companyCode: 'YOUR_COMPANY_CODE'
```

#### For Customer Frontend (ecommerce)
Edit `src/environments/environment.ts` and `environment.development.ts`:
```typescript
companyCode: 'YOUR_COMPANY_CODE'
companyInfoId: YOUR_COMPANY_ID
```

## Security Benefits
1. **Multi-tenancy**: Users are isolated by company
2. **Access Control**: Users can only login with correct company code
3. **Data Segregation**: All data operations filtered by CompanyInfoId
4. **Prevents Cross-Company Access**: Invalid company code = login denied

## Database Relationships
```
CompanyDetails (1) ----< (Many) AspNetUsers
    |
    +-- CompanyInfoId (PK)
    +-- CompanyCode (Unique)
    
AspNetUsers
    |
    +-- CompanyInfoId (FK) -> CompanyDetails.Id
```

## API Endpoints

### POST /api/auth/login
```json
{
  "userName": "user@example.com",
  "password": "password123",
  "companyCode": "COMP001"
}
```

### POST /api/auth/register
```json
{
  "userName": "newuser",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phoneNumber": "1234567890",
  "password": "password123",
  "companyCode": "COMP001"
}
```

### POST /api/auth/admin-login
```json
{
  "userName": "admin@example.com",
  "password": "adminpass",
  "companyCode": "COMP001"
}
```

## Testing
1. Ensure company exists in database with valid CompanyCode
2. Register new user with company code
3. Login with correct company code - should succeed
4. Login with wrong company code - should fail with 403
5. Verify user's CompanyInfoId is set correctly in database

## Notes
- CompanyCode is case-sensitive
- CompanyInfoId is required for all users
- Existing users without CompanyInfoId will need migration
- All product/order/cart operations should filter by user's CompanyInfoId
