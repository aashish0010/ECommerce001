using System.Text.Json.Serialization;

namespace ECommerceApp.Domain.DTO
{
    public class PaginatedResult<T>
    {
        [JsonPropertyName("items")]
        public List<T> Items { get; set; } = new();

        [JsonPropertyName("total_count")]
        public int TotalCount { get; set; }

        [JsonPropertyName("page")]
        public int Page { get; set; }

        [JsonPropertyName("page_size")]
        public int PageSize { get; set; }

        [JsonPropertyName("total_pages")]
        public int TotalPages => (int)Math.Ceiling(TotalCount / (double)PageSize);

        [JsonPropertyName("has_next_page")]
        public bool HasNextPage => Page < TotalPages;

        [JsonPropertyName("has_previous_page")]
        public bool HasPreviousPage => Page > 1;
    }
}
