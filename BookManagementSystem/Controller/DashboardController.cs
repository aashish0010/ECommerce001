using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementSystem.Controller
{
    [Route("api/[controller]")]
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
