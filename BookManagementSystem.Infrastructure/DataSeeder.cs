using BookManagementSystem.Domain.Entities.Company;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace BookManagementSystem.Infrastructure
{
    public static class DataSeeder
    {
        // -------------------------------------------------------
        // Admin credentials — change the password after first run
        // -------------------------------------------------------
        private const string AdminPhone    = "9770000000";
        private const string AdminEmail    = "admin@wowcommerce.com";
        private const string AdminPassword = "Admin@2026!";

        public static async Task SeedAsync(IServiceProvider serviceProvider)
        {
            using var scope = serviceProvider.CreateScope();

            var context     = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
            var logger      = scope.ServiceProvider.GetRequiredService<ILogger<ApplicationDbContext>>();

            try
            {
                // Apply any pending migrations automatically
                await context.Database.MigrateAsync();

                // --- 1. Seed Company ------------------------------------------------
                if (!await context.CompanyDetails.AnyAsync())
                {
                    context.CompanyDetails.Add(new CompanyDetail
                    {
                        CompanyName        = "WOW Commerce",
                        CompanyDescription = "Full-stack e-commerce platform",
                        CompanyEmail       = AdminEmail,
                        CompanyPhoneNumber = AdminPhone,
                        CompanyCode        = "WOW001",
                        OperationsDate     = "2026-01-01"
                    });
                    await context.SaveChangesAsync();
                }

                var company = await context.CompanyDetails.FirstAsync();

                // --- 2. Seed Roles --------------------------------------------------
                string[] roles = ["Admin", "Customer"];
                foreach (var role in roles)
                {
                    if (!await roleManager.RoleExistsAsync(role))
                        await roleManager.CreateAsync(new IdentityRole(role));
                }

                // --- 3. Seed Admin User ---------------------------------------------
                if (await userManager.FindByNameAsync(AdminPhone) == null)
                {
                    var admin = new User
                    {
                        UserName             = AdminPhone,
                        Email                = AdminEmail,
                        EmailConfirmed       = true,
                        PhoneNumber          = AdminPhone,
                        PhoneNumberConfirmed = true,
                        FirstName            = "System",
                        MiddleName           = "",
                        LastName             = "Admin",
                        IsActive             = "Y",
                        Created              = DateTime.UtcNow,
                        Updated              = DateTime.UtcNow,
                        CompanyInfoId        = company.Id
                    };

                    var result = await userManager.CreateAsync(admin, AdminPassword);
                    if (result.Succeeded)
                    {
                        await userManager.AddToRoleAsync(admin, "Admin");
                        logger.LogInformation("Admin user seeded successfully (phone: {Phone})", AdminPhone);
                    }
                    else
                    {
                        var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                        logger.LogError("Failed to seed admin user: {Errors}", errors);
                    }
                }
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An error occurred during data seeding");
            }
        }
    }
}
