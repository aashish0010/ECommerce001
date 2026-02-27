using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Domain.Entities.Company;
using BookManagementSystem.Domain.Entities.Order;
using BookManagementSystem.Domain.Entities.Product;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Product = BookManagementSystem.Domain.Entities.Product.Product;
using Category = BookManagementSystem.Domain.Entities.Product.Category;

namespace BookManagementSystem.Infrastructure
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<OtpHandler> OtpManagers { get; set; }
        public DbSet<ThirdPartyAuth> ThirdPartyLoginHandlers { get; set; }

        public DbSet<CompanyDetail> CompanyDetails { get; set; }
        public DbSet<CompanyService> CompanyServices { get; set; }
        public DbSet<CompanySocialInfo> CompanySocialInfos { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Color> Colors { get; set; }
        public DbSet<ProductColor> ProductColors { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<UserAddress> UserAddresses { get; set; }
        public DbSet<Coupon> Coupons { get; set; }
        public DbSet<WishlistItem> WishlistItems { get; set; }
        public DbSet<CompareItem> CompareItems { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            #region Users

            builder.Entity<User>().Property(x => x.PhoneNumber)
               .HasMaxLength(20);
            //builder.Entity<User>().Property(x => x.CreatedBy)
            //   .HasMaxLength(100);
            builder.Entity<User>().Property(x => x.UpdatedBy)
               .HasMaxLength(100);
            builder.Entity<User>().Property(x => x.ThirdPartyId)
               .HasMaxLength(100);
            builder.Entity<User>().Property(x => x.FirstName)
               .HasMaxLength(100);
            builder.Entity<User>().Property(x => x.MiddleName)
               .HasMaxLength(100);
            builder.Entity<User>().Property(x => x.LastName)
               .HasMaxLength(100);
            builder.Entity<User>().Property(x => x.IsActive)
               .HasMaxLength(1);
            builder.Entity<User>().HasOne(x => x.CompanyInfo).WithMany()
             .HasForeignKey(x => x.CompanyInfoId)
             .OnDelete(DeleteBehavior.Cascade);

            #endregion

            #region

            builder.Entity<ThirdPartyAuth>().Property(x => x.Username)
               .HasMaxLength(20);
            builder.Entity<ThirdPartyAuth>().Property(x => x.UserId)
               .HasMaxLength(100);
            builder.Entity<ThirdPartyAuth>().Property(x => x.Provider)
               .HasMaxLength(100);
            builder.Entity<ThirdPartyAuth>().Property(x => x.UserEmail)
               .HasMaxLength(100);
            builder.Entity<ThirdPartyAuth>().HasOne(x => x.CompanyInfo).WithMany()
            .HasForeignKey(x => x.CompanyInfoId)
            .OnDelete(DeleteBehavior.Cascade);

            #endregion

            #region OTP Handler


            builder.Entity<OtpHandler>().Property(x => x.IsVerify)
               .HasMaxLength(1);
            builder.Entity<OtpHandler>().Property(x => x.Email)
               .HasMaxLength(50);
            builder.Entity<OtpHandler>().Property(x => x.Otp)
                .HasMaxLength(50);
            builder.Entity<OtpHandler>().HasKey(x => x.Id);

            #endregion

            #region Company Info

            builder.Entity<CompanyDetail>().HasKey(x => x.Id);
            builder.Entity<CompanyDetail>().Property(x => x.Id)
                .ValueGeneratedOnAdd();

            builder.Entity<CompanyDetail>().Property(x => x.CompanyName)
                .HasMaxLength(200).IsRequired();
            builder.Entity<CompanyDetail>().Property(x => x.CompanyDescription)
                .HasMaxLength(500);

            builder.Entity<CompanyDetail>().Property(x => x.CompanyEmail)
                .HasMaxLength(200).IsRequired();

            builder.Entity<CompanyDetail>().Property(x => x.OperationsDate)
                .HasMaxLength(200);

            builder.Entity<CompanyDetail>().Property(x => x.CompanyPhoneNumber)
               .HasMaxLength(200).IsRequired();

            builder.Entity<CompanyDetail>().Property(x => x.CompanyCode)
                .HasMaxLength(50).IsRequired();

            #endregion

            #region Company Service
            builder.Entity<CompanyService>().HasKey(x => x.Id);
            builder.Entity<CompanyService>().Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Entity<CompanyService>().HasOne(x => x.CompanyInfo).WithMany()
                .HasForeignKey(x => x.CompanyInfoId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<CompanyService>().Property(x => x.Name).HasMaxLength(200).IsRequired();

            #endregion

            #region Company Social Info
            builder.Entity<CompanySocialInfo>().HasKey(x => x.Id);
            builder.Entity<CompanySocialInfo>().Property(x => x.SocialMediaName).HasMaxLength(200).IsRequired();
            builder.Entity<CompanySocialInfo>().Property(x => x.SocialMediaDesc).HasMaxLength(200);
            builder.Entity<CompanySocialInfo>().HasOne(x => x.CompanyInfo).WithMany()
                .HasForeignKey(x => x.CompanyInfoId)
                .OnDelete(DeleteBehavior.Cascade);

            #endregion

            #region Category

            builder.Entity<Category>().HasKey(x => x.Id);
            builder.Entity<Category>().Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Entity<Category>().Property(x => x.Name).HasMaxLength(200).IsRequired();
            builder.Entity<Category>().Property(x => x.Slug).HasMaxLength(200).IsRequired();
            builder.Entity<Category>().Property(x => x.Description).HasMaxLength(500);
            builder.Entity<Category>().Property(x => x.ImageUrl).HasMaxLength(500);
            builder.Entity<Category>()
                .HasOne(x => x.Parent)
                .WithMany(x => x.SubCategories)
                .HasForeignKey(x => x.ParentId)
                .OnDelete(DeleteBehavior.Restrict)
                .IsRequired(false);
            builder.Entity<Category>()
                .HasOne(x => x.CompanyInfo)
                .WithMany()
                .HasForeignKey(x => x.CompanyInfoId)
                .OnDelete(DeleteBehavior.Cascade);

            #endregion

            #region Product

            builder.Entity<Product>().HasKey(x => x.Id);
            builder.Entity<Product>().Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Entity<Product>().Property(x => x.Name).HasMaxLength(300).IsRequired();
            builder.Entity<Product>().Property(x => x.Slug).HasMaxLength(300).IsRequired();
            builder.Entity<Product>().Property(x => x.ShortDescription).HasMaxLength(500);
            builder.Entity<Product>().Property(x => x.Description).HasMaxLength(5000);
            builder.Entity<Product>().Property(x => x.Price).HasColumnType("decimal(18,2)");
            builder.Entity<Product>().Property(x => x.SalePrice).HasColumnType("decimal(18,2)");
            builder.Entity<Product>().Property(x => x.SKU).HasMaxLength(100);
            builder.Entity<Product>().Property(x => x.ImageUrl).HasMaxLength(500);
            builder.Entity<Product>().Property(x => x.StockStatus).HasMaxLength(50);
            builder.Entity<Product>()
                .HasOne(x => x.Category)
                .WithMany(x => x.Products)
                .HasForeignKey(x => x.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);
            builder.Entity<Product>()
                .HasOne(x => x.CompanyInfo)
                .WithMany()
                .HasForeignKey(x => x.CompanyInfoId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Product>()
                .HasOne(x => x.Brand)
                .WithMany(x => x.Products)
                .HasForeignKey(x => x.BrandId)
                .OnDelete(DeleteBehavior.NoAction)
                .IsRequired(false);

            #endregion

            #region Brand

            builder.Entity<Brand>().HasKey(x => x.Id);
            builder.Entity<Brand>().Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Entity<Brand>().Property(x => x.Name).HasMaxLength(200).IsRequired();
            builder.Entity<Brand>().Property(x => x.Slug).HasMaxLength(200).IsRequired();
            builder.Entity<Brand>().Property(x => x.Description).HasMaxLength(500);
            builder.Entity<Brand>().Property(x => x.ImageUrl).HasMaxLength(500);
            builder.Entity<Brand>()
                .HasOne(x => x.CompanyInfo)
                .WithMany()
                .HasForeignKey(x => x.CompanyInfoId)
                .OnDelete(DeleteBehavior.Cascade);

            #endregion

            #region Color

            builder.Entity<Color>().HasKey(x => x.Id);
            builder.Entity<Color>().Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Entity<Color>().Property(x => x.Name).HasMaxLength(100).IsRequired();
            builder.Entity<Color>().Property(x => x.Slug).HasMaxLength(100).IsRequired();
            builder.Entity<Color>().Property(x => x.HexCode).HasMaxLength(20);
            builder.Entity<Color>()
                .HasOne(x => x.CompanyInfo)
                .WithMany()
                .HasForeignKey(x => x.CompanyInfoId)
                .OnDelete(DeleteBehavior.Cascade);

            #endregion

            #region ProductColor (Many-to-Many)

            builder.Entity<ProductColor>().HasKey(x => new { x.ProductId, x.ColorId });
            builder.Entity<ProductColor>()
                .HasOne(x => x.Product)
                .WithMany(x => x.ProductColors)
                .HasForeignKey(x => x.ProductId)
                .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<ProductColor>()
                .HasOne(x => x.Color)
                .WithMany(x => x.ProductColors)
                .HasForeignKey(x => x.ColorId)
                .OnDelete(DeleteBehavior.Restrict);

            #endregion

            #region Order

            builder.Entity<Order>().HasKey(x => x.Id);
            builder.Entity<Order>().Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Entity<Order>().Property(x => x.OrderNumber).HasMaxLength(50).IsRequired();
            builder.Entity<Order>().Property(x => x.UserName).HasMaxLength(256).IsRequired();
            builder.Entity<Order>().Property(x => x.PaymentMethod).HasMaxLength(50).IsRequired();
            builder.Entity<Order>().Property(x => x.PaymentStatus).HasMaxLength(20);
            builder.Entity<Order>().Property(x => x.Status).HasMaxLength(20);
            builder.Entity<Order>().Property(x => x.SubTotal).HasColumnType("decimal(18,2)");
            builder.Entity<Order>().Property(x => x.Total).HasColumnType("decimal(18,2)");
            builder.Entity<Order>().Property(x => x.CouponCode).HasMaxLength(50);
            builder.Entity<Order>().Property(x => x.DiscountAmount).HasColumnType("decimal(18,2)");
            builder.Entity<Order>().Property(x => x.DeliveryDescription).HasMaxLength(200);
            builder.Entity<Order>().Property(x => x.DeliveryInterval).HasMaxLength(100);
            builder.Entity<Order>().Property(x => x.ShippingTitle).HasMaxLength(100);
            builder.Entity<Order>().Property(x => x.ShippingStreet).HasMaxLength(300);
            builder.Entity<Order>().Property(x => x.ShippingCity).HasMaxLength(100);
            builder.Entity<Order>().Property(x => x.ShippingState).HasMaxLength(100);
            builder.Entity<Order>().Property(x => x.ShippingCountry).HasMaxLength(100);
            builder.Entity<Order>().Property(x => x.ShippingPincode).HasMaxLength(20);
            builder.Entity<Order>().Property(x => x.ShippingPhone).HasMaxLength(30);
            builder.Entity<Order>().Property(x => x.BillingTitle).HasMaxLength(100);
            builder.Entity<Order>().Property(x => x.BillingStreet).HasMaxLength(300);
            builder.Entity<Order>().Property(x => x.BillingCity).HasMaxLength(100);
            builder.Entity<Order>().Property(x => x.BillingState).HasMaxLength(100);
            builder.Entity<Order>().Property(x => x.BillingCountry).HasMaxLength(100);
            builder.Entity<Order>().Property(x => x.BillingPincode).HasMaxLength(20);
            builder.Entity<Order>().Property(x => x.BillingPhone).HasMaxLength(30);

            builder.Entity<OrderItem>().HasKey(x => x.Id);
            builder.Entity<OrderItem>().Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Entity<OrderItem>().Property(x => x.UnitPrice).HasColumnType("decimal(18,2)");
            builder.Entity<OrderItem>().Property(x => x.Total).HasColumnType("decimal(18,2)");
            builder.Entity<OrderItem>().Property(x => x.VariationId).HasMaxLength(100);
            builder.Entity<OrderItem>()
                .HasOne(x => x.Order)
                .WithMany(x => x.Items)
                .HasForeignKey(x => x.OrderId)
                .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<OrderItem>()
                .HasOne(x => x.Product)
                .WithMany()
                .HasForeignKey(x => x.ProductId)
                .OnDelete(DeleteBehavior.Restrict);

            #endregion

            #region Coupon

            builder.Entity<Coupon>().HasKey(x => x.Id);
            builder.Entity<Coupon>().Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Entity<Coupon>().Property(x => x.Code).HasMaxLength(50).IsRequired();
            builder.Entity<Coupon>().Property(x => x.Title).HasMaxLength(200).IsRequired();
            builder.Entity<Coupon>().Property(x => x.Description).HasMaxLength(500);
            builder.Entity<Coupon>().Property(x => x.DiscountType).HasMaxLength(20).IsRequired();
            builder.Entity<Coupon>().Property(x => x.Amount).HasColumnType("decimal(18,2)");
            builder.Entity<Coupon>().Property(x => x.MinSpend).HasColumnType("decimal(18,2)");
            builder.Entity<Coupon>().Property(x => x.MaxSpend).HasColumnType("decimal(18,2)");
            builder.Entity<Coupon>().HasIndex(x => new { x.Code, x.CompanyInfoId }).IsUnique();
            builder.Entity<Coupon>()
                .HasOne(x => x.CompanyInfo)
                .WithMany()
                .HasForeignKey(x => x.CompanyInfoId)
                .OnDelete(DeleteBehavior.Cascade);

            #endregion

            #region UserAddress

            builder.Entity<UserAddress>().HasKey(x => x.Id);
            builder.Entity<UserAddress>().Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Entity<UserAddress>().Property(x => x.UserName).HasMaxLength(256).IsRequired();
            builder.Entity<UserAddress>().Property(x => x.Title).HasMaxLength(100);
            builder.Entity<UserAddress>().Property(x => x.Street).HasMaxLength(300);
            builder.Entity<UserAddress>().Property(x => x.City).HasMaxLength(100);
            builder.Entity<UserAddress>().Property(x => x.Pincode).HasMaxLength(20);
            builder.Entity<UserAddress>().Property(x => x.Phone).HasMaxLength(30);
            builder.Entity<UserAddress>().Property(x => x.CountryCode).HasMaxLength(10);
            builder.Entity<UserAddress>().Property(x => x.StateId).HasMaxLength(20);
            builder.Entity<UserAddress>().Property(x => x.StateName).HasMaxLength(100);
            builder.Entity<UserAddress>().Property(x => x.CountryId).HasMaxLength(20);
            builder.Entity<UserAddress>().Property(x => x.CountryName).HasMaxLength(100);

            #endregion

            #region WishlistItem

            builder.Entity<WishlistItem>().HasKey(x => x.Id);
            builder.Entity<WishlistItem>().Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Entity<WishlistItem>().Property(x => x.UserName).HasMaxLength(256).IsRequired();
            builder.Entity<WishlistItem>()
                .HasOne(x => x.Product)
                .WithMany()
                .HasForeignKey(x => x.ProductId)
                .OnDelete(DeleteBehavior.Restrict);
            builder.Entity<WishlistItem>()
                .HasIndex(x => new { x.UserName, x.ProductId })
                .IsUnique();

            #endregion

            #region CompareItem

            builder.Entity<CompareItem>().HasKey(x => x.Id);
            builder.Entity<CompareItem>().Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Entity<CompareItem>().Property(x => x.UserName).HasMaxLength(256).IsRequired();
            builder.Entity<CompareItem>()
                .HasOne(x => x.Product)
                .WithMany()
                .HasForeignKey(x => x.ProductId)
                .OnDelete(DeleteBehavior.Restrict);
            builder.Entity<CompareItem>()
                .HasIndex(x => new { x.UserName, x.ProductId })
                .IsUnique();

            #endregion

            #region RefreshToken

            builder.Entity<RefreshToken>().HasKey(x => x.Id);
            builder.Entity<RefreshToken>().Property(x => x.UserName).HasMaxLength(256).IsRequired();
            builder.Entity<RefreshToken>().Property(x => x.Token).HasMaxLength(256).IsRequired();
            builder.Entity<RefreshToken>().Property(x => x.ReplacedByToken).HasMaxLength(256);
            builder.Entity<RefreshToken>().HasIndex(x => x.Token).IsUnique();
            builder.Entity<RefreshToken>().HasIndex(x => x.UserName);
            builder.Entity<RefreshToken>().Ignore(x => x.IsRevoked);
            builder.Entity<RefreshToken>().Ignore(x => x.IsExpired);
            builder.Entity<RefreshToken>().Ignore(x => x.IsActive);

            #endregion

        }
    }
    public class User : IdentityUser
    {
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public DateTime Created { get; set; }
        public string ThirdPartyId { get; set; }
        //	public string CreatedBy { get; set; } = DateTime.UtcNow.ToString();
        public DateTime Updated { get; set; }
        public string UpdatedBy { get; set; }
        public string IsActive { get; set; }
        public DateTime LastLogin { get; set; }

        public int CompanyInfoId { get; set; }
        public CompanyDetail CompanyInfo { get; set; }
    }
}
