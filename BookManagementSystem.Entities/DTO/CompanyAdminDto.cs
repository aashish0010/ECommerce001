using BookManagementSystem.Domain.Entities;

namespace BookManagementSystem.Domain.DTO
{
    public class CompanyUpdateDto
    {
        public string? CompanyName { get; set; }
        public string? CompanyDescription { get; set; }
        public string? CompanyPhoneNumber { get; set; }
        public string? CompanyEmail { get; set; }
        public string? OperationsDate { get; set; }
        public string? HeaderLogoUrl { get; set; }
        public string? FooterLogoUrl { get; set; }
        public string? FaviconUrl { get; set; }
        public string? CompanyAddress { get; set; }
        public string? CopyrightContent { get; set; }
        public string? DefaultCurrency { get; set; }
        public string? SiteTagline { get; set; }
        public string? SiteUrl { get; set; }
    }

    public class SocialLinkDto
    {
        public int Id { get; set; }
        public string SocialMediaName { get; set; }
        public string SocialMediaLink { get; set; }
        public string? SocialMediaDesc { get; set; }
    }

    public class UpsertSocialLinksDto
    {
        public List<SocialLinkDto> SocialLinks { get; set; } = new();
    }

    public class CompanyAdminDataDto : CompanyUpdateDto
    {
        public int Id { get; set; }
        public string CompanyCode { get; set; }
        public List<SocialLinkDto> SocialLinks { get; set; } = new();
    }

    public class CompanyAdminResponseDto : Common
    {
        public CompanyAdminDataDto? Data { get; set; }
    }
}
