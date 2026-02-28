using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Domain.Entities.Product;
using BookManagementSystem.Infrastructure;
using BookManagementSystem.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BookManagementSystem.Service.Services
{
    public class BrandService : IBrandService
    {
        private readonly ApplicationDbContext _context;

        public BrandService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<BrandResponseDto> GetBrands(int companyInfoId)
        {
            var brands = await _context.Brands
                .Where(b => b.IsActive && b.CompanyInfoId == companyInfoId)
                .Select(b => new BrandDetailDto
                {
                    Id = b.Id,
                    Name = b.Name,
                    Slug = b.Slug,
                    Description = b.Description,
                    ImageUrl = b.ImageUrl,
                    IsActive = b.IsActive,
                    ProductsCount = b.Products.Count(p => p.IsActive)
                })
                .OrderBy(b => b.Name)
                .ToListAsync();

            return new BrandResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Brands retrieved successfully",
                Brands = brands
            };
        }

        public async Task<BrandDetailDto> GetBrandBySlug(string slug, int companyInfoId)
        {
            var brand = await _context.Brands
                .Where(b => b.Slug == slug && b.IsActive && b.CompanyInfoId == companyInfoId)
                .Select(b => new BrandDetailDto
                {
                    Id = b.Id,
                    Name = b.Name,
                    Slug = b.Slug,
                    Description = b.Description,
                    ImageUrl = b.ImageUrl,
                    IsActive = b.IsActive,
                    ProductsCount = b.Products.Count(p => p.IsActive)
                })
                .FirstOrDefaultAsync();

            return brand;
        }

        public async Task<BrandResponseDto> CreateBrand(CreateBrandRequest request)
        {
            var slug = request.Name.ToLower().Replace(" ", "-").Replace("'", "").Replace("\"", "");

            var brand = new Brand
            {
                Name = request.Name,
                Slug = slug,
                Description = request.Description,
                ImageUrl = request.ImageUrl,
                IsActive = true,
                CompanyInfoId = request.CompanyInfoId,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.Brands.Add(brand);
            await _context.SaveChangesAsync();

            return new BrandResponseDto
            {
                Status = Level.Success,
                Code = 201,
                Message = "Brand created successfully",
                Brands = new List<BrandDetailDto>
                {
                    new BrandDetailDto
                    {
                        Id = brand.Id,
                        Name = brand.Name,
                        Slug = brand.Slug,
                        Description = brand.Description,
                        ImageUrl = brand.ImageUrl,
                        IsActive = brand.IsActive
                    }
                }
            };
        }

        public async Task<BrandResponseDto> UpdateBrand(int id, UpdateBrandRequest request)
        {
            var brand = await _context.Brands.FindAsync(id);
            if (brand == null)
            {
                return new BrandResponseDto
                {
                    Status = Level.Failed,
                    Code = 404,
                    Message = "Brand not found"
                };
            }

            brand.Name = request.Name ?? brand.Name;
            brand.Slug = request.Name != null
                ? request.Name.ToLower().Replace(" ", "-").Replace("'", "").Replace("\"", "")
                : brand.Slug;
            brand.Description = request.Description ?? brand.Description;
            brand.ImageUrl = request.ImageUrl ?? brand.ImageUrl;
            brand.IsActive = request.Status;
            brand.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return new BrandResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Brand updated successfully",
                Brands = new List<BrandDetailDto>
                {
                    new BrandDetailDto
                    {
                        Id = brand.Id,
                        Name = brand.Name,
                        Slug = brand.Slug,
                        Description = brand.Description,
                        ImageUrl = brand.ImageUrl,
                        IsActive = brand.IsActive,
                        ProductsCount = await _context.Products.CountAsync(p => p.BrandId == brand.Id && p.IsActive)
                    }
                }
            };
        }

        public async Task<BrandResponseDto> UpdateBrandStatus(int id, bool status)
        {
            var brand = await _context.Brands.FindAsync(id);
            if (brand == null)
            {
                return new BrandResponseDto
                {
                    Status = Level.Failed,
                    Code = 404,
                    Message = "Brand not found"
                };
            }

            brand.IsActive = status;
            brand.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();

            return new BrandResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Brand status updated successfully",
                Brands = new List<BrandDetailDto>
                {
                    new BrandDetailDto
                    {
                        Id = brand.Id,
                        Name = brand.Name,
                        Slug = brand.Slug,
                        Description = brand.Description,
                        ImageUrl = brand.ImageUrl,
                        IsActive = brand.IsActive
                    }
                }
            };
        }

        public async Task<BrandResponseDto> DeleteBrand(int id)
        {
            var brand = await _context.Brands.FindAsync(id);
            if (brand == null)
            {
                return new BrandResponseDto
                {
                    Status = Level.Failed,
                    Code = 404,
                    Message = "Brand not found"
                };
            }

            _context.Brands.Remove(brand);
            await _context.SaveChangesAsync();

            return new BrandResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Brand deleted successfully"
            };
        }

        public async Task<BrandResponseDto> DeleteAllBrands(List<int> ids)
        {
            var brands = await _context.Brands.Where(b => ids.Contains(b.Id)).ToListAsync();
            if (!brands.Any())
            {
                return new BrandResponseDto
                {
                    Status = Level.Failed,
                    Code = 404,
                    Message = "No brands found"
                };
            }

            _context.Brands.RemoveRange(brands);
            await _context.SaveChangesAsync();

            return new BrandResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = $"{brands.Count} brand(s) deleted successfully"
            };
        }
    }
}
