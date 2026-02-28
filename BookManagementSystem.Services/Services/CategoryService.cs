using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Domain.Entities.Product;
using BookManagementSystem.Infrastructure;
using BookManagementSystem.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BookManagementSystem.Service.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ApplicationDbContext _context;

        public CategoryService(ApplicationDbContext context)
        {
            _context = context;
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
                    ProductsCount = c.Products.Count(p => p.IsActive),
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
                            ProductsCount = sc.Products.Count(p => p.IsActive)
                        }).ToList()
                })
                .OrderBy(c => c.Name)
                .ToListAsync();

            return new CategoryResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Categories retrieved successfully",
                Categories = categories
            };
        }

        public async Task<CategoryDetailDto> GetCategoryById(int id)
        {
            var category = await _context.Categories
                .Where(c => c.Id == id)
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
                    ProductsCount = c.Products.Count(p => p.IsActive),
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
                            ProductsCount = sc.Products.Count(p => p.IsActive)
                        }).ToList()
                })
                .FirstOrDefaultAsync();

            return category;
        }

        public async Task<CategoryResponseDto> CreateCategory(CreateCategoryRequest request)
        {
            var slug = request.Name.ToLower().Replace(" ", "-").Replace("'", "").Replace("\"", "");

            var category = new Category
            {
                Name = request.Name,
                Slug = slug,
                Description = request.Description,
                ImageUrl = request.ImageUrl,
                ParentId = request.ParentId,
                IsActive = true,
                CompanyInfoId = request.CompanyInfoId,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return new CategoryResponseDto
            {
                Status = Level.Success,
                Code = 201,
                Message = "Category created successfully",
                Categories = new List<CategoryDetailDto>
                {
                    new CategoryDetailDto
                    {
                        Id = category.Id,
                        Name = category.Name,
                        Slug = category.Slug,
                        Description = category.Description,
                        ImageUrl = category.ImageUrl,
                        ParentId = category.ParentId,
                        IsActive = category.IsActive
                    }
                }
            };
        }

        public async Task<CategoryResponseDto> UpdateCategory(int id, UpdateCategoryRequest request)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return new CategoryResponseDto
                {
                    Status = Level.Failed,
                    Code = 404,
                    Message = "Category not found"
                };
            }

            category.Name = request.Name ?? category.Name;
            category.Slug = request.Name != null
                ? request.Name.ToLower().Replace(" ", "-").Replace("'", "").Replace("\"", "")
                : category.Slug;
            category.Description = request.Description ?? category.Description;
            category.ImageUrl = request.ImageUrl ?? category.ImageUrl;
            category.ParentId = request.ParentId;
            category.IsActive = request.Status;
            category.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return new CategoryResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Category updated successfully",
                Categories = new List<CategoryDetailDto>
                {
                    new CategoryDetailDto
                    {
                        Id = category.Id,
                        Name = category.Name,
                        Slug = category.Slug,
                        Description = category.Description,
                        ImageUrl = category.ImageUrl,
                        ParentId = category.ParentId,
                        IsActive = category.IsActive
                    }
                }
            };
        }

        public async Task<CategoryResponseDto> DeleteCategory(int id)
        {
            var category = await _context.Categories
                .Include(c => c.SubCategories)
                .Include(c => c.Products)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (category == null)
            {
                return new CategoryResponseDto
                {
                    Status = Level.Failed,
                    Code = 404,
                    Message = "Category not found"
                };
            }

            if (category.Products.Any())
            {
                return new CategoryResponseDto
                {
                    Status = Level.Failed,
                    Code = 400,
                    Message = "Cannot delete category with associated products"
                };
            }

            if (category.SubCategories.Any())
            {
                return new CategoryResponseDto
                {
                    Status = Level.Failed,
                    Code = 400,
                    Message = "Cannot delete category with subcategories"
                };
            }

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            return new CategoryResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Category deleted successfully"
            };
        }
    }
}
