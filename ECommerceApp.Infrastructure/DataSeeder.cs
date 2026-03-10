using ECommerceApp.Domain.Entities.Company;
using ECommerceApp.Domain.Entities.Order;
using ECommerceApp.Domain.Entities.Product;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace ECommerceApp.Infrastructure
{
    public static class DataSeeder
    {
        // -------------------------------------------------------
        // Admin credentials — change the password after first run
        // -------------------------------------------------------
        private const string AdminPhone    = "9770000000";
        private const string AdminEmail    = "admin@ecommerceapp.com";
        private const string AdminPassword = "Admin@2026!";

        // Demo customer
        private const string DemoPhone    = "9841234567";
        private const string DemoEmail    = "customer@example.com";
        private const string DemoPassword = "Customer@123";

        public static async Task SeedAsync(IServiceProvider serviceProvider)
        {
            using var scope = serviceProvider.CreateScope();

            var context     = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
            var logger      = scope.ServiceProvider.GetRequiredService<ILogger<ApplicationDbContext>>();

            try
            {
                await context.Database.MigrateAsync();

                // --- 1. Seed Company ------------------------------------------------
                if (!await context.CompanyDetails.AnyAsync())
                {
                    context.CompanyDetails.Add(new CompanyDetail
                    {
                        CompanyName        = "ECommerceApp",
                        CompanyDescription = "Full-stack e-commerce platform",
                        CompanyEmail       = AdminEmail,
                        CompanyPhoneNumber = AdminPhone,
                        CompanyCode        = "WOW001",
                        OperationsDate     = "2026-01-01"
                    });
                    await context.SaveChangesAsync();
                }

                var company = await context.CompanyDetails.FirstAsync();

                // --- 1b. Seed Social Links ------------------------------------------
                if (!await context.CompanySocialInfos.AnyAsync(x => x.CompanyInfoId == company.Id))
                {
                    context.CompanySocialInfos.AddRange(new[]
                    {
                        new CompanySocialInfo { SocialMediaName = "Facebook",  SocialMediaLink = "https://facebook.com/",  SocialMediaDesc = "Follow us on Facebook",  CompanyInfoId = company.Id },
                        new CompanySocialInfo { SocialMediaName = "Instagram", SocialMediaLink = "https://instagram.com/", SocialMediaDesc = "Follow us on Instagram", CompanyInfoId = company.Id },
                        new CompanySocialInfo { SocialMediaName = "Twitter",   SocialMediaLink = "https://twitter.com/",   SocialMediaDesc = "Follow us on Twitter/X", CompanyInfoId = company.Id },
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
                        UserName = AdminPhone, Email = AdminEmail,
                        EmailConfirmed = true, PhoneNumber = AdminPhone,
                        PhoneNumberConfirmed = true,
                        FirstName = "System", MiddleName = "", LastName = "Admin",
                        IsActive = "Y", Created = DateTime.UtcNow, Updated = DateTime.UtcNow,
                        CompanyInfoId = company.Id
                    };
                    var result = await userManager.CreateAsync(admin, AdminPassword);
                    if (result.Succeeded)
                    {
                        await userManager.AddToRoleAsync(admin, "Admin");
                        logger.LogInformation("Admin user seeded (phone: {Phone})", AdminPhone);
                    }
                    else
                        logger.LogError("Failed to seed admin: {Errors}", string.Join(", ", result.Errors.Select(e => e.Description)));
                }

                // --- 3b. Seed Demo Customer -----------------------------------------
                if (await userManager.FindByNameAsync(DemoPhone) == null)
                {
                    var customer = new User
                    {
                        UserName = DemoPhone, Email = DemoEmail,
                        EmailConfirmed = true, PhoneNumber = DemoPhone,
                        PhoneNumberConfirmed = true,
                        FirstName = "John", MiddleName = "", LastName = "Doe",
                        IsActive = "Y", Created = DateTime.UtcNow, Updated = DateTime.UtcNow,
                        CompanyInfoId = company.Id
                    };
                    var result = await userManager.CreateAsync(customer, DemoPassword);
                    if (result.Succeeded)
                    {
                        await userManager.AddToRoleAsync(customer, "Customer");
                        logger.LogInformation("Demo customer seeded (phone: {Phone})", DemoPhone);
                    }
                }

                // --- 4. Seed Email Configuration ------------------------------------
                if (!await context.EmailConfigurations.AnyAsync())
                {
                    context.EmailConfigurations.Add(new EmailConfiguration
                    {
                        CompanyInfoId = company.Id,
                        FromEmail = "",
                        FromName = "ECommerceApp",
                        ApiKey = ""
                    });
                    await context.SaveChangesAsync();
                }

                // --- 5. Seed Media Configuration ------------------------------------
                if (!await context.MediaConfigurations.AnyAsync())
                {
                    context.MediaConfigurations.Add(new MediaConfiguration
                    {
                        CompanyInfoId = company.Id,
                        CloudName = "",
                        ApiKey = "",
                        ApiSecret = ""
                    });
                    await context.SaveChangesAsync();
                }

                // --- 6. Seed Home Configuration -------------------------------------
                if (!await context.HomeConfigurations.AnyAsync())
                {
                    context.HomeConfigurations.Add(new HomeConfiguration
                    {
                        CompanyInfoId = company.Id,
                        Slider1ImageUrl = "", Slider1LinkType = "external_url", Slider1Link = "",
                        Slider2ImageUrl = "", Slider2LinkType = "external_url", Slider2Link = "",
                        Offer1ImageUrl = "",  Offer1LinkType = "collection",    Offer1Link = "",
                        Offer2ImageUrl = "",  Offer2LinkType = "collection",    Offer2Link = ""
                    });
                    await context.SaveChangesAsync();
                }

                // --- 7. Seed Brands -------------------------------------------------
                if (!await context.Brands.AnyAsync())
                {
                    var now = DateTime.UtcNow;
                    context.Brands.AddRange(
                        new Brand { Name = "Nike",      Slug = "nike",      Description = "Just Do It",         IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Brand { Name = "Adidas",    Slug = "adidas",    Description = "Impossible Is Nothing", IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Brand { Name = "Puma",      Slug = "puma",      Description = "Forever Faster",     IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Brand { Name = "Levi's",    Slug = "levis",     Description = "Quality Never Goes Out of Style", IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Brand { Name = "H&M",       Slug = "hm",        Description = "Fashion and Quality", IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Brand { Name = "Zara",      Slug = "zara",      Description = "Love Your Curves",   IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Brand { Name = "Uniqlo",    Slug = "uniqlo",    Description = "Made For All",       IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Brand { Name = "Samsung",   Slug = "samsung",   Description = "Do What You Can't",  IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Brand { Name = "Apple",     Slug = "apple",     Description = "Think Different",    IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now }
                    );
                    await context.SaveChangesAsync();
                    logger.LogInformation("Seeded 9 brands");
                }

                // --- 8. Seed Colors -------------------------------------------------
                if (!await context.Colors.AnyAsync())
                {
                    context.Colors.AddRange(
                        new Color { Name = "Red",    Slug = "red",    HexCode = "#FF0000", IsActive = true, CompanyInfoId = company.Id },
                        new Color { Name = "Blue",   Slug = "blue",   HexCode = "#0000FF", IsActive = true, CompanyInfoId = company.Id },
                        new Color { Name = "Green",  Slug = "green",  HexCode = "#00FF00", IsActive = true, CompanyInfoId = company.Id },
                        new Color { Name = "Black",  Slug = "black",  HexCode = "#000000", IsActive = true, CompanyInfoId = company.Id },
                        new Color { Name = "White",  Slug = "white",  HexCode = "#FFFFFF", IsActive = true, CompanyInfoId = company.Id },
                        new Color { Name = "Yellow", Slug = "yellow", HexCode = "#FFFF00", IsActive = true, CompanyInfoId = company.Id },
                        new Color { Name = "Pink",   Slug = "pink",   HexCode = "#FFC0CB", IsActive = true, CompanyInfoId = company.Id },
                        new Color { Name = "Gray",   Slug = "gray",   HexCode = "#808080", IsActive = true, CompanyInfoId = company.Id },
                        new Color { Name = "Brown",  Slug = "brown",  HexCode = "#8B4513", IsActive = true, CompanyInfoId = company.Id },
                        new Color { Name = "Navy",   Slug = "navy",   HexCode = "#000080", IsActive = true, CompanyInfoId = company.Id }
                    );
                    await context.SaveChangesAsync();
                    logger.LogInformation("Seeded 10 colors");
                }

                // --- 9. Seed Categories (parent + subcategories) --------------------
                if (!await context.Categories.AnyAsync())
                {
                    var now = DateTime.UtcNow;
                    var fashion = new Category { Name = "Fashion", Slug = "fashion", Description = "Clothing & Apparel", IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now };
                    var electronics = new Category { Name = "Electronics", Slug = "electronics", Description = "Gadgets & Devices", IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now };
                    var home = new Category { Name = "Home & Living", Slug = "home-living", Description = "Furniture & Decor", IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now };
                    var sports = new Category { Name = "Sports", Slug = "sports", Description = "Sports & Outdoors", IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now };

                    context.Categories.AddRange(fashion, electronics, home, sports);
                    await context.SaveChangesAsync();

                    // Subcategories
                    context.Categories.AddRange(
                        new Category { Name = "Men",         Slug = "men",         Description = "Men's clothing",     ParentId = fashion.Id,     IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Category { Name = "Women",       Slug = "women",       Description = "Women's clothing",   ParentId = fashion.Id,     IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Category { Name = "Kids",        Slug = "kids",        Description = "Kids' clothing",     ParentId = fashion.Id,     IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Category { Name = "Smartphones", Slug = "smartphones", Description = "Phones & Tablets",   ParentId = electronics.Id, IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Category { Name = "Laptops",     Slug = "laptops",     Description = "Laptops & PCs",      ParentId = electronics.Id, IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Category { Name = "Accessories",  Slug = "accessories",  Description = "Tech accessories",   ParentId = electronics.Id, IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Category { Name = "Furniture",   Slug = "furniture",   Description = "Home furniture",     ParentId = home.Id,        IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Category { Name = "Decor",       Slug = "decor",       Description = "Home decor",         ParentId = home.Id,        IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Category { Name = "Running",     Slug = "running",     Description = "Running gear",       ParentId = sports.Id,      IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now },
                        new Category { Name = "Gym",         Slug = "gym",         Description = "Gym equipment",      ParentId = sports.Id,      IsActive = true, CompanyInfoId = company.Id, CreatedAt = now, UpdatedAt = now }
                    );
                    await context.SaveChangesAsync();
                    logger.LogInformation("Seeded 14 categories (4 parents + 10 subcategories)");
                }

                // --- 10. Seed Demo Products -----------------------------------------
                if (!await context.Products.AnyAsync())
                {
                    var now = DateTime.UtcNow;
                    var brands = await context.Brands.ToListAsync();
                    var categories = await context.Categories.Where(c => c.ParentId != null).ToListAsync();
                    var colors = await context.Colors.ToListAsync();

                    var products = new List<Product>
                    {
                        MakeProduct("Classic Running Shoes", "High-performance running shoes with superior cushioning", 129.99m, 99.99m, 50, brands, "nike", categories, "running", company.Id, now),
                        MakeProduct("Urban Sneakers", "Stylish everyday sneakers for urban lifestyle", 89.99m, null, 75, brands, "adidas", categories, "men", company.Id, now),
                        MakeProduct("Sports Track Pants", "Comfortable track pants for workouts and casual wear", 49.99m, 39.99m, 100, brands, "puma", categories, "gym", company.Id, now),
                        MakeProduct("Slim Fit Jeans", "Classic slim-fit denim jeans", 79.99m, null, 60, brands, "levis", categories, "men", company.Id, now),
                        MakeProduct("Summer Dress", "Light and breezy summer dress in floral print", 59.99m, 44.99m, 40, brands, "hm", categories, "women", company.Id, now),
                        MakeProduct("Wool Blend Coat", "Premium wool blend overcoat for winter", 199.99m, null, 25, brands, "zara", categories, "women", company.Id, now),
                        MakeProduct("Kids Cartoon T-Shirt", "Fun cartoon printed t-shirt for kids", 24.99m, 19.99m, 120, brands, "hm", categories, "kids", company.Id, now),
                        MakeProduct("Wireless Earbuds Pro", "Noise-cancelling wireless earbuds with 24hr battery", 149.99m, 129.99m, 200, brands, "samsung", categories, "accessories", company.Id, now),
                        MakeProduct("Smart Watch Ultra", "Advanced smartwatch with health monitoring", 299.99m, null, 30, brands, "apple", categories, "smartphones", company.Id, now),
                        MakeProduct("Laptop Stand Ergonomic", "Adjustable aluminum laptop stand", 39.99m, 29.99m, 80, brands, "uniqlo", categories, "laptops", company.Id, now),
                        MakeProduct("Modern Coffee Table", "Minimalist oak coffee table with storage", 249.99m, null, 15, brands, "zara", categories, "furniture", company.Id, now),
                        MakeProduct("Decorative Wall Art Set", "Set of 3 abstract canvas prints", 69.99m, 54.99m, 35, brands, "hm", categories, "decor", company.Id, now),
                        MakeProduct("Running Backpack", "Lightweight hydration backpack for runners", 44.99m, null, 45, brands, "nike", categories, "running", company.Id, now),
                        MakeProduct("Resistance Bands Set", "Professional 5-piece resistance band set", 29.99m, 22.99m, 90, brands, "puma", categories, "gym", company.Id, now),
                        MakeProduct("Cotton Basics Pack", "Essential cotton t-shirt 3-pack", 34.99m, null, 150, brands, "uniqlo", categories, "men", company.Id, now),
                    };

                    context.Products.AddRange(products);
                    await context.SaveChangesAsync();

                    // Assign random colors to each product
                    var rng = new Random(42);
                    foreach (var product in products)
                    {
                        var colorCount = rng.Next(1, 4);
                        var selectedColors = colors.OrderBy(_ => rng.Next()).Take(colorCount).ToList();
                        foreach (var color in selectedColors)
                        {
                            context.Set<ProductColor>().Add(new ProductColor
                            {
                                ProductId = product.Id,
                                ColorId = color.Id
                            });
                        }
                    }
                    await context.SaveChangesAsync();
                    logger.LogInformation("Seeded {Count} demo products with colors", products.Count);
                }

                // --- 11. Seed Coupons -----------------------------------------------
                if (!await context.Coupons.AnyAsync())
                {
                    var coupons = new List<Coupon>
                    {
                        new Coupon { Code = "WELCOME10", Title = "Welcome 10% Off", Description = "Get 10% off on your first order", DiscountType = "percentage", Amount = 10, ExpiresAt = DateTime.UtcNow.AddYears(1), IsActive = true, UsageCount = 0, CompanyInfoId = company.Id, CreatedAt = DateTime.UtcNow },
                        new Coupon { Code = "SAVE50",    Title = "Flat $50 Off",     Description = "Flat $50 discount on orders above $300",   DiscountType = "flat", Amount = 50,  MinSpend = 300, ExpiresAt = DateTime.UtcNow.AddYears(1), IsActive = true, UsageCount = 0, CompanyInfoId = company.Id, CreatedAt = DateTime.UtcNow },
                        new Coupon { Code = "MEGA20",    Title = "Mega 20% Off",     Description = "20% off on orders between $500 and $5000", DiscountType = "percentage", Amount = 20, MinSpend = 500, MaxSpend = 5000, ExpiresAt = DateTime.UtcNow.AddMonths(6), IsActive = true, UsageLimit = 100, UsageCount = 0, CompanyInfoId = company.Id, CreatedAt = DateTime.UtcNow },
                        new Coupon { Code = "FLAT100",   Title = "Flat $100 Off",    Description = "$100 off on orders above $800",            DiscountType = "flat", Amount = 100, MinSpend = 800, ExpiresAt = DateTime.UtcNow.AddMonths(3), IsActive = true, UsageLimit = 50, UsageCount = 0, CompanyInfoId = company.Id, CreatedAt = DateTime.UtcNow }
                    };
                    context.Coupons.AddRange(coupons);
                    await context.SaveChangesAsync();
                    logger.LogInformation("Seeded {Count} coupons", coupons.Count);
                }

                logger.LogInformation("Data seeding completed successfully");
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An error occurred during data seeding");
            }
        }

        private static Product MakeProduct(string name, string desc, decimal price, decimal? salePrice, int qty,
            List<Brand> brands, string brandSlug, List<Category> categories, string catSlug, int companyId, DateTime now)
        {
            var slug = name.ToLowerInvariant().Replace(" ", "-").Replace("'", "");
            return new Product
            {
                Name = name,
                Slug = slug,
                ShortDescription = desc,
                Description = desc,
                Price = price,
                SalePrice = salePrice,
                SKU = $"SKU-{slug[..Math.Min(slug.Length, 10)].ToUpperInvariant()}-{qty}",
                StockStatus = "in_stock",
                Quantity = qty,
                IsActive = true,
                IsFeatured = salePrice.HasValue,
                CategoryId = categories.FirstOrDefault(c => c.Slug == catSlug)?.Id ?? categories.First().Id,
                BrandId = brands.FirstOrDefault(b => b.Slug == brandSlug)?.Id,
                CompanyInfoId = companyId,
                CreatedAt = now,
                UpdatedAt = now
            };
        }
    }
}
