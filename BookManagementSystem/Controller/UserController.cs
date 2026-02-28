using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementSystem.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public UserController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("me")]
        public async Task<IActionResult> GetProfile()
        {
            var userName = _unitOfWork.tokenService.UserName;
            if (string.IsNullOrEmpty(userName))
                return Unauthorized(new { message = "Invalid token" });

            var result = await _unitOfWork.userManagementService.GetUserProfile(userName);
            if (result == null)
                return NotFound(new { message = "User not found" });

            return Ok(result);
        }

        [HttpPut("profile")]
        public async Task<IActionResult> UpdateProfile(UpdateProfileRequest request)
        {
            var userName = _unitOfWork.tokenService.UserName;
            if (string.IsNullOrEmpty(userName))
                return Unauthorized(new { message = "Invalid token" });

            var result = await _unitOfWork.userManagementService.UpdateUserProfile(userName, request);
            if (result.Status == Level.Success)
                return Ok(result);

            return BadRequest(result);
        }

        [HttpPut("password")]
        public async Task<IActionResult> ChangePassword(ChangePasswordRequest request)
        {
            var userName = _unitOfWork.tokenService.UserName;
            if (string.IsNullOrEmpty(userName))
                return Unauthorized(new { message = "Invalid token" });

            var result = await _unitOfWork.userManagementService.ChangeUserPassword(userName, request);
            if (result.Status == Level.Success)
                return Ok(result);

            return BadRequest(result);
        }

        [HttpGet("admin")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAllUsers([FromQuery] int page = 1, [FromQuery] int paginate = 15)
        {
            var result = await _unitOfWork.adminUserService.GetAllUsersAsync(page, paginate);
            return Ok(result);
        }

        [HttpPost("admin")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateUser([FromBody] CreateAdminUserRequest request)
        {
            var result = await _unitOfWork.adminUserService.CreateUserAsync(request);
            if (result.Status == Level.Success)
                return Ok(result);
            return BadRequest(result);
        }

        [HttpPut("admin/{phone}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateUser(string phone, [FromBody] UpdateAdminUserRequest request)
        {
            var result = await _unitOfWork.adminUserService.UpdateUserAsync(phone, request);
            if (result.Status == Level.Success)
                return Ok(result);
            return BadRequest(result);
        }

        [HttpDelete("admin/{phone}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteUser(string phone)
        {
            var result = await _unitOfWork.adminUserService.DeleteUserAsync(phone);
            if (result.Status == Level.Success)
                return Ok(result);
            return BadRequest(result);
        }
    }
}
