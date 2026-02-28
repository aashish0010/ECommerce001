using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementSystem.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ImageController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ImageController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage(IFormFile file, [FromQuery] string folder = "products")
        {
            var result = await _unitOfWork.cloudinaryService.UploadImageAsync(file, folder);
            if (result.Status == Domain.Entities.Level.Failed)
                return BadRequest(result);
            return Ok(result);
        }

        [HttpDelete("{*publicId}")]
        public async Task<IActionResult> DeleteImage(string publicId)
        {
            var result = await _unitOfWork.cloudinaryService.DeleteImageAsync(publicId);
            if (result.Status == Domain.Entities.Level.Failed)
                return BadRequest(result);
            return Ok(result);
        }
    }
}
