using System.Text.Json.Serialization;
using BookManagementSystem.Domain.Entities;

namespace BookManagementSystem.Domain.DTO
{
    public class ImageUploadResponseDto : Common
    {
        [JsonPropertyName("url")]
        public string Url { get; set; }

        [JsonPropertyName("public_id")]
        public string PublicId { get; set; }

        [JsonPropertyName("file_name")]
        public string FileName { get; set; }

        [JsonPropertyName("size")]
        public long Size { get; set; }
    }
}
