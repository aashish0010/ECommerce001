using Asp.Versioning;
using ECommerceApp.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceApp.Controller
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class DashboardController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public DashboardController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("statistics")]
        public async Task<IActionResult> GetStatistics()
        {
            var result = await _unitOfWork.dashboardService.GetStatisticsAsync();
            return Ok(result);
        }

        [HttpGet("chart")]
        public async Task<IActionResult> GetRevenueChart()
        {
            var result = await _unitOfWork.dashboardService.GetRevenueChartAsync();
            return Ok(result);
        }
    }
}
