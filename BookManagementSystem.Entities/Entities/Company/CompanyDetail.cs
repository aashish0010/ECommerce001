using System.ComponentModel.DataAnnotations;

namespace BookManagementSystem.Domain.Entities.Company
{
    public class CompanyDetail
    {
        [Key]
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string CompanyDescription { get; set; }
        public string CompanyPhoneNumber { get; set; }
        public string CompanyEmail { get; set; }
        public string OperationsDate { get; set; }
        public string CompanyCode { get; set; }

        // Extended branding & contact fields
        public string? HeaderLogoUrl { get; set; }
        public string? FooterLogoUrl { get; set; }
        public string? FaviconUrl { get; set; }
        public string? CompanyAddress { get; set; }
        public string? CopyrightContent { get; set; }
        public string? DefaultCurrency { get; set; }
        public string? SiteTagline { get; set; }
        public string? SiteUrl { get; set; }
    }
}
