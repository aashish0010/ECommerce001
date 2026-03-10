using System.Text.Json.Serialization;
using ECommerceApp.Domain.Entities.Product;

namespace ECommerceApp.Domain.Entities
{
    public class CompareItem
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public int ProductId { get; set; }
        [JsonIgnore]
        public Product.Product Product { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
