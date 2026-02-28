using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementSystem.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class OrderController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public OrderController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpPost]
        public async Task<IActionResult> PlaceOrder([FromBody] PlaceOrderRequestDto dto)
        {
            var userName = _unitOfWork.tokenService.UserName;
            if (string.IsNullOrEmpty(userName))
                return Unauthorized(new { message = "Invalid token" });

            if (dto.Products == null || !dto.Products.Any())
                return BadRequest(new { message = "No products in order" });

            if (string.IsNullOrEmpty(dto.PaymentMethod))
                return BadRequest(new { message = "Payment method is required" });

            var result = await _unitOfWork.orderService.PlaceOrderAsync(dto, userName);
            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetMyOrders()
        {
            var userName = _unitOfWork.tokenService.UserName;
            if (string.IsNullOrEmpty(userName))
                return Unauthorized(new { message = "Invalid token" });

            var result = await _unitOfWork.orderService.GetUserOrdersAsync(userName);
            return Ok(result);
        }

        [HttpGet("admin")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAllOrders([FromQuery] int page = 1, [FromQuery] int paginate = 15)
        {
            var result = await _unitOfWork.orderService.GetAllOrdersAsync(page, paginate);
            return Ok(result);
        }

        [HttpPut("admin/{id}/status")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateOrderStatus(int id, [FromBody] UpdateOrderStatusRequest request)
        {
            if (string.IsNullOrEmpty(request?.Status))
                return BadRequest(new { message = "Status is required" });

            var result = await _unitOfWork.orderService.UpdateOrderStatusAsync(id, request.Status);
            if (!result)
                return NotFound(new { message = "Order not found" });

            return Ok(new { message = "Order status updated successfully" });
        }
    }
}
