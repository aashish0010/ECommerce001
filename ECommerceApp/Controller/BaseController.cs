using ECommerceApp.Domain.DTO;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceApp.Controller
{
    [ApiController]
    public abstract class BaseController : ControllerBase
    {
        protected IActionResult ApiOk<T>(T data, string message = "Success")
        {
            return Ok(new ApiResponse<T>
            {
                Success = true,
                Message = message,
                Data = data
            });
        }

        protected IActionResult ApiCreated<T>(T data, string message = "Created successfully")
        {
            return StatusCode(StatusCodes.Status201Created, new ApiResponse<T>
            {
                Success = true,
                Message = message,
                Data = data
            });
        }

        protected IActionResult ApiBadRequest(string message, List<string>? errors = null)
        {
            return BadRequest(new ApiResponse<object>
            {
                Success = false,
                Message = message,
                Errors = errors
            });
        }

        protected IActionResult ApiNotFound(string message = "Resource not found")
        {
            return NotFound(new ApiResponse<object>
            {
                Success = false,
                Message = message
            });
        }
    }
}
