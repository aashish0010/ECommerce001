using System.Text.Json.Serialization;

namespace BookManagementSystem.Domain.DTO
{
    public class PlaceOrderRequestDto
    {
        [JsonPropertyName("products")]
        public List<OrderItemRequestDto> Products { get; set; } = new();

        [JsonPropertyName("payment_method")]
        public string PaymentMethod { get; set; }

        [JsonPropertyName("delivery_description")]
        public string DeliveryDescription { get; set; }

        [JsonPropertyName("delivery_interval")]
        public string DeliveryInterval { get; set; }

        [JsonPropertyName("shipping_address")]
        public AddressDto ShippingAddress { get; set; }

        [JsonPropertyName("billing_address")]
        public AddressDto BillingAddress { get; set; }
    }

    public class AddressDto
    {
        [JsonPropertyName("title")]
        public string Title { get; set; }

        [JsonPropertyName("street")]
        public string Street { get; set; }

        [JsonPropertyName("city")]
        public string City { get; set; }

        [JsonPropertyName("state_name")]
        public string StateName { get; set; }

        [JsonPropertyName("country_name")]
        public string CountryName { get; set; }

        [JsonPropertyName("pincode")]
        public string Pincode { get; set; }

        [JsonPropertyName("phone")]
        public string Phone { get; set; }

        [JsonPropertyName("country_code")]
        public string CountryCode { get; set; }

        [JsonPropertyName("same_shipping")]
        public bool SameShipping { get; set; }
    }

    public class OrderItemRequestDto
    {
        [JsonPropertyName("product_id")]
        public int ProductId { get; set; }

        [JsonPropertyName("variation_id")]
        public string VariationId { get; set; }

        [JsonPropertyName("quantity")]
        public int Quantity { get; set; }
    }

    public class PlaceOrderResponseDto
    {
        [JsonPropertyName("order_number")]
        public string OrderNumber { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("total")]
        public decimal Total { get; set; }

        [JsonPropertyName("payment_method")]
        public string PaymentMethod { get; set; }
    }

    public class OrderSummaryDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("order_number")]
        public string OrderNumber { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("payment_method")]
        public string PaymentMethod { get; set; }

        [JsonPropertyName("payment_status")]
        public string PaymentStatus { get; set; }

        [JsonPropertyName("total")]
        public decimal Total { get; set; }

        [JsonPropertyName("created_at")]
        public DateTime CreatedAt { get; set; }

        [JsonPropertyName("items_count")]
        public int ItemsCount { get; set; }
    }
}
