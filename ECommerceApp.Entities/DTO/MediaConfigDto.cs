using ECommerceApp.Domain.Entities;
using System.Text.Json.Serialization;

namespace ECommerceApp.Domain.DTO
{
    public class MediaConfigUpdateDto
    {
        [JsonPropertyName("cloud_name")]
        public string CloudName { get; set; } = string.Empty;

        [JsonPropertyName("api_key")]
        public string ApiKey { get; set; } = string.Empty;

        [JsonPropertyName("api_secret")]
        public string ApiSecret { get; set; } = string.Empty;
    }

    public class MediaConfigDataDto : MediaConfigUpdateDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("company_info_id")]
        public int CompanyInfoId { get; set; }
    }

    public class MediaConfigResponseDto : Common
    {
        public MediaConfigDataDto? Data { get; set; }
    }
}
