using System.ComponentModel.DataAnnotations;

namespace ECommerceApp.Domain.Entities.Company
{
    public class HomeConfiguration
    {
        [Key]
        public int Id { get; set; }
        public int CompanyInfoId { get; set; }
        public CompanyDetail CompanyDetail { get; set; }

        // Slider banners
        public string? Slider1ImageUrl { get; set; }
        public string? Slider1Link { get; set; }
        public string? Slider1LinkType { get; set; }
        public string? Slider2ImageUrl { get; set; }
        public string? Slider2Link { get; set; }
        public string? Slider2LinkType { get; set; }

        // Offer banners
        public string? Offer1ImageUrl { get; set; }
        public string? Offer1Link { get; set; }
        public string? Offer1LinkType { get; set; }
        public string? Offer2ImageUrl { get; set; }
        public string? Offer2Link { get; set; }
        public string? Offer2LinkType { get; set; }
    }
}
