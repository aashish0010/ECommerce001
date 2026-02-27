using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Domain.Entities.Company;
using BookManagementSystem.Domain.Entities.Product;
using BookManagementSystem.Infrastructure;
using BookManagementSystem.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BookManagementSystem.Service.Services
{
    public class ProductService : IProductService
    {
        private readonly ApplicationDbContext _context;

        public ProductService(ApplicationDbContext context)
        {
            _context = context;
        }

        internal static ProductDetailDto MapToDto(Product p)
        {
            var thumbnail = AttachmentDto.FromUrl(p.ImageUrl, p.Id, p.Slug ?? "product");
            return new ProductDetailDto
            {
                Id = p.Id,
                Name = p.Name,
                Slug = p.Slug,
                ShortDescription = p.ShortDescription,
                Description = p.Description,
                Price = p.Price,
                SalePrice = p.SalePrice,
                SKU = p.SKU,
                StockStatus = p.StockStatus,
                Quantity = p.Quantity,
                IsActive = p.IsActive,
                IsFeatured = p.IsFeatured,
                ProductThumbnailId = thumbnail != null ? p.Id : null,
                ProductThumbnail = thumbnail,
                ProductGalleries = thumbnail != null ? new List<AttachmentDto> { thumbnail } : new List<AttachmentDto>(),
                Categories = p.Category != null
                    ? new List<ProductCategoryDto> { new ProductCategoryDto { Id = p.Category.Id, Name = p.Category.Name, Slug = p.Category.Slug } }
                    : new List<ProductCategoryDto>(),
                BrandId = p.BrandId,
                Brand = p.Brand != null
                    ? new BrandDetailDto { Id = p.Brand.Id, Name = p.Brand.Name, Slug = p.Brand.Slug, ImageUrl = p.Brand.ImageUrl, IsActive = p.Brand.IsActive }
                    : null,
                Colors = p.ProductColors != null
                    ? p.ProductColors.Where(pc => pc.Color != null).Select(pc => new ColorDetailDto
                    {
                        Id = pc.Color.Id,
                        Name = pc.Color.Name,
                        Slug = pc.Color.Slug,
                        HexCode = pc.Color.HexCode,
                        IsActive = pc.Color.IsActive
                    }).ToList()
                    : new List<ColorDetailDto>(),
                CreatedAt = p.CreatedAt.ToString("o"),
                UpdatedAt = p.UpdatedAt.ToString("o")
            };
        }

        public async Task<ProductResponseDto> GetProducts(int companyInfoId, int? categoryId, string search, int page, int pageSize, int? brandId = null, string colorSlugs = null)
        {
            var query = _context.Products
                .Include(p => p.Category)
                .Include(p => p.Brand)
                .Include(p => p.ProductColors).ThenInclude(pc => pc.Color)
                .Where(p => p.IsActive && p.CompanyInfoId == companyInfoId);

            if (categoryId.HasValue)
            {
                query = query.Where(p => p.CategoryId == categoryId.Value);
            }

            if (brandId.HasValue)
            {
                query = query.Where(p => p.BrandId == brandId.Value);
            }

            if (!string.IsNullOrWhiteSpace(colorSlugs))
            {
                var slugList = colorSlugs.Split(',').Select(s => s.Trim()).ToList();
                query = query.Where(p => p.ProductColors.Any(pc => slugList.Contains(pc.Color.Slug)));
            }

            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(p => p.Name.Contains(search) || p.Description.Contains(search));
            }

            var total = await query.CountAsync();
            var totalPages = (int)Math.Ceiling(total / (double)pageSize);

            var rawProducts = await query
                .OrderByDescending(p => p.CreatedAt)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var products = rawProducts.Select(MapToDto).ToList();

            return new ProductResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Products retrieved successfully",
                Products = products,
                Total = total,
                Page = page,
                PageSize = pageSize,
                TotalPages = totalPages
            };
        }

        public async Task<SingleProductResponseDto> GetProductBySlug(string slug)
        {
            var raw = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Brand)
                .Include(p => p.ProductColors).ThenInclude(pc => pc.Color)
                .Where(p => p.Slug == slug && p.IsActive)
                .FirstOrDefaultAsync();

            if (raw == null)
            {
                return new SingleProductResponseDto
                {
                    Status = Level.Failed,
                    Code = 404,
                    Message = "Product not found"
                };
            }

            return new SingleProductResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Product retrieved successfully",
                Product = MapToDto(raw)
            };
        }

        public async Task<CategoryResponseDto> GetCategories(int companyInfoId)
        {
            var categories = await _context.Categories
                .Where(c => c.IsActive && c.CompanyInfoId == companyInfoId && c.ParentId == null)
                .Include(c => c.SubCategories)
                .Include(c => c.Products)
                .Select(c => new CategoryDetailDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Slug = c.Slug,
                    Description = c.Description,
                    ImageUrl = c.ImageUrl,
                    ParentId = c.ParentId,
                    IsActive = c.IsActive,
                    ProductsCount = c.Products.Count,
                    SubCategories = c.SubCategories
                        .Where(sc => sc.IsActive)
                        .Select(sc => new CategoryDetailDto
                        {
                            Id = sc.Id,
                            Name = sc.Name,
                            Slug = sc.Slug,
                            Description = sc.Description,
                            ImageUrl = sc.ImageUrl,
                            ParentId = sc.ParentId,
                            IsActive = sc.IsActive,
                            ProductsCount = sc.Products.Count
                        }).ToList()
                })
                .ToListAsync();

            return new CategoryResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Categories retrieved successfully",
                Categories = categories
            };
        }

        public async Task<SingleProductResponseDto> CreateProduct(CreateProductRequest request)
        {
            var slug = request.Name.ToLower().Replace(" ", "-").Replace("'", "").Replace("\"", "");

            var product = new Product
            {
                Name = request.Name,
                Slug = slug,
                ShortDescription = request.ShortDescription,
                Description = request.Description,
                Price = request.Price,
                SalePrice = request.SalePrice,
                SKU = request.SKU,
                ImageUrl = request.ImageUrl,
                StockStatus = request.StockStatus ?? "in_stock",
                Quantity = request.Quantity,
                IsFeatured = request.IsFeatured,
                CategoryId = request.CategoryId,
                BrandId = request.BrandId,
                CompanyInfoId = request.CompanyInfoId,
                IsActive = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            if (request.ColorIds?.Count > 0)
            {
                var productColors = request.ColorIds.Select(cId => new ProductColor { ProductId = product.Id, ColorId = cId }).ToList();
                _context.ProductColors.AddRange(productColors);
                await _context.SaveChangesAsync();
            }

            // Reload with relations for MapToDto
            product.Category = await _context.Categories.FindAsync(product.CategoryId);
            product.Brand = product.BrandId.HasValue ? await _context.Brands.FindAsync(product.BrandId) : null;
            product.ProductColors = await _context.ProductColors.Include(pc => pc.Color).Where(pc => pc.ProductId == product.Id).ToListAsync();

            return new SingleProductResponseDto
            {
                Status = Level.Success,
                Code = 201,
                Message = "Product created successfully",
                Product = MapToDto(product)
            };
        }

        public async Task<CategoryResponseDto> SeedCategories(int companyInfoId)
        {
            try
            {
                // Ensure the company exists; create a default one if not
                var company = await _context.CompanyDetails.FindAsync(companyInfoId);
                if (company == null)
                {
                    company = new CompanyDetail
                    {
                        CompanyName = "WOW Commerce",
                        CompanyDescription = "Default e-commerce store",
                        CompanyPhoneNumber = "000-000-0000",
                        CompanyEmail = "admin@wowcommerce.com",
                        OperationsDate = DateTime.UtcNow.ToString("yyyy-MM-dd"),
                        CompanyCode = "Wo100"
                    };
                    _context.CompanyDetails.Add(company);
                    await _context.SaveChangesAsync();
                    companyInfoId = company.Id;
                }

                var existingCategories = await _context.Categories
               .Where(c => c.CompanyInfoId == companyInfoId)
               .AnyAsync();

                if (existingCategories)
                {
                    return new CategoryResponseDto
                    {
                        Status = Level.Failed,
                        Code = 400,
                        Message = "Categories already exist for this company"
                    };
                }

                var now = DateTime.UtcNow;

                // ── Seed Brands ──
                var brandNike         = new Brand { Name = "Nike",         Slug = "nike",         Description = "Just Do It",                      ImageUrl = "https://picsum.photos/seed/nike-brand/400/200",         IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };
                var brandAdidas       = new Brand { Name = "Adidas",       Slug = "adidas",       Description = "Impossible Is Nothing",           ImageUrl = "https://picsum.photos/seed/adidas-brand/400/200",       IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };
                var brandZara         = new Brand { Name = "Zara",         Slug = "zara",         Description = "Fashion for All",                 ImageUrl = "https://picsum.photos/seed/zara-brand/400/200",         IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };
                var brandLevis        = new Brand { Name = "Levi's",       Slug = "levis",        Description = "Quality Denim Since 1853",        ImageUrl = "https://picsum.photos/seed/levis-brand/400/200",        IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };
                var brandCalvinKlein  = new Brand { Name = "Calvin Klein", Slug = "calvin-klein", Description = "Modern American Fashion",         ImageUrl = "https://picsum.photos/seed/calvinklein-brand/400/200",  IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };
                var brandMichaelKors  = new Brand { Name = "Michael Kors", Slug = "michael-kors", Description = "Luxury Accessories",             ImageUrl = "https://picsum.photos/seed/michaelkors-brand/400/200",  IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };
                var brandPuma         = new Brand { Name = "Puma",         Slug = "puma",         Description = "Forever Faster",                 ImageUrl = "https://picsum.photos/seed/puma-brand/400/200",         IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };
                var brandRolex        = new Brand { Name = "Rolex",        Slug = "rolex",        Description = "A Crown for Every Achievement",  ImageUrl = "https://picsum.photos/seed/rolex-brand/400/200",        IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };
                var brandApple        = new Brand { Name = "Apple",        Slug = "apple",        Description = "Think Different",                ImageUrl = "https://picsum.photos/seed/apple-brand/400/200",        IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };
                _context.Brands.AddRange(brandNike, brandAdidas, brandZara, brandLevis, brandCalvinKlein, brandMichaelKors, brandPuma, brandRolex, brandApple);
                await _context.SaveChangesAsync();

                // ── Seed Colors ──
                var colorBlack = new Color { Name = "Black", Slug = "black", HexCode = "#000000", IsActive = true, CompanyInfoId = companyInfoId };
                var colorWhite = new Color { Name = "White", Slug = "white", HexCode = "#FFFFFF", IsActive = true, CompanyInfoId = companyInfoId };
                var colorNavy = new Color { Name = "Navy Blue", Slug = "navy-blue", HexCode = "#001F5B", IsActive = true, CompanyInfoId = companyInfoId };
                var colorRed = new Color { Name = "Red", Slug = "red", HexCode = "#E63946", IsActive = true, CompanyInfoId = companyInfoId };
                var colorGray = new Color { Name = "Gray", Slug = "gray", HexCode = "#6C757D", IsActive = true, CompanyInfoId = companyInfoId };
                var colorGreen = new Color { Name = "Green", Slug = "green", HexCode = "#2D6A4F", IsActive = true, CompanyInfoId = companyInfoId };
                var colorBrown = new Color { Name = "Brown", Slug = "brown", HexCode = "#795548", IsActive = true, CompanyInfoId = companyInfoId };
                var colorBeige = new Color { Name = "Beige", Slug = "beige", HexCode = "#F5F0E8", IsActive = true, CompanyInfoId = companyInfoId };
                var colorPink = new Color { Name = "Pink", Slug = "pink", HexCode = "#F48FB1", IsActive = true, CompanyInfoId = companyInfoId };
                var colorYellow = new Color { Name = "Yellow", Slug = "yellow", HexCode = "#FFD60A", IsActive = true, CompanyInfoId = companyInfoId };
                _context.Colors.AddRange(colorBlack, colorWhite, colorNavy, colorRed, colorGray, colorGreen, colorBrown, colorBeige, colorPink, colorYellow);
                await _context.SaveChangesAsync();

                // ── Top-level categories ──
                var fashion = new Category { Name = "Fashion", Slug = "fashion", Description = "Trendy clothing, accessories, and seasonal styles", ImageUrl = "https://picsum.photos/seed/fashion-cat/800/600",  IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };
                var shoes   = new Category { Name = "Shoes",   Slug = "shoes",   Description = "Footwear for every occasion",                        ImageUrl = "https://picsum.photos/seed/shoes-cat/800/600",    IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };
                var watch   = new Category { Name = "Watch",   Slug = "watch",   Description = "Watches, smartwatches, and accessories",             ImageUrl = "https://picsum.photos/seed/watch-cat/800/600",    IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };
                var men     = new Category { Name = "Men",     Slug = "men",     Description = "Men's clothing and accessories",                     ImageUrl = "https://picsum.photos/seed/men-cat/800/600",      IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };
                var female  = new Category { Name = "Female",  Slug = "female",  Description = "Women's clothing and accessories",                   ImageUrl = "https://picsum.photos/seed/female-cat/800/600",   IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now };

                _context.Categories.AddRange(fashion, shoes, watch, men, female);
                await _context.SaveChangesAsync();

                // ── Subcategories ──
                var subCategories = new List<Category>
            {
                new Category { Name = "T-Shirts",        Slug = "t-shirts",        Description = "Casual and graphic tees",         ImageUrl = "https://picsum.photos/seed/tshirts-sub/600/400",       ParentId = fashion.Id, IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Category { Name = "Jackets",         Slug = "jackets",         Description = "Outerwear and jackets",            ImageUrl = "https://picsum.photos/seed/jackets-sub/600/400",       ParentId = fashion.Id, IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Category { Name = "Denim",           Slug = "denim",           Description = "Jeans and denim wear",             ImageUrl = "https://picsum.photos/seed/denim-sub/600/400",         ParentId = fashion.Id, IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Category { Name = "Running",         Slug = "running-shoes",   Description = "Performance running shoes",        ImageUrl = "https://picsum.photos/seed/running-sub/600/400",       ParentId = shoes.Id,   IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Category { Name = "Sneakers",        Slug = "sneakers",        Description = "Casual and lifestyle sneakers",    ImageUrl = "https://picsum.photos/seed/sneakers-sub/600/400",      ParentId = shoes.Id,   IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Category { Name = "Formal Shoes",    Slug = "formal-shoes",    Description = "Dress shoes and oxfords",          ImageUrl = "https://picsum.photos/seed/formalshoes-sub/600/400",   ParentId = shoes.Id,   IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Category { Name = "Smart Watches",   Slug = "smart-watches",   Description = "Digital and smart watches",        ImageUrl = "https://picsum.photos/seed/smartwatch-sub/600/400",    ParentId = watch.Id,   IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Category { Name = "Analog Watches",  Slug = "analog-watches",  Description = "Classic analog timepieces",        ImageUrl = "https://picsum.photos/seed/analogwatch-sub/600/400",   ParentId = watch.Id,   IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Category { Name = "Men's Shirts",    Slug = "mens-shirts",     Description = "Formal and casual shirts for men", ImageUrl = "https://picsum.photos/seed/menshirts-sub/600/400",     ParentId = men.Id,     IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Category { Name = "Men's Trousers",  Slug = "mens-trousers",   Description = "Pants and trousers for men",       ImageUrl = "https://picsum.photos/seed/mentrousers-sub/600/400",   ParentId = men.Id,     IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Category { Name = "Dresses",         Slug = "dresses",         Description = "Casual and formal dresses",        ImageUrl = "https://picsum.photos/seed/dresses-sub/600/400",       ParentId = female.Id,  IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Category { Name = "Handbags",        Slug = "handbags",        Description = "Bags, purses, and clutches",       ImageUrl = "https://picsum.photos/seed/handbags-sub/600/400",      ParentId = female.Id,  IsActive = true, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
            };
                _context.Categories.AddRange(subCategories);
                await _context.SaveChangesAsync();

                // ── Products (35 items across all categories) ──
                var products = new List<Product>
            {
                // ─── Fashion ───
                new Product { Name = "Classic White T-Shirt",       Slug = "classic-white-t-shirt",       ImageUrl = "https://picsum.photos/seed/classic-white-t-shirt/600/600",     ShortDescription = "Essential cotton crew-neck tee",           Description = "Made from 100% organic cotton, this classic white t-shirt features a relaxed fit and ribbed crew neck. Pre-shrunk fabric holds its shape wash after wash.",                            Price = 24.99m,  SalePrice = 19.99m,  SKU = "FSH-001", StockStatus = "in_stock",     Quantity = 200, IsFeatured = true,  CategoryId = fashion.Id,  BrandId = brandZara.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Graphic Print Tee",           Slug = "graphic-print-tee",           ImageUrl = "https://picsum.photos/seed/graphic-print-tee/600/600",         ShortDescription = "Bold urban graphic t-shirt",               Description = "Stand out with this eye-catching graphic tee. Features a vintage-inspired print on soft ringspun cotton. Unisex regular fit.",                                                         Price = 34.99m,  SalePrice = 29.99m,  SKU = "FSH-002", StockStatus = "in_stock",     Quantity = 150, IsFeatured = false, CategoryId = fashion.Id,  BrandId = brandNike.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Leather Biker Jacket",        Slug = "leather-biker-jacket",        ImageUrl = "https://picsum.photos/seed/leather-biker-jacket/600/600",      ShortDescription = "Genuine leather moto jacket",              Description = "Timeless biker style in premium full-grain leather. Asymmetric zip closure, snap lapel collar, and quilted shoulder panels. Satin lined for comfort.",                               Price = 249.99m, SalePrice = 199.99m, SKU = "FSH-003", StockStatus = "in_stock",     Quantity = 30,  IsFeatured = true,  CategoryId = fashion.Id,  BrandId = brandCalvinKlein.Id, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Puffer Down Jacket",          Slug = "puffer-down-jacket",          ImageUrl = "https://picsum.photos/seed/puffer-down-jacket/600/600",        ShortDescription = "Warm lightweight puffer",                  Description = "700-fill duck down puffer jacket with water-resistant shell. Packs into its own pocket for travel. Elastic cuffs and adjustable hem keep warmth in.",                                  Price = 179.99m, SalePrice = 149.99m, SKU = "FSH-004", StockStatus = "in_stock",     Quantity = 45,  IsFeatured = true,  CategoryId = fashion.Id,  BrandId = brandAdidas.Id,      CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Slim Fit Denim Jeans",        Slug = "slim-fit-denim-jeans",        ImageUrl = "https://picsum.photos/seed/slim-fit-denim-jeans/600/600",      ShortDescription = "Modern slim stretch jeans",                Description = "These slim-fit jeans blend style and comfort with 2% elastane stretch denim. Medium wash with subtle whiskering. Five-pocket construction, zip fly.",                                  Price = 69.99m,  SalePrice = 59.99m,  SKU = "FSH-005", StockStatus = "in_stock",     Quantity = 120, IsFeatured = false, CategoryId = fashion.Id,  BrandId = brandLevis.Id,       CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Oversized Hoodie",            Slug = "oversized-hoodie",            ImageUrl = "https://picsum.photos/seed/oversized-hoodie/600/600",          ShortDescription = "Cozy drop-shoulder hoodie",                Description = "Ultra-soft fleece-lined hoodie with an oversized drop-shoulder silhouette. Features a kangaroo pocket and drawstring hood. Perfect for layering.",                                     Price = 54.99m,  SalePrice = 44.99m,  SKU = "FSH-006", StockStatus = "in_stock",     Quantity = 90,  IsFeatured = true,  CategoryId = fashion.Id,  BrandId = brandPuma.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Linen Summer Shirt",          Slug = "linen-summer-shirt",          ImageUrl = "https://picsum.photos/seed/linen-summer-shirt/600/600",        ShortDescription = "Breathable 100% linen shirt",              Description = "Stay cool in this lightweight linen shirt. Relaxed fit with a camp collar and coconut shell buttons. Garment-dyed for a lived-in feel.",                                              Price = 59.99m,  SKU = "FSH-007",                      StockStatus = "in_stock",     Quantity = 65,  IsFeatured = false, CategoryId = fashion.Id,  BrandId = brandZara.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },

                // ─── Shoes ───
                new Product { Name = "UltraBoost Running Shoe",     Slug = "ultraboost-running-shoe",     ImageUrl = "https://picsum.photos/seed/ultraboost-running-shoe/600/600",   ShortDescription = "Energy-returning performance runner",       Description = "Engineered mesh upper with responsive foam midsole returns energy with every stride. Continental rubber outsole grips on wet and dry surfaces. Lace closure with heel counter.",        Price = 139.99m, SalePrice = 119.99m, SKU = "SHO-001", StockStatus = "in_stock",     Quantity = 70,  IsFeatured = true,  CategoryId = shoes.Id,    BrandId = brandAdidas.Id,      CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Trail Runner Pro",            Slug = "trail-runner-pro",            ImageUrl = "https://picsum.photos/seed/trail-runner-pro/600/600",          ShortDescription = "All-terrain trail running shoe",            Description = "Aggressive lug pattern for grip on mud, rock, and gravel. Reinforced toe cap and gusseted tongue keep debris out. 8mm drop with rock plate protection.",                              Price = 129.99m, SalePrice = 109.99m, SKU = "SHO-002", StockStatus = "in_stock",     Quantity = 40,  IsFeatured = false, CategoryId = shoes.Id,    BrandId = brandNike.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Classic Canvas Sneaker",      Slug = "classic-canvas-sneaker",      ImageUrl = "https://picsum.photos/seed/classic-canvas-sneaker/600/600",   ShortDescription = "Timeless low-top canvas shoe",             Description = "The sneaker that never goes out of style. Durable canvas upper, vulcanized rubber sole, and padded collar. Available in 12 colors.",                                                  Price = 49.99m,  SalePrice = 39.99m,  SKU = "SHO-003", StockStatus = "in_stock",     Quantity = 200, IsFeatured = true,  CategoryId = shoes.Id,    BrandId = brandPuma.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "High-Top Leather Sneaker",    Slug = "high-top-leather-sneaker",    ImageUrl = "https://picsum.photos/seed/high-top-leather-sneaker/600/600", ShortDescription = "Premium leather high-top",                 Description = "Full-grain leather upper with perforated side panels. Cushioned footbed and rubber cupsole. Padded collar and tongue for ankle support.",                                              Price = 119.99m, SKU = "SHO-004",                      StockStatus = "in_stock",     Quantity = 55,  IsFeatured = false, CategoryId = shoes.Id,    BrandId = brandNike.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Oxford Dress Shoe",           Slug = "oxford-dress-shoe",           ImageUrl = "https://picsum.photos/seed/oxford-dress-shoe/600/600",        ShortDescription = "Classic leather oxford",                   Description = "Hand-polished calfskin leather with closed lacing. Blake-stitched leather sole and full leather lining. A wardrobe staple for formal occasions.",                                      Price = 189.99m, SalePrice = 159.99m, SKU = "SHO-005", StockStatus = "in_stock",     Quantity = 35,  IsFeatured = true,  CategoryId = shoes.Id,    BrandId = brandCalvinKlein.Id, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Suede Chelsea Boot",          Slug = "suede-chelsea-boot",          ImageUrl = "https://picsum.photos/seed/suede-chelsea-boot/600/600",       ShortDescription = "Versatile suede ankle boot",               Description = "Italian suede Chelsea boot with elastic side panels and pull tab. Leather lined with a stacked leather heel. Goodyear welted for re-soleability.",                                    Price = 169.99m, SKU = "SHO-006",                      StockStatus = "in_stock",     Quantity = 25,  IsFeatured = false, CategoryId = shoes.Id,    BrandId = brandAdidas.Id,      CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Sport Slide Sandal",          Slug = "sport-slide-sandal",          ImageUrl = "https://picsum.photos/seed/sport-slide-sandal/600/600",       ShortDescription = "Contoured footbed slide",                  Description = "Lightweight EVA slide with a contoured footbed that molds to your foot. Textured strap, great for post-workout recovery or poolside.",                                                Price = 29.99m,  SalePrice = 22.99m,  SKU = "SHO-007", StockStatus = "in_stock",     Quantity = 150, IsFeatured = false, CategoryId = shoes.Id,    BrandId = brandPuma.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },

                // ─── Watch ───
                new Product { Name = "Smart Watch Pro X",           Slug = "smart-watch-pro-x",           ImageUrl = "https://picsum.photos/seed/smart-watch-pro-x/600/600",        ShortDescription = "Advanced health and fitness smartwatch",    Description = "AMOLED always-on display, GPS, heart rate, SpO2, sleep tracking, and 5 ATM water resistance. 7-day battery life. Compatible with iOS and Android.",                                  Price = 299.99m, SalePrice = 249.99m, SKU = "WAT-001", StockStatus = "in_stock",     Quantity = 60,  IsFeatured = true,  CategoryId = watch.Id,    BrandId = brandApple.Id,       CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Fitness Band Lite",           Slug = "fitness-band-lite",           ImageUrl = "https://picsum.photos/seed/fitness-band-lite/600/600",        ShortDescription = "Slim fitness tracker",                     Description = "Track steps, distance, calories, and sleep with this lightweight band. OLED display shows notifications. USB direct charge, 14-day battery.",                                         Price = 49.99m,  SalePrice = 39.99m,  SKU = "WAT-002", StockStatus = "in_stock",     Quantity = 120, IsFeatured = false, CategoryId = watch.Id,    BrandId = brandApple.Id,       CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Chronograph Dive Watch",      Slug = "chronograph-dive-watch",      ImageUrl = "https://picsum.photos/seed/chronograph-dive-watch/600/600",   ShortDescription = "200m water-resistant diver",               Description = "Japanese quartz movement with date display. Unidirectional rotating bezel, luminous hands and markers. Stainless steel case with screw-down crown. 200m water resistance.",            Price = 219.99m, SalePrice = 189.99m, SKU = "WAT-003", StockStatus = "in_stock",     Quantity = 20,  IsFeatured = true,  CategoryId = watch.Id,    BrandId = brandRolex.Id,       CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Minimalist Analog Watch",     Slug = "minimalist-analog-watch",     ImageUrl = "https://picsum.photos/seed/minimalist-analog-watch/600/600",   ShortDescription = "Clean dial dress watch",                   Description = "Swiss quartz movement in a slim 40mm case. Scratch-resistant sapphire crystal, genuine leather strap. Understated elegance for everyday wear.",                                       Price = 159.99m, SKU = "WAT-004",                      StockStatus = "in_stock",     Quantity = 45,  IsFeatured = false, CategoryId = watch.Id,    BrandId = brandRolex.Id,       CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Digital Sports Watch",        Slug = "digital-sports-watch",        ImageUrl = "https://picsum.photos/seed/digital-sports-watch/600/600",     ShortDescription = "Rugged multi-function digital",            Description = "Shock-resistant with world time, stopwatch, countdown timer, and alarm. 100m water resistance, LED backlight, and resin band. Built for adventure.",                                  Price = 59.99m,  SalePrice = 49.99m,  SKU = "WAT-005", StockStatus = "in_stock",     Quantity = 85,  IsFeatured = false, CategoryId = watch.Id,    BrandId = brandApple.Id,       CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Rose Gold Bracelet Watch",    Slug = "rose-gold-bracelet-watch",    ImageUrl = "https://picsum.photos/seed/rose-gold-bracelet-watch/600/600",  ShortDescription = "Elegant rose gold ladies watch",           Description = "Delicate rose gold-tone stainless steel bracelet with a mother-of-pearl dial. Swarovski crystal hour markers. Fold-over clasp with safety catch.",                                    Price = 179.99m, SalePrice = 149.99m, SKU = "WAT-006", StockStatus = "in_stock",     Quantity = 30,  IsFeatured = true,  CategoryId = watch.Id,    BrandId = brandMichaelKors.Id, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },

                // ─── Men ───
                new Product { Name = "Slim Fit Formal Shirt",       Slug = "slim-fit-formal-shirt",       ImageUrl = "https://picsum.photos/seed/slim-fit-formal-shirt/600/600",    ShortDescription = "Wrinkle-free dress shirt",                 Description = "Non-iron cotton-blend shirt with a spread collar and adjustable cuffs. Slim fit through chest and waist. Perfect under a blazer or on its own.",                                     Price = 59.99m,  SalePrice = 49.99m,  SKU = "MEN-001", StockStatus = "in_stock",     Quantity = 100, IsFeatured = true,  CategoryId = men.Id,      BrandId = brandCalvinKlein.Id, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Chino Trousers",              Slug = "chino-trousers",              ImageUrl = "https://picsum.photos/seed/chino-trousers/600/600",            ShortDescription = "Versatile stretch chinos",                 Description = "Cotton twill chinos with 2% stretch for all-day comfort. Flat front, slash pockets, and welt back pockets. Works from office to weekend.",                                           Price = 49.99m,  SalePrice = 39.99m,  SKU = "MEN-002", StockStatus = "in_stock",     Quantity = 90,  IsFeatured = false, CategoryId = men.Id,      BrandId = brandZara.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Wool Blend Blazer",           Slug = "wool-blend-blazer",           ImageUrl = "https://picsum.photos/seed/wool-blend-blazer/600/600",        ShortDescription = "Two-button tailored blazer",               Description = "Italian wool-blend fabric with half canvas construction. Notch lapel, two-button closure, and four interior pockets. Tailored regular fit.",                                          Price = 199.99m, SalePrice = 169.99m, SKU = "MEN-003", StockStatus = "in_stock",     Quantity = 25,  IsFeatured = true,  CategoryId = men.Id,      BrandId = brandCalvinKlein.Id, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Merino Wool Polo",            Slug = "merino-wool-polo",            ImageUrl = "https://picsum.photos/seed/merino-wool-polo/600/600",          ShortDescription = "Premium merino knit polo",                 Description = "Extra-fine merino wool polo shirt. Naturally temperature-regulating, moisture-wicking, and odor-resistant. Ribbed collar and cuffs.",                                                 Price = 79.99m,  SKU = "MEN-004",                      StockStatus = "in_stock",     Quantity = 55,  IsFeatured = false, CategoryId = men.Id,      BrandId = brandZara.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Leather Belt",                Slug = "leather-belt",                ImageUrl = "https://picsum.photos/seed/leather-belt/600/600",              ShortDescription = "Full-grain leather dress belt",            Description = "35mm full-grain Italian leather belt with a brushed nickel buckle. Feathered edge and five-hole adjustment. Comes in a branded gift box.",                                            Price = 44.99m,  SalePrice = 34.99m,  SKU = "MEN-005", StockStatus = "in_stock",     Quantity = 130, IsFeatured = false, CategoryId = men.Id,      BrandId = brandLevis.Id,       CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Performance Joggers",         Slug = "performance-joggers",         ImageUrl = "https://picsum.photos/seed/performance-joggers/600/600",       ShortDescription = "Technical athletic joggers",               Description = "Four-way stretch woven joggers with zip pockets and reflective accents. Tapered leg with elastic cuff. DWR coating repels light rain.",                                               Price = 64.99m,  SalePrice = 54.99m,  SKU = "MEN-006", StockStatus = "in_stock",     Quantity = 75,  IsFeatured = false, CategoryId = men.Id,      BrandId = brandNike.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Cashmere V-Neck Sweater",     Slug = "cashmere-v-neck-sweater",     ImageUrl = "https://picsum.photos/seed/cashmere-v-neck-sweater/600/600",   ShortDescription = "Luxury cashmere knit",                     Description = "100% Grade-A Mongolian cashmere. Lightweight yet warm, with a classic V-neck silhouette. Ribbed hem and cuffs. Dry clean recommended.",                                               Price = 149.99m, SKU = "MEN-007",                      StockStatus = "in_stock",     Quantity = 20,  IsFeatured = true,  CategoryId = men.Id,      BrandId = brandCalvinKlein.Id, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },

                // ─── Female ───
                new Product { Name = "Floral Midi Dress",           Slug = "floral-midi-dress",           ImageUrl = "https://picsum.photos/seed/floral-midi-dress/600/600",        ShortDescription = "Breezy floral print midi",                 Description = "Lightweight viscose midi dress with an all-over floral print. V-neckline, flutter sleeves, and self-tie waist. Fully lined. Perfect from brunch to evening.",                        Price = 79.99m,  SalePrice = 64.99m,  SKU = "FEM-001", StockStatus = "in_stock",     Quantity = 70,  IsFeatured = true,  CategoryId = female.Id,   BrandId = brandZara.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Satin Wrap Blouse",           Slug = "satin-wrap-blouse",           ImageUrl = "https://picsum.photos/seed/satin-wrap-blouse/600/600",        ShortDescription = "Elegant satin wrap top",                   Description = "Luxe satin-finish wrap blouse with long sleeves and a self-tie closure. Draped front creates a flattering silhouette. Pairs beautifully with tailored trousers.",                     Price = 54.99m,  SalePrice = 44.99m,  SKU = "FEM-002", StockStatus = "in_stock",     Quantity = 60,  IsFeatured = false, CategoryId = female.Id,   BrandId = brandCalvinKlein.Id, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "High-Waist Wide Leg Pants",   Slug = "high-waist-wide-leg-pants",   ImageUrl = "https://picsum.photos/seed/high-waist-wide-leg-pants/600/600",ShortDescription = "Flowing wide-leg trousers",                Description = "High-rise, wide-leg silhouette in crepe fabric. Front pleats, invisible side zip, and pressed crease give a polished look. Sits at the natural waist.",                               Price = 69.99m,  SalePrice = 59.99m,  SKU = "FEM-003", StockStatus = "in_stock",     Quantity = 50,  IsFeatured = false, CategoryId = female.Id,   BrandId = brandZara.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Quilted Crossbody Bag",       Slug = "quilted-crossbody-bag",       ImageUrl = "https://picsum.photos/seed/quilted-crossbody-bag/600/600",    ShortDescription = "Compact quilted leather bag",              Description = "Soft lambskin leather with diamond quilting. Adjustable chain strap converts from crossbody to shoulder. Interior zip pocket and card slot. Gold-tone hardware.",                      Price = 129.99m, SalePrice = 109.99m, SKU = "FEM-004", StockStatus = "in_stock",     Quantity = 35,  IsFeatured = true,  CategoryId = female.Id,   BrandId = brandMichaelKors.Id, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Knit Cardigan",               Slug = "knit-cardigan",               ImageUrl = "https://picsum.photos/seed/knit-cardigan/600/600",             ShortDescription = "Soft open-front cardigan",                 Description = "Relaxed-fit cardigan in a soft cotton-wool blend. Open front with dropped shoulders, ribbed trim, and patch pockets. Great layering piece year-round.",                               Price = 64.99m,  SKU = "FEM-005",                      StockStatus = "in_stock",     Quantity = 80,  IsFeatured = false, CategoryId = female.Id,   BrandId = brandZara.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Silk Scarf",                  Slug = "silk-scarf",                  ImageUrl = "https://picsum.photos/seed/silk-scarf/600/600",                ShortDescription = "Hand-rolled pure silk scarf",              Description = "100% mulberry silk, 90x90cm. Digitally printed abstract design with hand-rolled edges. Wear as a headscarf, neck tie, or bag accessory.",                                            Price = 89.99m,  SalePrice = 74.99m,  SKU = "FEM-006", StockStatus = "in_stock",     Quantity = 40,  IsFeatured = false, CategoryId = female.Id,   BrandId = brandMichaelKors.Id, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Structured Tote Bag",         Slug = "structured-tote-bag",         ImageUrl = "https://picsum.photos/seed/structured-tote-bag/600/600",       ShortDescription = "Premium leather work tote",                Description = "Full-grain leather tote with reinforced base and magnetic snap closure. Interior padded laptop sleeve fits up to 14\". Two interior pockets and one exterior zip.",                    Price = 189.99m, SalePrice = 159.99m, SKU = "FEM-007", StockStatus = "in_stock",     Quantity = 25,  IsFeatured = true,  CategoryId = female.Id,   BrandId = brandMichaelKors.Id, CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
                new Product { Name = "Yoga Leggings",               Slug = "yoga-leggings",               ImageUrl = "https://picsum.photos/seed/yoga-leggings/600/600",             ShortDescription = "High-waist compression leggings",          Description = "Squat-proof, four-way stretch fabric with moisture-wicking finish. High waistband with hidden pocket. Flat-lock seams prevent chafing. Great for yoga, gym, or errands.",              Price = 44.99m,  SalePrice = 34.99m,  SKU = "FEM-008", StockStatus = "in_stock",     Quantity = 110, IsFeatured = false, CategoryId = female.Id,   BrandId = brandPuma.Id,        CompanyInfoId = companyInfoId, CreatedAt = now, UpdatedAt = now },
            };

                _context.Products.AddRange(products);
                await _context.SaveChangesAsync();

                // ── Assign Colors to Products ──
                var productColors = new List<ProductColor>
                {
                    // T-Shirts: White, Black, Gray, Navy
                    new ProductColor { ProductId = products[0].Id, ColorId = colorWhite.Id },
                    new ProductColor { ProductId = products[0].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[0].Id, ColorId = colorGray.Id },
                    // Graphic Tee: Red, Black, Navy
                    new ProductColor { ProductId = products[1].Id, ColorId = colorRed.Id },
                    new ProductColor { ProductId = products[1].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[1].Id, ColorId = colorNavy.Id },
                    // Leather Jacket: Black, Brown
                    new ProductColor { ProductId = products[2].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[2].Id, ColorId = colorBrown.Id },
                    // Puffer Jacket: Black, Navy, Red
                    new ProductColor { ProductId = products[3].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[3].Id, ColorId = colorNavy.Id },
                    new ProductColor { ProductId = products[3].Id, ColorId = colorRed.Id },
                    // Denim Jeans: Navy, Black, Gray
                    new ProductColor { ProductId = products[4].Id, ColorId = colorNavy.Id },
                    new ProductColor { ProductId = products[4].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[4].Id, ColorId = colorGray.Id },
                    // Oversized Hoodie: Gray, Black, Green
                    new ProductColor { ProductId = products[5].Id, ColorId = colorGray.Id },
                    new ProductColor { ProductId = products[5].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[5].Id, ColorId = colorGreen.Id },
                    // Linen Shirt: White, Beige, Navy
                    new ProductColor { ProductId = products[6].Id, ColorId = colorWhite.Id },
                    new ProductColor { ProductId = products[6].Id, ColorId = colorBeige.Id },
                    // UltraBoost: Black, White, Red
                    new ProductColor { ProductId = products[7].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[7].Id, ColorId = colorWhite.Id },
                    new ProductColor { ProductId = products[7].Id, ColorId = colorRed.Id },
                    // Trail Runner: Gray, Green, Black
                    new ProductColor { ProductId = products[8].Id, ColorId = colorGray.Id },
                    new ProductColor { ProductId = products[8].Id, ColorId = colorGreen.Id },
                    // Canvas Sneaker: White, Black, Red, Navy
                    new ProductColor { ProductId = products[9].Id, ColorId = colorWhite.Id },
                    new ProductColor { ProductId = products[9].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[9].Id, ColorId = colorRed.Id },
                    new ProductColor { ProductId = products[9].Id, ColorId = colorNavy.Id },
                    // High-Top Leather: White, Black, Brown
                    new ProductColor { ProductId = products[10].Id, ColorId = colorWhite.Id },
                    new ProductColor { ProductId = products[10].Id, ColorId = colorBlack.Id },
                    // Oxford: Black, Brown
                    new ProductColor { ProductId = products[11].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[11].Id, ColorId = colorBrown.Id },
                    // Chelsea Boot: Brown, Black, Gray
                    new ProductColor { ProductId = products[12].Id, ColorId = colorBrown.Id },
                    new ProductColor { ProductId = products[12].Id, ColorId = colorBlack.Id },
                    // Slide Sandal: Black, Gray, Beige
                    new ProductColor { ProductId = products[13].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[13].Id, ColorId = colorGray.Id },
                    // Smart Watch: Black, White, Gray
                    new ProductColor { ProductId = products[14].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[14].Id, ColorId = colorWhite.Id },
                    new ProductColor { ProductId = products[14].Id, ColorId = colorGray.Id },
                    // Fitness Band: Black, Pink
                    new ProductColor { ProductId = products[15].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[15].Id, ColorId = colorPink.Id },
                    // Dive Watch: Black, Navy
                    new ProductColor { ProductId = products[16].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[16].Id, ColorId = colorNavy.Id },
                    // Analog Watch: Brown, Black
                    new ProductColor { ProductId = products[17].Id, ColorId = colorBrown.Id },
                    new ProductColor { ProductId = products[17].Id, ColorId = colorBlack.Id },
                    // Digital Watch: Black, Green
                    new ProductColor { ProductId = products[18].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[18].Id, ColorId = colorGreen.Id },
                    // Rose Gold Watch: Pink, Beige
                    new ProductColor { ProductId = products[19].Id, ColorId = colorPink.Id },
                    new ProductColor { ProductId = products[19].Id, ColorId = colorBeige.Id },
                    // Formal Shirt: White, Navy, Gray
                    new ProductColor { ProductId = products[20].Id, ColorId = colorWhite.Id },
                    new ProductColor { ProductId = products[20].Id, ColorId = colorNavy.Id },
                    new ProductColor { ProductId = products[20].Id, ColorId = colorGray.Id },
                    // Chino: Beige, Navy, Gray
                    new ProductColor { ProductId = products[21].Id, ColorId = colorBeige.Id },
                    new ProductColor { ProductId = products[21].Id, ColorId = colorNavy.Id },
                    new ProductColor { ProductId = products[21].Id, ColorId = colorGray.Id },
                    // Blazer: Black, Navy, Gray
                    new ProductColor { ProductId = products[22].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[22].Id, ColorId = colorNavy.Id },
                    // Polo: Green, Navy, Beige
                    new ProductColor { ProductId = products[23].Id, ColorId = colorGreen.Id },
                    new ProductColor { ProductId = products[23].Id, ColorId = colorNavy.Id },
                    new ProductColor { ProductId = products[23].Id, ColorId = colorBeige.Id },
                    // Belt: Brown, Black
                    new ProductColor { ProductId = products[24].Id, ColorId = colorBrown.Id },
                    new ProductColor { ProductId = products[24].Id, ColorId = colorBlack.Id },
                    // Joggers: Black, Gray, Navy
                    new ProductColor { ProductId = products[25].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[25].Id, ColorId = colorGray.Id },
                    // Cashmere: Gray, Beige, Black
                    new ProductColor { ProductId = products[26].Id, ColorId = colorGray.Id },
                    new ProductColor { ProductId = products[26].Id, ColorId = colorBeige.Id },
                    new ProductColor { ProductId = products[26].Id, ColorId = colorBlack.Id },
                    // Floral Dress: Pink, Red, Beige
                    new ProductColor { ProductId = products[27].Id, ColorId = colorPink.Id },
                    new ProductColor { ProductId = products[27].Id, ColorId = colorRed.Id },
                    // Satin Blouse: White, Pink, Black
                    new ProductColor { ProductId = products[28].Id, ColorId = colorWhite.Id },
                    new ProductColor { ProductId = products[28].Id, ColorId = colorPink.Id },
                    new ProductColor { ProductId = products[28].Id, ColorId = colorBlack.Id },
                    // Wide Leg Pants: Black, Beige, Navy
                    new ProductColor { ProductId = products[29].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[29].Id, ColorId = colorBeige.Id },
                    // Crossbody Bag: Black, Brown, Beige
                    new ProductColor { ProductId = products[30].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[30].Id, ColorId = colorBrown.Id },
                    new ProductColor { ProductId = products[30].Id, ColorId = colorBeige.Id },
                    // Cardigan: Gray, Beige, Pink
                    new ProductColor { ProductId = products[31].Id, ColorId = colorGray.Id },
                    new ProductColor { ProductId = products[31].Id, ColorId = colorBeige.Id },
                    new ProductColor { ProductId = products[31].Id, ColorId = colorPink.Id },
                    // Silk Scarf: Red, Pink, Yellow
                    new ProductColor { ProductId = products[32].Id, ColorId = colorRed.Id },
                    new ProductColor { ProductId = products[32].Id, ColorId = colorPink.Id },
                    new ProductColor { ProductId = products[32].Id, ColorId = colorYellow.Id },
                    // Tote Bag: Black, Brown, Beige
                    new ProductColor { ProductId = products[33].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[33].Id, ColorId = colorBrown.Id },
                    // Yoga Leggings: Black, Gray, Navy
                    new ProductColor { ProductId = products[34].Id, ColorId = colorBlack.Id },
                    new ProductColor { ProductId = products[34].Id, ColorId = colorGray.Id },
                    new ProductColor { ProductId = products[34].Id, ColorId = colorNavy.Id },
                };
                _context.ProductColors.AddRange(productColors);
                await _context.SaveChangesAsync();

                return await GetCategories(companyInfoId);
            }
            catch(Exception ex)
            {
                throw ex;
            }
           
        }
    }
}
