using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementSystem.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ProductController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts(
            [FromQuery] int companyInfoId = 1,
            [FromQuery] int? categoryId = null,
            [FromQuery] string category = null,
            [FromQuery] string search = null,
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 20,
            [FromQuery] int? brandId = null,
            [FromQuery] string brand = null,
            [FromQuery] string colorSlugs = null,
            [FromQuery] string color = null)
        {
            var result = await _unitOfWork.productService.GetProducts(companyInfoId, categoryId, category, search, page, pageSize, brandId, brand, colorSlugs ?? color);
            return Ok(result);
        }

        [HttpGet("{slug}")]
        public async Task<IActionResult> GetProductBySlug(string slug)
        {
            var result = await _unitOfWork.productService.GetProductBySlug(slug);
            if (result.Code == 404)
                return NotFound(result);
            return Ok(result);
        }

        [HttpGet("categories")]
        public async Task<IActionResult> GetCategories([FromQuery] int companyInfoId = 1)
        {
            var result = await _unitOfWork.productService.GetCategories(companyInfoId);
            return Ok(result);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateProduct([FromBody] CreateProductRequest request)
        {
            var result = await _unitOfWork.productService.CreateProduct(request);
            return CreatedAtAction(nameof(GetProductBySlug), new { slug = result.Product?.Slug }, result);
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateProduct(int id, [FromBody] UpdateProductRequest request)
        {
            var result = await _unitOfWork.productService.UpdateProduct(id, request);
            if (result.Code == 404)
                return NotFound(result);
            return Ok(result);
        }

        [HttpPatch("{id}/status")]
        [Authorize]
        public async Task<IActionResult> UpdateProductStatus(int id, [FromBody] StatusRequest request)
        {
            var result = await _unitOfWork.productService.UpdateProductStatus(id, request.Status);
            if (result.Code == 404)
                return NotFound(result);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var result = await _unitOfWork.productService.DeleteProduct(id);
            if (result.Code == 404)
                return NotFound(result);
            return Ok(result);
        }

        [HttpPost("delete-all")]
        [Authorize]
        public async Task<IActionResult> DeleteAllProducts([FromBody] DeleteAllRequest request)
        {
            var result = await _unitOfWork.productService.DeleteAllProducts(request.Ids);
            if (result.Code == 404)
                return NotFound(result);
            return Ok(result);
        }

        [HttpPost("with-image")]
        [Authorize]
        public async Task<IActionResult> CreateProductWithImage(
            [FromForm] CreateProductRequest request,
            IFormFile image)
        {
            if (image != null)
            {
                var uploadResult = await _unitOfWork.cloudinaryService.UploadImageAsync(image, "products");
                if (uploadResult.Status == Domain.Entities.Level.Failed)
                    return BadRequest(uploadResult);
                request.ImageUrls ??= new List<string>();
                request.ImageUrls.Insert(0, uploadResult.Url);
            }

            var result = await _unitOfWork.productService.CreateProduct(request);
            return CreatedAtAction(nameof(GetProductBySlug), new { slug = result.Product?.Slug }, result);
        }

        [HttpPost("seed")]
        public async Task<IActionResult> SeedData([FromQuery] int companyInfoId = 1)
        {
            var result = await _unitOfWork.productService.SeedCategories(companyInfoId);
            if (result.Status == Domain.Entities.Level.Failed)
                return BadRequest(result);
            return Ok(result);
        }
    }
}
