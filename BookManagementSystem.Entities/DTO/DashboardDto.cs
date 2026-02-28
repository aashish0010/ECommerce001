namespace BookManagementSystem.Domain.DTO
{
    public class DashboardStatisticsDto
    {
        public decimal total_revenue { get; set; }
        public int total_orders { get; set; }
        public int total_users { get; set; }
        public int total_products { get; set; }
        public int total_stores { get; set; }
        public int total_refunds { get; set; }
        public int total_withdraw_requests { get; set; }
        public int total_out_of_delivery_orders { get; set; }
        public int total_shipped_orders { get; set; }
        public int total_cancelled_orders { get; set; }
        public int total_processing_orders { get; set; }
        public int total_pending_orders { get; set; }
        public int total_delivered_orders { get; set; }
    }

    public class RevenueChartDto
    {
        public decimal[] revenues { get; set; }
        public decimal[] commissions { get; set; }
        public string[] months { get; set; }
    }
}
