using BookManagementSystem.Domain.Entities.Company;
using BookManagementSystem.Domain.Entities.Order;
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

                // --- 4. Seed Coupons ------------------------------------------------
                if (!await context.Coupons.AnyAsync())
                {
                    var coupons = new List<Coupon>
                    {
                        new Coupon
                        {
                            Code          = "WELCOME10",
                            Title         = "Welcome 10% Off",
                            Description   = "Get 10% off on your first order",
                            DiscountType  = "percentage",
                            Amount        = 10,
                            MinSpend      = null,
                            MaxSpend      = null,
                            ExpiresAt     = DateTime.UtcNow.AddYears(1),
                            IsActive      = true,
                            UsageLimit    = null,
                            UsageCount    = 0,
                            CompanyInfoId = company.Id,
                            CreatedAt     = DateTime.UtcNow
                        },
                        new Coupon
                        {
                            Code          = "SAVE50",
                            Title         = "Flat Rs. 50 Off",
                            Description   = "Flat Rs. 50 discount on orders above Rs. 300",
                            DiscountType  = "flat",
                            Amount        = 50,
                            MinSpend      = 300,
                            MaxSpend      = null,
                            ExpiresAt     = DateTime.UtcNow.AddYears(1),
                            IsActive      = true,
                            UsageLimit    = null,
                            UsageCount    = 0,
                            CompanyInfoId = company.Id,
                            CreatedAt     = DateTime.UtcNow
                        },
                        new Coupon
                        {
                            Code          = "MEGA20",
                            Title         = "Mega 20% Off",
                            Description   = "20% off on orders between Rs. 500 and Rs. 5000",
                            DiscountType  = "percentage",
                            Amount        = 20,
                            MinSpend      = 500,
                            MaxSpend      = 5000,
                            ExpiresAt     = DateTime.UtcNow.AddMonths(6),
                            IsActive      = true,
                            UsageLimit    = 100,
                            UsageCount    = 0,
                            CompanyInfoId = company.Id,
                            CreatedAt     = DateTime.UtcNow
                        },
                        new Coupon
                        {
                            Code          = "FLAT100",
                            Title         = "Flat Rs. 100 Off",
                            Description   = "Rs. 100 off on orders above Rs. 800",
                            DiscountType  = "flat",
                            Amount        = 100,
                            MinSpend      = 800,
                            MaxSpend      = null,
                            ExpiresAt     = DateTime.UtcNow.AddMonths(3),
                            IsActive      = true,
                            UsageLimit    = 50,
                            UsageCount    = 0,
                            CompanyInfoId = company.Id,
                            CreatedAt     = DateTime.UtcNow
                        }
                    };

                    context.Coupons.AddRange(coupons);
                    await context.SaveChangesAsync();
                    logger.LogInformation("Seeded {Count} test coupons", coupons.Count);
                }
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An error occurred during data seeding");
            }
        }
    }
}
