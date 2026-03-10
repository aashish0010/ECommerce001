using ECommerceApp.Domain.DTO;
using ECommerceApp.Domain.Entities;
using ECommerceApp.Domain.Entities.Company;
using ECommerceApp.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace ECommerceApp.Service.Services
{
    public class MediaConfigService
    {
        private readonly ApplicationDbContext _context;

        public MediaConfigService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<MediaConfigResponseDto> GetConfig(int companyInfoId = 1)
        {
            var config = await _context.MediaConfigurations
                .FirstOrDefaultAsync(x => x.CompanyInfoId == companyInfoId);

            if (config == null)
                throw new Exception("Media configuration not found.");

            return BuildResponse(config, 200, "Media configuration retrieved successfully.");
        }

        public async Task<MediaConfigResponseDto> UpdateConfig(int id, MediaConfigUpdateDto dto)
        {
            var config = await _context.MediaConfigurations.FindAsync(id);

            if (config == null)
                throw new Exception("Media configuration not found.");

            config.CloudName = dto.CloudName;
            config.ApiKey = dto.ApiKey;
            config.ApiSecret = dto.ApiSecret;

            await _context.SaveChangesAsync();

            return BuildResponse(config, 200, "Media configuration updated successfully.");
        }

        private static MediaConfigResponseDto BuildResponse(MediaConfiguration c, int code, string message)
        {
            return new MediaConfigResponseDto
            {
                Status = Level.Success,
                Code = code,
                Message = message,
                Data = new MediaConfigDataDto
                {
                    Id = c.Id,
                    CompanyInfoId = c.CompanyInfoId,
                    CloudName = c.CloudName,
                    ApiKey = c.ApiKey,
                    ApiSecret = c.ApiSecret
                }
            };
        }
    }
}
