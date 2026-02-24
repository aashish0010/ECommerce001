using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementSystem.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColorController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ColorController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetColors([FromQuery] int companyInfoId = 1)
        {
            var result = await _unitOfWork.colorService.GetColors(companyInfoId);
            return Ok(result);
        }

        [HttpGet("{slug}")]
        public async Task<IActionResult> GetColorBySlug(string slug, [FromQuery] int companyInfoId = 1)
        {
            var result = await _unitOfWork.colorService.GetColorBySlug(slug, companyInfoId);
            if (result == null)
                return NotFound(new { status = "Failed", code = 404, message = "Color not found" });
            return Ok(result);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateColor([FromBody] CreateColorRequest request)
        {
            var result = await _unitOfWork.colorService.CreateColor(request);
            return CreatedAtAction(nameof(GetColorBySlug), new { slug = result.Colors?.FirstOrDefault()?.Slug }, result);
        }
    }
}
