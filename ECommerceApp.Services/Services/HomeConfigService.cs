using ECommerceApp.Domain.DTO;
using ECommerceApp.Domain.Entities;
using ECommerceApp.Domain.Entities.Company;
using ECommerceApp.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace ECommerceApp.Service.Services
{
    public class HomeConfigService
    {
        private readonly ApplicationDbContext _context;

        public HomeConfigService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<HomeConfigResponseDto> GetConfig(int companyInfoId = 1)
        {
            var config = await _context.HomeConfigurations
                .FirstOrDefaultAsync(x => x.CompanyInfoId == companyInfoId);

            if (config == null)
                throw new Exception("Home configuration not found.");

            return BuildResponse(config, 200, "Home configuration retrieved successfully.");
        }

        public async Task<HomeConfigResponseDto> UpdateConfig(int id, HomeConfigUpdateDto dto)
        {
            var config = await _context.HomeConfigurations.FindAsync(id);

            if (config == null)
                throw new Exception("Home configuration not found.");

            config.Slider1ImageUrl = dto.Slider1ImageUrl;
            config.Slider1Link = dto.Slider1Link;
            config.Slider1LinkType = dto.Slider1LinkType;
            config.Slider2ImageUrl = dto.Slider2ImageUrl;
            config.Slider2Link = dto.Slider2Link;
            config.Slider2LinkType = dto.Slider2LinkType;
            config.Offer1ImageUrl = dto.Offer1ImageUrl;
            config.Offer1Link = dto.Offer1Link;
            config.Offer1LinkType = dto.Offer1LinkType;
            config.Offer2ImageUrl = dto.Offer2ImageUrl;
            config.Offer2Link = dto.Offer2Link;
            config.Offer2LinkType = dto.Offer2LinkType;

            await _context.SaveChangesAsync();

            return BuildResponse(config, 200, "Home configuration updated successfully.");
        }

        private static HomeConfigResponseDto BuildResponse(HomeConfiguration c, int code, string message)
        {
            return new HomeConfigResponseDto
            {
                Status = Level.Success,
                Code = code,
                Message = message,
                Data = new HomeConfigDataDto
                {
                    Id = c.Id,
                    CompanyInfoId = c.CompanyInfoId,
                    Slider1ImageUrl = c.Slider1ImageUrl,
                    Slider1Link = c.Slider1Link,
                    Slider1LinkType = c.Slider1LinkType,
                    Slider2ImageUrl = c.Slider2ImageUrl,
                    Slider2Link = c.Slider2Link,
                    Slider2LinkType = c.Slider2LinkType,
                    Offer1ImageUrl = c.Offer1ImageUrl,
                    Offer1Link = c.Offer1Link,
                    Offer1LinkType = c.Offer1LinkType,
                    Offer2ImageUrl = c.Offer2ImageUrl,
                    Offer2Link = c.Offer2Link,
                    Offer2LinkType = c.Offer2LinkType
                }
            };
        }
    }
}
