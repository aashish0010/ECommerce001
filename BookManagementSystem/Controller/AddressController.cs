using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementSystem.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AddressController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public AddressController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetMyAddresses()
        {
            var userName = _unitOfWork.tokenService.UserName;
            if (string.IsNullOrEmpty(userName))
                return Unauthorized(new { message = "Invalid token" });

            var result = await _unitOfWork.addressService.GetUserAddressesAsync(userName);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAddress([FromBody] CreateAddressDto dto)
        {
            var userName = _unitOfWork.tokenService.UserName;
            if (string.IsNullOrEmpty(userName))
                return Unauthorized(new { message = "Invalid token" });

            if (string.IsNullOrWhiteSpace(dto.Title) || string.IsNullOrWhiteSpace(dto.Street))
                return BadRequest(new { message = "Title and street are required" });

            var result = await _unitOfWork.addressService.CreateAddressAsync(userName, dto);
            return Ok(result);
        }
    }
}
