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
    }
}
