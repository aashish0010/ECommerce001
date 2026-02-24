using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BookManagementSystem.Domain.Entities.Company;

namespace BookManagementSystem.Domain.Entities.Product
{
    public class Color
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
        public string HexCode { get; set; }
        public bool IsActive { get; set; } = true;
        public int CompanyInfoId { get; set; }
        [JsonIgnore]
        public CompanyDetail CompanyInfo { get; set; }
        [JsonIgnore]
        public ICollection<ProductColor> ProductColors { get; set; }
    }
}
