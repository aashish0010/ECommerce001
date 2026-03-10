using ECommerceApp.Domain.Entities;
using System.Text.Json.Serialization;

namespace ECommerceApp.Domain.DTO
{
    public class EmailConfigUpdateDto
    {
        [JsonPropertyName("from_email")]
        public string FromEmail { get; set; } = string.Empty;

        [JsonPropertyName("from_name")]
        public string FromName { get; set; } = string.Empty;

        [JsonPropertyName("api_key")]
        public string ApiKey { get; set; } = string.Empty;
    }

    public class EmailConfigDataDto : EmailConfigUpdateDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("company_info_id")]
        public int CompanyInfoId { get; set; }
    }

    public class EmailConfigResponseDto : Common
    {
        public EmailConfigDataDto? Data { get; set; }
    }
}
