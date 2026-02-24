using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Domain.Entities.Product;
using BookManagementSystem.Infrastructure;
using BookManagementSystem.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BookManagementSystem.Service.Services
{
    public class ColorService : IColorService
    {
        private readonly ApplicationDbContext _context;

        public ColorService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ColorResponseDto> GetColors(int companyInfoId)
        {
            var colors = await _context.Colors
                .Where(c => c.IsActive && c.CompanyInfoId == companyInfoId)
                .Select(c => new ColorDetailDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Slug = c.Slug,
                    HexCode = c.HexCode,
                    IsActive = c.IsActive
                })
                .OrderBy(c => c.Name)
                .ToListAsync();

            return new ColorResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Colors retrieved successfully",
                Colors = colors
            };
        }

        public async Task<ColorDetailDto> GetColorBySlug(string slug, int companyInfoId)
        {
            return await _context.Colors
                .Where(c => c.Slug == slug && c.IsActive && c.CompanyInfoId == companyInfoId)
                .Select(c => new ColorDetailDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Slug = c.Slug,
                    HexCode = c.HexCode,
                    IsActive = c.IsActive
                })
                .FirstOrDefaultAsync();
        }

        public async Task<ColorResponseDto> CreateColor(CreateColorRequest request)
        {
            var slug = request.Name.ToLower().Replace(" ", "-");

            var color = new Color
            {
                Name = request.Name,
                Slug = slug,
                HexCode = request.HexCode,
                IsActive = true,
                CompanyInfoId = request.CompanyInfoId
            };

            _context.Colors.Add(color);
            await _context.SaveChangesAsync();

            return new ColorResponseDto
            {
                Status = Level.Success,
                Code = 201,
                Message = "Color created successfully",
                Colors = new List<ColorDetailDto>
                {
                    new ColorDetailDto
                    {
                        Id = color.Id,
                        Name = color.Name,
                        Slug = color.Slug,
                        HexCode = color.HexCode,
                        IsActive = color.IsActive
                    }
                }
            };
        }
    }
}
