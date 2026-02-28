using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Infrastructure;
using BookManagementSystem.Service.Function;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace BookManagementSystem.Service.Services
{
    public class AdminUserService
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AdminUserService(ApplicationDbContext context, UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public async Task<AdminUserListResponse> GetAllUsersAsync(int page = 1, int pageSize = 15)
        {
            var users = _userManager.Users.OrderByDescending(u => u.Created);
            var total = await users.CountAsync();
            var userList = await users
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var result = new List<AdminUserDto>();
            int idCounter = 1;
            foreach (var user in userList)
            {
                var roles = await _userManager.GetRolesAsync(user);
                var roleName = roles.FirstOrDefault() ?? "user";
                result.Add(new AdminUserDto
                {
                    Id = idCounter++,
                    Name = $"{user.FirstName} {user.MiddleName} {user.LastName}".Trim().Replace("  ", " "),
                    Email = user.Email,
                    Phone = user.PhoneNumber ?? user.UserName,
                    Status = user.IsActive == "t",
                    RoleName = roleName,
                    Role = new AdminRoleDto { Id = roleName == "Admin" ? 1 : 2, Name = roleName },
                    CreatedAt = user.Created.ToString("yyyy-MM-ddTHH:mm:ss"),
                });
            }

            return new AdminUserListResponse
            {
                Data = result,
                Total = total
            };
        }

        public async Task<Common> CreateUserAsync(CreateAdminUserRequest request)
        {
            var existingUser = await _userManager.FindByNameAsync(request.Phone);
            if (existingUser != null)
                return new Common { Code = StatusCodes.Status400BadRequest, Status = Level.Failed, Message = "User with this phone already exists" };

            var names = Helper.SplitStringBySpace(request.Name);
            var user = new User
            {
                UserName = request.Phone,
                Email = request.Email,
                PhoneNumber = request.Phone,
                IsActive = "t",
                Created = DateTime.UtcNow,
            };

            if (names != null)
            {
                foreach (var name in names)
                {
                    if (name.Item1 == "FirstName") user.FirstName = name.Item2;
                    else if (name.Item1 == "MiddleName") user.MiddleName = name.Item2;
                    else user.LastName = name.Item2;
                }
            }

            var createResult = await _userManager.CreateAsync(user, request.Password);
            if (!createResult.Succeeded)
                return new Common { Code = StatusCodes.Status400BadRequest, Status = Level.Failed, Message = createResult.Errors.FirstOrDefault()?.Description ?? "Failed to create user" };

            var roleName = request.RoleId == 1 ? "Admin" : "Customer";
            var roleExists = await _roleManager.RoleExistsAsync(roleName);
            if (!roleExists)
                await _roleManager.CreateAsync(new IdentityRole(roleName));

            await _userManager.AddToRoleAsync(user, roleName);

            return new Common { Code = StatusCodes.Status200OK, Status = Level.Success, Message = "User created successfully" };
        }

        public async Task<Common> UpdateUserAsync(string phone, UpdateAdminUserRequest request)
        {
            var user = await _userManager.FindByNameAsync(phone);
            if (user == null)
                return new Common { Code = StatusCodes.Status404NotFound, Status = Level.Failed, Message = "User not found" };

            if (!string.IsNullOrWhiteSpace(request.Name))
            {
                var names = Helper.SplitStringBySpace(request.Name);
                if (names != null)
                {
                    foreach (var name in names)
                    {
                        if (name.Item1 == "FirstName") user.FirstName = name.Item2;
                        else if (name.Item1 == "MiddleName") user.MiddleName = name.Item2;
                        else user.LastName = name.Item2;
                    }
                }
            }

            if (!string.IsNullOrWhiteSpace(request.Email))
                user.Email = request.Email;

            if (!string.IsNullOrWhiteSpace(request.Phone))
            {
                user.PhoneNumber = request.Phone;
                user.UserName = request.Phone;
            }

            if (request.Status.HasValue)
                user.IsActive = request.Status.Value ? "t" : "f";

            user.Updated = DateTime.UtcNow;
            var result = await _userManager.UpdateAsync(user);
            if (result.Succeeded)
                return new Common { Code = StatusCodes.Status200OK, Status = Level.Success, Message = "User updated successfully" };

            return new Common { Code = StatusCodes.Status400BadRequest, Status = Level.Failed, Message = result.Errors.FirstOrDefault()?.Description ?? "Failed to update user" };
        }

        public async Task<Common> DeleteUserAsync(string phone)
        {
            var user = await _userManager.FindByNameAsync(phone);
            if (user == null)
                return new Common { Code = StatusCodes.Status404NotFound, Status = Level.Failed, Message = "User not found" };

            var result = await _userManager.DeleteAsync(user);
            if (result.Succeeded)
                return new Common { Code = StatusCodes.Status200OK, Status = Level.Success, Message = "User deleted successfully" };

            return new Common { Code = StatusCodes.Status400BadRequest, Status = Level.Failed, Message = "Failed to delete user" };
        }
    }
}
