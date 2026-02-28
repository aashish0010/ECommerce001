using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities.Order;
using BookManagementSystem.Infrastructure;
using BookManagementSystem.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BookManagementSystem.Service.Services
{
    public class OrderService : IOrderService
    {
        private readonly ApplicationDbContext _context;

        public OrderService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<PlaceOrderResponseDto> PlaceOrderAsync(PlaceOrderRequestDto dto, string userName)
        {
            var productIds = dto.Products.Select(p => p.ProductId).ToList();
            var products = await _context.Products
                .Where(p => productIds.Contains(p.Id))
                .ToListAsync();

            decimal subTotal = 0;
            var orderItems = new List<OrderItem>();

            foreach (var item in dto.Products)
            {
                var product = products.FirstOrDefault(p => p.Id == item.ProductId);
                if (product != null)
                {
                    var unitPrice = (product.SalePrice.HasValue && product.SalePrice.Value > 0)
                        ? product.SalePrice.Value
                        : product.Price;
                    var itemTotal = unitPrice * item.Quantity;
                    subTotal += itemTotal;
                    orderItems.Add(new OrderItem
                    {
                        ProductId = item.ProductId,
                        VariationId = item.VariationId,
                        Quantity = item.Quantity,
                        UnitPrice = unitPrice,
                        Total = itemTotal
                    });
                }
            }

            // Apply coupon if provided
            decimal discountAmount = 0;
            string appliedCouponCode = null;
            if (!string.IsNullOrWhiteSpace(dto.CouponCode))
            {
                var now = DateTime.UtcNow;
                var coupon = await _context.Coupons.FirstOrDefaultAsync(c =>
                    c.Code == dto.CouponCode.Trim().ToUpper()
                    && c.IsActive
                    && (c.ExpiresAt == null || c.ExpiresAt > now)
                    && (c.UsageLimit == null || c.UsageCount < c.UsageLimit));

                if (coupon != null
                    && (coupon.MinSpend == null || subTotal >= coupon.MinSpend.Value)
                    && (coupon.MaxSpend == null || subTotal <= coupon.MaxSpend.Value))
                {
                    discountAmount = coupon.DiscountType == "percentage"
                        ? Math.Round(subTotal * coupon.Amount / 100, 2)
                        : Math.Min(coupon.Amount, subTotal);
                    appliedCouponCode = coupon.Code;
                    coupon.UsageCount += 1;
                }
            }

            var billingAddr = (dto.BillingAddress?.SameShipping == true)
                ? dto.ShippingAddress
                : dto.BillingAddress;

            var order = new Order
            {
                OrderNumber = GenerateOrderNumber(),
                UserName = userName,
                PaymentMethod = dto.PaymentMethod,
                PaymentStatus = "pending",
                Status = "pending",
                SubTotal = subTotal,
                Total = subTotal - discountAmount,
                CouponCode = appliedCouponCode,
                DiscountAmount = discountAmount,
                DeliveryDescription = dto.DeliveryDescription,
                DeliveryInterval = dto.DeliveryInterval,
                BillingSameAsShipping = dto.BillingAddress?.SameShipping == true,
                ShippingTitle = dto.ShippingAddress?.Title,
                ShippingStreet = dto.ShippingAddress?.Street,
                ShippingCity = dto.ShippingAddress?.City,
                ShippingState = dto.ShippingAddress?.StateName,
                ShippingCountry = dto.ShippingAddress?.CountryName,
                ShippingPincode = dto.ShippingAddress?.Pincode,
                ShippingPhone = dto.ShippingAddress?.Phone,
                BillingTitle = billingAddr?.Title,
                BillingStreet = billingAddr?.Street,
                BillingCity = billingAddr?.City,
                BillingState = billingAddr?.StateName,
                BillingCountry = billingAddr?.CountryName,
                BillingPincode = billingAddr?.Pincode,
                BillingPhone = billingAddr?.Phone,
                CreatedAt = DateTime.UtcNow,
                Items = orderItems
            };

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return new PlaceOrderResponseDto
            {
                OrderNumber = order.OrderNumber,
                Status = order.Status,
                Total = order.Total,
                PaymentMethod = order.PaymentMethod,
                DiscountAmount = order.DiscountAmount
            };
        }

        public async Task<List<OrderSummaryDto>> GetUserOrdersAsync(string userName)
        {
            return await _context.Orders
                .Where(o => o.UserName == userName)
                .OrderByDescending(o => o.CreatedAt)
                .Select(o => new OrderSummaryDto
                {
                    Id = o.Id,
                    OrderNumber = o.OrderNumber,
                    Status = o.Status,
                    PaymentMethod = o.PaymentMethod,
                    PaymentStatus = o.PaymentStatus,
                    Total = o.Total,
                    CreatedAt = o.CreatedAt,
                    ItemsCount = o.Items.Count
                })
                .ToListAsync();
        }

        public async Task<AdminOrderListResponse> GetAllOrdersAsync(int page = 1, int pageSize = 15)
        {
            var query = _context.Orders.OrderByDescending(o => o.CreatedAt);
            var total = await query.CountAsync();
            var orders = await query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .Select(o => new AdminOrderDto
                {
                    Id = o.Id,
                    OrderNumber = o.OrderNumber,
                    Amount = o.SubTotal,
                    Total = o.Total,
                    ConsumerName = o.UserName,
                    PaymentMethod = o.PaymentMethod,
                    PaymentStatus = o.PaymentStatus,
                    OrderStatus = new AdminOrderStatusDto
                    {
                        Id = GetStatusId(o.Status),
                        Name = o.Status,
                        Slug = o.Status,
                        Sequence = GetStatusId(o.Status),
                    },
                    CreatedAt = o.CreatedAt.ToString("yyyy-MM-ddTHH:mm:ss")
                })
                .ToListAsync();

            return new AdminOrderListResponse
            {
                Data = orders,
                Total = total
            };
        }

        public async Task<bool> UpdateOrderStatusAsync(int orderId, string status)
        {
            var order = await _context.Orders.FindAsync(orderId);
            if (order == null) return false;

            order.Status = status;
            if (status == "delivered")
                order.PaymentStatus = "completed";

            await _context.SaveChangesAsync();
            return true;
        }

        private static int GetStatusId(string status) => status switch
        {
            "pending" => 1,
            "confirmed" => 2,
            "shipped" => 3,
            "delivered" => 4,
            "cancelled" => 5,
            "refunded" => 6,
            "returned" => 7,
            _ => 0
        };

        private static string GenerateOrderNumber()
        {
            return "ORD-" + DateTime.UtcNow.ToString("yyyyMMddHHmmss") + "-" + new Random().Next(1000, 9999);
        }
    }
}
