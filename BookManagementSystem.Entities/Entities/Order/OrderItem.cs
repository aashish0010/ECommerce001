using BookManagementSystem.Domain.Entities.Product;

namespace BookManagementSystem.Domain.Entities.Order
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }

        public int ProductId { get; set; }
        public Product.Product Product { get; set; }

        public string VariationId { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal Total { get; set; }
    }
}
