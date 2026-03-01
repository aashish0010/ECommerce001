using BookManagementSystem.Domain.Entities;
using System.Text.Json.Serialization;

namespace BookManagementSystem.Domain.DTO
{
    public class HomeConfigUpdateDto
    {
        [JsonPropertyName("slider1_image_url")]
        public string? Slider1ImageUrl { get; set; }

        [JsonPropertyName("slider1_link")]
        public string? Slider1Link { get; set; }

        [JsonPropertyName("slider1_link_type")]
        public string? Slider1LinkType { get; set; }

        [JsonPropertyName("slider2_image_url")]
        public string? Slider2ImageUrl { get; set; }

        [JsonPropertyName("slider2_link")]
        public string? Slider2Link { get; set; }

        [JsonPropertyName("slider2_link_type")]
        public string? Slider2LinkType { get; set; }

        [JsonPropertyName("offer1_image_url")]
        public string? Offer1ImageUrl { get; set; }

        [JsonPropertyName("offer1_link")]
        public string? Offer1Link { get; set; }

        [JsonPropertyName("offer1_link_type")]
        public string? Offer1LinkType { get; set; }

        [JsonPropertyName("offer2_image_url")]
        public string? Offer2ImageUrl { get; set; }

        [JsonPropertyName("offer2_link")]
        public string? Offer2Link { get; set; }

        [JsonPropertyName("offer2_link_type")]
        public string? Offer2LinkType { get; set; }
    }

    public class HomeConfigDataDto : HomeConfigUpdateDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("company_info_id")]
        public int CompanyInfoId { get; set; }
    }

    public class HomeConfigResponseDto : Common
    {
        public HomeConfigDataDto? Data { get; set; }
    }
}
