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

                // --- 1b. Seed default Social Links ----------------------------------
                if (!await context.CompanySocialInfos.AnyAsync(x => x.CompanyInfoId == company.Id))
                {
                    context.CompanySocialInfos.AddRange(new[]
                    {
                        new CompanySocialInfo { SocialMediaName = "Facebook",  SocialMediaLink = "https://www.facebook.com/wowebazaar",  SocialMediaDesc = "Follow us on Facebook",  CompanyInfoId = company.Id },
                        new CompanySocialInfo { SocialMediaName = "Instagram", SocialMediaLink = "https://www.instagram.com/wowebazaar", SocialMediaDesc = "Follow us on Instagram", CompanyInfoId = company.Id },
                        new CompanySocialInfo { SocialMediaName = "Twitter",   SocialMediaLink = "https://twitter.com/wowebazaar",       SocialMediaDesc = "Follow us on Twitter/X", CompanyInfoId = company.Id },
                        new CompanySocialInfo { SocialMediaName = "Pinterest", SocialMediaLink = "https://www.pinterest.com/wowebazaar", SocialMediaDesc = "Follow us on Pinterest", CompanyInfoId = company.Id },
                        new CompanySocialInfo { SocialMediaName = "Tiktok",    SocialMediaLink = "https://www.tiktok.com/@wowebazaar",   SocialMediaDesc = "Follow us on TikTok",    CompanyInfoId = company.Id },
                    });
                    await context.SaveChangesAsync();
                }

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

                // --- 1c. Seed default Email Configuration ----------------------------
                if (!await context.EmailConfigurations.AnyAsync())
                {
                    context.EmailConfigurations.Add(new EmailConfiguration
                    {
                        CompanyInfoId = company.Id,
                        FromEmail = "tipsandtrickofcoding@gmail.com",
                        FromName = "WoWeBazaar",
                        ApiKey = ""   // Admin must set the real Resend API key via admin settings
                    });
                    await context.SaveChangesAsync();
                }

                // --- 1d. Seed default Media Configuration ----------------------------
                if (!await context.MediaConfigurations.AnyAsync())
                {
                    context.MediaConfigurations.Add(new MediaConfiguration
                    {
                        CompanyInfoId = company.Id,
                        CloudName = "dgq4i5xue",
                        ApiKey = "445879849766437",
                        ApiSecret = "gNXRYpKSproouOiHkWkMHPsmOVc"
                    });
                    await context.SaveChangesAsync();
                }

                // --- 1e. Seed default Home Configuration -----------------------------
                if (!await context.HomeConfigurations.AnyAsync())
                {
                    context.HomeConfigurations.Add(new HomeConfiguration
                    {
                        CompanyInfoId = company.Id,
                        Slider1ImageUrl = "/images/branded/hero.png",
                        Slider1LinkType = "external_url",
                        Slider1Link = "",
                        Slider2ImageUrl = "/images/branded/hero.png",
                        Slider2LinkType = "external_url",
                        Slider2Link = "",
                        Offer1ImageUrl = "/images/company/flight_1.jpg",
                        Offer1LinkType = "collection",
                        Offer1Link = "fashion",
                        Offer2ImageUrl = "/images/company/flight_2.jpg",
                        Offer2LinkType = "collection",
                        Offer2Link = "fashion"
                    });
                    await context.SaveChangesAsync();
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
