using System.Text.Json.Serialization;
using BookManagementSystem.Domain.Entities;

namespace BookManagementSystem.Domain.DTO
{
    public class CouponListItemDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("code")]
        public string Code { get; set; }

        [JsonPropertyName("title")]
        public string Title { get; set; }

        [JsonPropertyName("description")]
        public string Description { get; set; }

        [JsonPropertyName("discount_type")]
        public string DiscountType { get; set; }

        [JsonPropertyName("amount")]
        public decimal Amount { get; set; }

        [JsonPropertyName("min_spend")]
        public decimal? MinSpend { get; set; }

        [JsonPropertyName("max_spend")]
        public decimal? MaxSpend { get; set; }

        [JsonPropertyName("expires_at")]
        public DateTime? ExpiresAt { get; set; }

        [JsonPropertyName("usage_limit")]
        public int? UsageLimit { get; set; }

        [JsonPropertyName("usage_count")]
        public int UsageCount { get; set; }

        [JsonPropertyName("is_active")]
        public bool IsActive { get; set; }

        [JsonPropertyName("created_at")]
        public DateTime CreatedAt { get; set; }
    }

    public class UpdateCouponDto
    {
        [JsonPropertyName("title")]
        public string Title { get; set; }

        [JsonPropertyName("description")]
        public string Description { get; set; }

        [JsonPropertyName("discount_type")]
        public string DiscountType { get; set; }

        [JsonPropertyName("amount")]
        public decimal Amount { get; set; }

        [JsonPropertyName("min_spend")]
        public decimal? MinSpend { get; set; }

        [JsonPropertyName("max_spend")]
        public decimal? MaxSpend { get; set; }

        [JsonPropertyName("expires_at")]
        public DateTime? ExpiresAt { get; set; }

        [JsonPropertyName("usage_limit")]
        public int? UsageLimit { get; set; }

        [JsonPropertyName("is_active")]
        public bool IsActive { get; set; } = true;
    }

    public class CouponListResponseDto
    {
        [JsonPropertyName("status")]
        public Level Status { get; set; }

        [JsonPropertyName("code")]
        public int Code { get; set; }

        [JsonPropertyName("message")]
        public string Message { get; set; }

        [JsonPropertyName("data")]
        public List<CouponListItemDto> Data { get; set; }
    }

    public class ApplyCouponRequestDto
    {
        [JsonPropertyName("code")]
        public string Code { get; set; }

        [JsonPropertyName("subtotal")]
        public decimal Subtotal { get; set; }

        [JsonPropertyName("company_info_id")]
        public int CompanyInfoId { get; set; } = 1;
    }

    public class ApplyCouponResponseDto
    {
        [JsonPropertyName("code")]
        public string Code { get; set; }

        [JsonPropertyName("title")]
        public string Title { get; set; }

        [JsonPropertyName("discount_type")]
        public string DiscountType { get; set; }

        [JsonPropertyName("amount")]
        public decimal Amount { get; set; }

        [JsonPropertyName("discount_amount")]
        public decimal DiscountAmount { get; set; }
    }

    public class CreateCouponDto
    {
        [JsonPropertyName("code")]
        public string Code { get; set; }

        [JsonPropertyName("title")]
        public string Title { get; set; }

        [JsonPropertyName("description")]
        public string Description { get; set; }

        [JsonPropertyName("discount_type")]
        public string DiscountType { get; set; }  // "flat" | "percentage"

        [JsonPropertyName("amount")]
        public decimal Amount { get; set; }

        [JsonPropertyName("min_spend")]
        public decimal? MinSpend { get; set; }

        [JsonPropertyName("max_spend")]
        public decimal? MaxSpend { get; set; }

        [JsonPropertyName("expires_at")]
        public DateTime? ExpiresAt { get; set; }

        [JsonPropertyName("usage_limit")]
        public int? UsageLimit { get; set; }

        [JsonPropertyName("company_info_id")]
        public int CompanyInfoId { get; set; } = 1;
    }
}
