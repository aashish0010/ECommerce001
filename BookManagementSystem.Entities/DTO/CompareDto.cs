using System.Text.Json.Serialization;

namespace BookManagementSystem.Domain.DTO
{
    public class CompareResponseDto
    {
        [JsonPropertyName("data")]
        public List<ProductDetailDto> Data { get; set; } = new List<ProductDetailDto>();

        [JsonPropertyName("total")]
        public int Total { get; set; }
    }

    public class AddToCompareDto
    {
        [JsonPropertyName("product_id")]
        public int ProductId { get; set; }
    }
}
