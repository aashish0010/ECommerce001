using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BookManagementSystem.Domain.Entities.Company;

namespace BookManagementSystem.Domain.Entities.Product
{
    public class Brand
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int CompanyInfoId { get; set; }
        [JsonIgnore]
        public CompanyDetail CompanyInfo { get; set; }
        [JsonIgnore]
        public ICollection<Product> Products { get; set; }
    }
}
