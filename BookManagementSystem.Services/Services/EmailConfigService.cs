using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Domain.Entities.Company;
using BookManagementSystem.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace BookManagementSystem.Service.Services
{
    public class EmailConfigService
    {
        private readonly ApplicationDbContext _context;

        public EmailConfigService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<EmailConfigResponseDto> GetConfig(int companyInfoId = 1)
        {
            var config = await _context.EmailConfigurations
                .FirstOrDefaultAsync(x => x.CompanyInfoId == companyInfoId);

            if (config == null)
                throw new Exception("Email configuration not found.");

            return BuildResponse(config, 200, "Email configuration retrieved successfully.");
        }

        public async Task<EmailConfigResponseDto> UpdateConfig(int id, EmailConfigUpdateDto dto)
        {
            var config = await _context.EmailConfigurations.FindAsync(id);

            if (config == null)
                throw new Exception("Email configuration not found.");

            config.FromEmail = dto.FromEmail;
            config.FromName = dto.FromName;
            config.ApiKey = dto.ApiKey;

            await _context.SaveChangesAsync();

            return BuildResponse(config, 200, "Email configuration updated successfully.");
        }

        private static EmailConfigResponseDto BuildResponse(EmailConfiguration c, int code, string message)
        {
            return new EmailConfigResponseDto
            {
                Status = Level.Success,
                Code = code,
                Message = message,
                Data = new EmailConfigDataDto
                {
                    Id = c.Id,
                    CompanyInfoId = c.CompanyInfoId,
                    FromEmail = c.FromEmail,
                    FromName = c.FromName,
                    ApiKey = c.ApiKey
                }
            };
        }
    }
}
