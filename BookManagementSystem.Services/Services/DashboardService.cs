using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace BookManagementSystem.Service.Services
{
    public class DashboardService
    {
        private readonly ApplicationDbContext _context;

        public DashboardService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<DashboardStatisticsDto> GetStatisticsAsync()
        {
            var orders = _context.Orders;
            var totalRevenue = await orders.Where(o => o.Status == "delivered").SumAsync(o => o.Total);
            var totalOrders = await orders.CountAsync();
            var totalUsers = await _context.Users.CountAsync();
            var totalProducts = await _context.Products.CountAsync();

            return new DashboardStatisticsDto
            {
                total_revenue = totalRevenue,
                total_orders = totalOrders,
                total_users = totalUsers,
                total_products = totalProducts,
                total_stores = 0,
                total_refunds = await orders.CountAsync(o => o.Status == "refunded" || o.Status == "returned"),
                total_withdraw_requests = 0,
                total_out_of_delivery_orders = await orders.CountAsync(o => o.Status == "shipped"),
                total_shipped_orders = await orders.CountAsync(o => o.Status == "shipped"),
                total_cancelled_orders = await orders.CountAsync(o => o.Status == "cancelled"),
                total_processing_orders = await orders.CountAsync(o => o.Status == "confirmed"),
                total_pending_orders = await orders.CountAsync(o => o.Status == "pending"),
                total_delivered_orders = await orders.CountAsync(o => o.Status == "delivered"),
            };
        }

        public async Task<RevenueChartDto> GetRevenueChartAsync()
        {
            var now = DateTime.UtcNow;
            var months = new string[12];
            var revenues = new decimal[12];
            var commissions = new decimal[12];

            for (int i = 11; i >= 0; i--)
            {
                var date = now.AddMonths(-i);
                var startOfMonth = new DateTime(date.Year, date.Month, 1, 0, 0, 0, DateTimeKind.Utc);
                var endOfMonth = startOfMonth.AddMonths(1);

                months[11 - i] = date.ToString("MMM");
                revenues[11 - i] = await _context.Orders
                    .Where(o => o.CreatedAt >= startOfMonth && o.CreatedAt < endOfMonth && o.Status == "delivered")
                    .SumAsync(o => (decimal?)o.Total) ?? 0;
                commissions[11 - i] = 0;
            }

            return new RevenueChartDto
            {
                revenues = revenues,
                commissions = commissions,
                months = months,
            };
        }
    }
}
