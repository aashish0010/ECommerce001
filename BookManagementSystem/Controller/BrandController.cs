using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementSystem.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public BrandController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetBrands([FromQuery] int companyInfoId = 1)
        {
            var result = await _unitOfWork.brandService.GetBrands(companyInfoId);
            return Ok(result);
        }

        [HttpGet("{slug}")]
        public async Task<IActionResult> GetBrandBySlug(string slug, [FromQuery] int companyInfoId = 1)
        {
            var result = await _unitOfWork.brandService.GetBrandBySlug(slug, companyInfoId);
            if (result == null)
                return NotFound(new { status = "Failed", code = 404, message = "Brand not found" });
            return Ok(result);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateBrand([FromBody] CreateBrandRequest request)
        {
            var result = await _unitOfWork.brandService.CreateBrand(request);
            return CreatedAtAction(nameof(GetBrandBySlug), new { slug = result.Brands?.FirstOrDefault()?.Slug }, result);
        }
    }
}
