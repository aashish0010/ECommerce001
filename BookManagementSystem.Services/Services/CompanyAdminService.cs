using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Domain.Entities.Company;
using BookManagementSystem.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace BookManagementSystem.Service.Services
{
    public class CompanyAdminService
    {
        private readonly ApplicationDbContext _context;

        public CompanyAdminService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<CompanyAdminResponseDto> GetCompany(int companyInfoId = 1)
        {
            var detail = await _context.CompanyDetails
                .FirstOrDefaultAsync(x => x.Id == companyInfoId);

            if (detail == null)
                throw new Exception("Company not found.");

            var socials = await _context.CompanySocialInfos
                .Where(x => x.CompanyInfoId == companyInfoId)
                .ToListAsync();

            return BuildResponse(detail, socials, 200, "Company retrieved successfully.");
        }

        public async Task<CompanyAdminResponseDto> UpdateCompany(int companyInfoId, CompanyUpdateDto dto)
        {
            var detail = await _context.CompanyDetails
                .FirstOrDefaultAsync(x => x.Id == companyInfoId);

            if (detail == null)
                throw new Exception("Company not found.");

            if (dto.CompanyName != null) detail.CompanyName = dto.CompanyName;
            if (dto.CompanyDescription != null) detail.CompanyDescription = dto.CompanyDescription;
            if (dto.CompanyPhoneNumber != null) detail.CompanyPhoneNumber = dto.CompanyPhoneNumber;
            if (dto.CompanyEmail != null) detail.CompanyEmail = dto.CompanyEmail;
            if (dto.OperationsDate != null) detail.OperationsDate = dto.OperationsDate;
            detail.HeaderLogoUrl = dto.HeaderLogoUrl;
            detail.FooterLogoUrl = dto.FooterLogoUrl;
            detail.FaviconUrl = dto.FaviconUrl;
            detail.CompanyAddress = dto.CompanyAddress;
            detail.CopyrightContent = dto.CopyrightContent;
            detail.DefaultCurrency = dto.DefaultCurrency;
            detail.SiteTagline = dto.SiteTagline;
            detail.SiteUrl = dto.SiteUrl;

            await _context.SaveChangesAsync();

            var socials = await _context.CompanySocialInfos
                .Where(x => x.CompanyInfoId == companyInfoId)
                .ToListAsync();

            return BuildResponse(detail, socials, 200, "Company updated successfully.");
        }

        public async Task<CompanyAdminResponseDto> UpsertSocialLinks(int companyInfoId, UpsertSocialLinksDto dto)
        {
            var existing = await _context.CompanySocialInfos
                .Where(x => x.CompanyInfoId == companyInfoId)
                .ToListAsync();

            _context.CompanySocialInfos.RemoveRange(existing);

            var newLinks = dto.SocialLinks.Select(s => new CompanySocialInfo
            {
                SocialMediaName = s.SocialMediaName,
                SocialMediaLink = s.SocialMediaLink ?? "",
                SocialMediaDesc = s.SocialMediaDesc ?? "",
                CompanyInfoId = companyInfoId
            }).ToList();

            _context.CompanySocialInfos.AddRange(newLinks);
            await _context.SaveChangesAsync();

            var detail = await _context.CompanyDetails.FindAsync(companyInfoId);
            return BuildResponse(detail!, newLinks, 200, "Social links updated successfully.");
        }

        private static CompanyAdminResponseDto BuildResponse(
            CompanyDetail d, List<CompanySocialInfo> socials, int code, string message)
        {
            return new CompanyAdminResponseDto
            {
                Status = Level.Success,
                Code = code,
                Message = message,
                Data = new CompanyAdminDataDto
                {
                    Id = d.Id,
                    CompanyCode = d.CompanyCode,
                    CompanyName = d.CompanyName,
                    CompanyDescription = d.CompanyDescription,
                    CompanyPhoneNumber = d.CompanyPhoneNumber,
                    CompanyEmail = d.CompanyEmail,
                    OperationsDate = d.OperationsDate,
                    HeaderLogoUrl = d.HeaderLogoUrl,
                    FooterLogoUrl = d.FooterLogoUrl,
                    FaviconUrl = d.FaviconUrl,
                    CompanyAddress = d.CompanyAddress,
                    CopyrightContent = d.CopyrightContent,
                    DefaultCurrency = d.DefaultCurrency,
                    SiteTagline = d.SiteTagline,
                    SiteUrl = d.SiteUrl,
                    SocialLinks = socials.Select(s => new SocialLinkDto
                    {
                        Id = s.Id,
                        SocialMediaName = s.SocialMediaName,
                        SocialMediaLink = s.SocialMediaLink,
                        SocialMediaDesc = s.SocialMediaDesc
                    }).ToList()
                }
            };
        }
    }
}
