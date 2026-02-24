namespace BookManagementSystem.Domain.Entities.Order
{
    public class Order
    {
        public int Id { get; set; }
        public string OrderNumber { get; set; }
        public string UserName { get; set; } // FK to Identity User (phone = username)

        public string PaymentMethod { get; set; } // "cash_on_delivery" | "mobile_payment"
        public string PaymentStatus { get; set; } = "pending";
        public string Status { get; set; } = "pending";

        public decimal SubTotal { get; set; }
        public decimal Total { get; set; }

        public string DeliveryDescription { get; set; }
        public string DeliveryInterval { get; set; }

        // Shipping Address
        public string ShippingTitle { get; set; }
        public string ShippingStreet { get; set; }
        public string ShippingCity { get; set; }
        public string ShippingState { get; set; }
        public string ShippingCountry { get; set; }
        public string ShippingPincode { get; set; }
        public string ShippingPhone { get; set; }

        // Billing Address
        public bool BillingSameAsShipping { get; set; }
        public string BillingTitle { get; set; }
        public string BillingStreet { get; set; }
        public string BillingCity { get; set; }
        public string BillingState { get; set; }
        public string BillingCountry { get; set; }
        public string BillingPincode { get; set; }
        public string BillingPhone { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public ICollection<OrderItem> Items { get; set; } = new List<OrderItem>();
    }
}
