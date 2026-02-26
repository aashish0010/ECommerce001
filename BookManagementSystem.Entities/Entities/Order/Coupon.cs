using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BookManagementSystem.Domain.Entities.Company;

namespace BookManagementSystem.Domain.Entities.Order
{
    public class Coupon
    {
        [Key]
        public int Id { get; set; }
        public string Code { get; set; }          // e.g. "SAVE10" — stored uppercase
        public string Title { get; set; }
        public string Description { get; set; }
        public string DiscountType { get; set; }  // "flat" | "percentage"
        public decimal Amount { get; set; }
        public decimal? MinSpend { get; set; }
        public decimal? MaxSpend { get; set; }
        public DateTime? ExpiresAt { get; set; }
        public bool IsActive { get; set; } = true;
        public int? UsageLimit { get; set; }
        public int UsageCount { get; set; } = 0;
        public int CompanyInfoId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [JsonIgnore]
        public CompanyDetail CompanyInfo { get; set; }
    }
}
