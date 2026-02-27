using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementSystem.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CompareController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CompareController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetCompare()
        {
            var userName = _unitOfWork.tokenService.UserName;
            if (string.IsNullOrEmpty(userName))
                return Unauthorized(new { message = "Invalid token" });

            var result = await _unitOfWork.compareService.GetUserCompareAsync(userName);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> AddToCompare([FromBody] AddToCompareDto dto)
        {
            var userName = _unitOfWork.tokenService.UserName;
            if (string.IsNullOrEmpty(userName))
                return Unauthorized(new { message = "Invalid token" });

            var success = await _unitOfWork.compareService.AddToCompareAsync(userName, dto.ProductId);
            if (!success)
                return NotFound(new { message = "Product not found" });

            return Ok(new { message = "Added to compare" });
        }

        [HttpDelete("{productId}")]
        public async Task<IActionResult> RemoveFromCompare(int productId)
        {
            var userName = _unitOfWork.tokenService.UserName;
            if (string.IsNullOrEmpty(userName))
                return Unauthorized(new { message = "Invalid token" });

            var removed = await _unitOfWork.compareService.RemoveFromCompareAsync(userName, productId);
            if (!removed)
                return NotFound(new { message = "Compare item not found" });

            return Ok(new { message = "Removed from compare" });
        }
    }
}
