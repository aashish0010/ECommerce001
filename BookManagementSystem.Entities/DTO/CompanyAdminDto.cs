using BookManagementSystem.Domain.Entities;
using System.Text.Json.Serialization;

namespace BookManagementSystem.Domain.DTO
{
    public class CompanyUpdateDto
    {
        [JsonPropertyName("company_name")]
        public string? CompanyName { get; set; }
        [JsonPropertyName("company_description")]
        public string? CompanyDescription { get; set; }
        [JsonPropertyName("company_phone_number")]
        public string? CompanyPhoneNumber { get; set; }
        [JsonPropertyName("company_email")]
        public string? CompanyEmail { get; set; }
        [JsonPropertyName("operations_date")]
        public string? OperationsDate { get; set; }
        [JsonPropertyName("header_logo_url")]
        public string? HeaderLogoUrl { get; set; }
        [JsonPropertyName("footer_logo_url")]
        public string? FooterLogoUrl { get; set; }
        [JsonPropertyName("favicon_url")]
        public string? FaviconUrl { get; set; }
        [JsonPropertyName("company_address")]
        public string? CompanyAddress { get; set; }
        [JsonPropertyName("copyright_content")]
        public string? CopyrightContent { get; set; }
        [JsonPropertyName("default_currency")]
        public string? DefaultCurrency { get; set; }
        [JsonPropertyName("site_tagline")]
        public string? SiteTagline { get; set; }
        [JsonPropertyName("site_url")]
        public string? SiteUrl { get; set; }
        [JsonPropertyName("min_order_free_shipping")]
        public decimal? MinOrderFreeShipping { get; set; }
        [JsonPropertyName("min_order_amount")]
        public decimal? MinOrderAmount { get; set; }
        [JsonPropertyName("tax_rate")]
        public decimal? TaxRate { get; set; }
    }

    public class SocialLinkDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("social_media_name")]
        public string SocialMediaName { get; set; }
        [JsonPropertyName("social_media_link")]
        public string SocialMediaLink { get; set; }
        [JsonPropertyName("social_media_desc")]
        public string? SocialMediaDesc { get; set; }
    }

    public class UpsertSocialLinksDto
    {
        [JsonPropertyName("social_links")]
        public List<SocialLinkDto> SocialLinks { get; set; } = new();
    }

    public class CompanyAdminDataDto : CompanyUpdateDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("company_code")]
        public string CompanyCode { get; set; }
        [JsonPropertyName("social_links")]
        public List<SocialLinkDto> SocialLinks { get; set; } = new();
    }

    public class CompanyAdminResponseDto : Common
    {
        public CompanyAdminDataDto? Data { get; set; }
    }
}
