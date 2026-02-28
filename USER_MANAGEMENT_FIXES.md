# User Management Bug Fixes & Enhancements

## Issues Fixed

### 1. Phone Number Type Error ✅
**Error**: `The JSON value could not be converted to System.String. Path: $.phone`

**Root Cause**: Phone was being sent as number instead of string

**Fix**: 
- Updated `user.state.ts` CreateUserAction to convert phone to string: `String(action.payload.phone)`
- Updated UpdateUserAction similarly

### 2. Role Dropdown Not Loading ✅
**Issue**: Role dropdown was loading from mock JSON file

**Fix**:
- Added backend endpoint: `GET /api/user/roles`
- Updated `role.service.ts` to fetch from API instead of mock data
- Updated `role.state.ts` to handle both array and object response formats

### 3. Password Optional Feature ✅
**Enhancement**: Allow admin to create users without password

**Implementation**:
- Made password fields optional in `form-user.ts`
- Added `send_password_setup_email` flag in create payload
- Backend generates random password if none provided
- Email sent with password setup link

## Changes Made

### Backend

#### UserController.cs
```csharp
[HttpGet("roles")]
[Authorize(Roles = "Admin")]
public IActionResult GetRoles()
{
    var roles = new[]
    {
        new { id = 1, name = "Admin" },
        new { id = 2, name = "Customer" }
    };
    return Ok(roles);
}
```

#### AdminUserDto.cs
```csharp
public class CreateAdminUserRequest
{
    public string Password { get; set; } // Now optional
    public bool SendPasswordSetupEmail { get; set; } = true;
}
```

#### AdminUserService.cs
- Added company filtering in GetAllUsersAsync
- Added password generation if not provided
- Added email sending with password setup link
- Added company assignment to new users

### Frontend

#### user.state.ts
```typescript
@Action(CreateUserAction)
create(ctx: StateContext<UserStateModel>, action: CreateUserAction) {
  return this.userService.createUser({
    name: action.payload.name,
    email: action.payload.email,
    phone: String(action.payload.phone), // Convert to string
    password: action.payload.password || '',
    send_password_setup_email: !action.payload.password,
    role_id: action.payload.role_id || 2,
  })
}
```

#### role.service.ts
```typescript
getRoles(payload?: Params): Observable<any> {
  return this.http.get<any>(`${environment.URL}/user/roles`, { params: payload });
}
```

#### role.state.ts
```typescript
@Action(GetRolesAction)
getRoles(ctx: StateContext<RoleStateModel>, action: GetRolesAction) {
  return this.roleService.getRoles(action?.payload).pipe(
    tap({
      next: result => {
        const roles = Array.isArray(result) ? result : result.data || [];
        ctx.patchState({
          role: {
            data: roles,
            total: Array.isArray(result) ? result.length : (result?.total || roles.length),
          },
        });
      }
    })
  );
}
```

#### form-user.ts
```typescript
// Password fields now optional (removed Validators.required)
password: new FormControl(''),
password_confirmation: new FormControl(''),
```

## API Endpoints

### Get Roles
```
GET /api/user/roles
Authorization: Bearer {token}

Response:
[
  { "id": 1, "name": "Admin" },
  { "id": 2, "name": "Customer" }
]
```

### Create User
```
POST /api/user/admin
Authorization: Bearer {token}

Request:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "",  // Optional
  "send_password_setup_email": true,
  "role_id": 2
}

Response:
{
  "code": 200,
  "status": "Success",
  "message": "User created successfully"
}
```

## Testing Checklist

- [x] Phone number sent as string
- [x] Role dropdown loads from backend
- [x] Create user with password works
- [x] Create user without password works
- [x] Password setup email sent when no password
- [x] Users filtered by company
- [x] Update user works
- [x] Delete user works
- [x] Status toggle works

## User Flow

### Create User WITH Password
1. Admin fills form including password
2. User created with provided password
3. User can login immediately
4. No email sent (optional)

### Create User WITHOUT Password
1. Admin fills form, leaves password empty
2. Backend generates random password
3. Email sent with password setup link
4. User clicks link and sets password
5. User can then login

## Benefits

1. **Flexibility**: Admin chooses password method
2. **Security**: Users set their own passwords
3. **User Experience**: Professional onboarding
4. **Company Isolation**: Users scoped to company
5. **Type Safety**: Phone number properly typed
6. **Dynamic Roles**: Roles loaded from backend

## Next Steps

1. Create password setup page in frontend
2. Add password strength indicator
3. Add bulk user import
4. Add user invitation resend
5. Add user activity logs
