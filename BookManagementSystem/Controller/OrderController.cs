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
    }
}
