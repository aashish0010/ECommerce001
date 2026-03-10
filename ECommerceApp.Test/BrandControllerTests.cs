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
    public class BrandControllerTests
    {
        private readonly Mock<IUnitOfWork> _unitOfWorkMock;
        private readonly Mock<BrandService> _brandServiceMock;
        private readonly BrandController _controller;

        public BrandControllerTests()
        {
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _unitOfWorkMock.DefaultValue = DefaultValue.Mock;
            _controller = new BrandController(_unitOfWorkMock.Object);
            _brandServiceMock = Mock.Get(_unitOfWorkMock.Object.brandService);
        }

        [Fact]
        public async Task GetBrands_ReturnsOkWithBrands()
        {
            var response = new BrandResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Brands = new List<BrandDetailDto>
                {
                    new BrandDetailDto { Id = 1, Name = "Nike", Slug = "nike" },
                    new BrandDetailDto { Id = 2, Name = "Adidas", Slug = "adidas" }
                }
            };
            _brandServiceMock.Setup(s => s.GetBrands(1)).ReturnsAsync(response);

            var result = await _controller.GetBrands(1);

            var okResult = result.Should().BeOfType<OkObjectResult>().Subject;
            var data = okResult.Value.Should().BeOfType<BrandResponseDto>().Subject;
            data.Brands.Should().HaveCount(2);
        }

        [Fact]
        public async Task GetBrandBySlug_Valid_ReturnsOk()
        {
            var brand = new BrandDetailDto { Id = 1, Name = "Nike", Slug = "nike" };
            _brandServiceMock.Setup(s => s.GetBrandBySlug("nike", 1)).ReturnsAsync(brand);

            var result = await _controller.GetBrandBySlug("nike", 1);

            result.Should().BeOfType<OkObjectResult>();
        }

        [Fact]
        public async Task GetBrandBySlug_NotFound_Returns404()
        {
            _brandServiceMock.Setup(s => s.GetBrandBySlug("nonexistent", 1)).ReturnsAsync((BrandDetailDto)null);

            var result = await _controller.GetBrandBySlug("nonexistent", 1);

            result.Should().BeOfType<NotFoundObjectResult>();
        }

        [Fact]
        public async Task CreateBrand_ValidData_ReturnsCreated()
        {
            var request = new CreateBrandRequest { Name = "New Brand", CompanyInfoId = 1 };
            var response = new BrandResponseDto
            {
                Status = Level.Success,
                Code = 201,
                Brands = new List<BrandDetailDto> { new BrandDetailDto { Id = 3, Name = "New Brand", Slug = "new-brand" } }
            };
            _brandServiceMock.Setup(s => s.CreateBrand(request)).ReturnsAsync(response);

            var result = await _controller.CreateBrand(request);

            result.Should().BeOfType<CreatedAtActionResult>();
        }
    }
}
