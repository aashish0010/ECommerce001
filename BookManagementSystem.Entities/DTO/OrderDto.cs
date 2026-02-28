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

        [JsonPropertyName("coupon")]
        public string CouponCode { get; set; }
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

        [JsonPropertyName("discount_amount")]
        public decimal DiscountAmount { get; set; }
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

    public class AdminOrderDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("order_number")]
        public string OrderNumber { get; set; }

        [JsonPropertyName("amount")]
        public decimal Amount { get; set; }

        [JsonPropertyName("total")]
        public decimal Total { get; set; }

        [JsonPropertyName("consumer_name")]
        public string ConsumerName { get; set; }

        [JsonPropertyName("payment_method")]
        public string PaymentMethod { get; set; }

        [JsonPropertyName("payment_status")]
        public string PaymentStatus { get; set; }

        [JsonPropertyName("order_status")]
        public AdminOrderStatusDto OrderStatus { get; set; }

        [JsonPropertyName("created_at")]
        public string CreatedAt { get; set; }
    }

    public class AdminOrderStatusDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("slug")]
        public string Slug { get; set; }

        [JsonPropertyName("sequence")]
        public int Sequence { get; set; }
    }

    public class AdminOrderListResponse
    {
        [JsonPropertyName("data")]
        public List<AdminOrderDto> Data { get; set; }

        [JsonPropertyName("total")]
        public int Total { get; set; }
    }

    public class UpdateOrderStatusRequest
    {
        [JsonPropertyName("status")]
        public string Status { get; set; }
    }
}
