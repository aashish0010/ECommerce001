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

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateBrand(int id, [FromBody] UpdateBrandRequest request)
        {
            var result = await _unitOfWork.brandService.UpdateBrand(id, request);
            if (result.Code == 404)
                return NotFound(result);
            return Ok(result);
        }

        [HttpPatch("{id}/status")]
        [Authorize]
        public async Task<IActionResult> UpdateBrandStatus(int id, [FromBody] StatusRequest request)
        {
            var result = await _unitOfWork.brandService.UpdateBrandStatus(id, request.Status);
            if (result.Code == 404)
                return NotFound(result);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteBrand(int id)
        {
            var result = await _unitOfWork.brandService.DeleteBrand(id);
            if (result.Code == 404)
                return NotFound(result);
            return Ok(result);
        }

        [HttpPost("delete-all")]
        [Authorize]
        public async Task<IActionResult> DeleteAllBrands([FromBody] DeleteAllRequest request)
        {
            var result = await _unitOfWork.brandService.DeleteAllBrands(request.Ids);
            if (result.Code == 404)
                return NotFound(result);
            return Ok(result);
        }
    }

    public class StatusRequest
    {
        public bool Status { get; set; }
    }

    public class DeleteAllRequest
    {
        public List<int> Ids { get; set; } = new List<int>();
    }
}
