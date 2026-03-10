using ECommerceApp.Controller;
using ECommerceApp.Domain.DTO;
using ECommerceApp.Domain.Entities;
using ECommerceApp.Service.Interfaces;
using ECommerceApp.Service.Services;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace ECommerceApp.Test
{
    public class CategoryControllerTests
    {
        private readonly Mock<IUnitOfWork> _unitOfWorkMock;
        private readonly Mock<CategoryService> _categoryServiceMock;
        private readonly CategoryController _controller;

        public CategoryControllerTests()
        {
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _unitOfWorkMock.DefaultValue = DefaultValue.Mock;
            _controller = new CategoryController(_unitOfWorkMock.Object);
            _categoryServiceMock = Mock.Get(_unitOfWorkMock.Object.categoryService);
        }

        [Fact]
        public async Task GetCategories_ReturnsOk()
        {
            var response = new CategoryResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Categories = new List<CategoryDetailDto>
                {
                    new CategoryDetailDto { Id = 1, Name = "Fashion", Slug = "fashion" }
                }
            };
            _categoryServiceMock.Setup(s => s.GetCategories(1)).ReturnsAsync(response);

            var result = await _controller.GetCategories(1);

            var okResult = result.Should().BeOfType<OkObjectResult>().Subject;
            var data = okResult.Value.Should().BeOfType<CategoryResponseDto>().Subject;
            data.Categories.Should().HaveCount(1);
        }

        [Fact]
        public async Task GetCategoryById_Valid_ReturnsOk()
        {
            var category = new CategoryDetailDto { Id = 1, Name = "Fashion", Slug = "fashion" };
            _categoryServiceMock.Setup(s => s.GetCategoryById(1)).ReturnsAsync(category);

            var result = await _controller.GetCategoryById(1);

            result.Should().BeOfType<OkObjectResult>();
        }

        [Fact]
        public async Task GetCategoryById_NotFound_Returns404()
        {
            _categoryServiceMock.Setup(s => s.GetCategoryById(999)).ReturnsAsync((CategoryDetailDto)null);

            var result = await _controller.GetCategoryById(999);

            result.Should().BeOfType<NotFoundObjectResult>();
        }

        [Fact]
        public async Task DeleteCategory_NotFound_Returns404()
        {
            var response = new CategoryResponseDto { Status = Level.Failed, Code = 404, Message = "Category not found" };
            _categoryServiceMock.Setup(s => s.DeleteCategory(999)).ReturnsAsync(response);

            var result = await _controller.DeleteCategory(999);

            result.Should().BeOfType<NotFoundObjectResult>();
        }

        [Fact]
        public async Task DeleteCategory_HasProducts_ReturnsBadRequest()
        {
            var response = new CategoryResponseDto { Status = Level.Failed, Code = 400, Message = "Cannot delete category with associated products" };
            _categoryServiceMock.Setup(s => s.DeleteCategory(1)).ReturnsAsync(response);

            var result = await _controller.DeleteCategory(1);

            result.Should().BeOfType<BadRequestObjectResult>();
        }
    }
}
