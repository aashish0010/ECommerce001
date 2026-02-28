using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementSystem.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CategoryController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetCategories([FromQuery] int companyInfoId = 1)
        {
            var result = await _unitOfWork.categoryService.GetCategories(companyInfoId);
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetCategoryById(int id)
        {
            var result = await _unitOfWork.categoryService.GetCategoryById(id);
            if (result == null)
                return NotFound(new { status = "Failed", code = 404, message = "Category not found" });
            return Ok(result);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateCategory([FromBody] CreateCategoryRequest request)
        {
            var result = await _unitOfWork.categoryService.CreateCategory(request);
            return CreatedAtAction(nameof(GetCategoryById), new { id = result.Categories?.FirstOrDefault()?.Id }, result);
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateCategory(int id, [FromBody] UpdateCategoryRequest request)
        {
            var result = await _unitOfWork.categoryService.UpdateCategory(id, request);
            if (result.Code == 404)
                return NotFound(result);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var result = await _unitOfWork.categoryService.DeleteCategory(id);
            if (result.Code == 404)
                return NotFound(result);
            if (result.Code == 400)
                return BadRequest(result);
            return Ok(result);
        }
    }
}
