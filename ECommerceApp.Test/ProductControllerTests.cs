using ECommerceApp.Controller;
using ECommerceApp.Domain.DTO;
using ECommerceApp.Domain.Entities;
using ECommerceApp.Service.Interfaces;
using ECommerceApp.Service.Services;
using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace ECommerceApp.Test
{
    public class ProductControllerTests
    {
        private readonly Mock<IUnitOfWork> _unitOfWorkMock;
        private readonly Mock<ProductService> _productServiceMock;
        private readonly ProductController _controller;

        public ProductControllerTests()
        {
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _unitOfWorkMock.DefaultValue = DefaultValue.Mock;
            _controller = new ProductController(_unitOfWorkMock.Object);
            _productServiceMock = Mock.Get(_unitOfWorkMock.Object.productService);
        }

        [Fact]
        public async Task GetProducts_ReturnsOkWithPagedList()
        {
            // Arrange
            var expected = new ProductResponseDto
            {
                Status = Level.Success,
                Code = StatusCodes.Status200OK,
                Products = new List<ProductDetailDto>
                {
                    new ProductDetailDto { Id = 1, Name = "Test Product" }
                },
                Total = 1,
                Page = 1,
                PageSize = 20
            };

            _productServiceMock.Setup(s => s.GetProducts(
                It.IsAny<int>(), It.IsAny<int?>(), It.IsAny<string>(), It.IsAny<string>(),
                It.IsAny<int>(), It.IsAny<int>(), It.IsAny<int?>(), It.IsAny<string>(),
                It.IsAny<string>(), It.IsAny<string>(), It.IsAny<bool>()))
                .ReturnsAsync(expected);

            // Act
            var result = await _controller.GetProducts();

            // Assert
            var okResult = result.Should().BeOfType<OkObjectResult>().Subject;
            var response = okResult.Value.Should().BeOfType<ProductResponseDto>().Subject;
            response.Products.Should().HaveCount(1);
            response.Total.Should().Be(1);
        }

        [Fact]
        public async Task GetProductBySlug_ValidSlug_ReturnsProduct()
        {
            // Arrange
            var expected = new SingleProductResponseDto
            {
                Status = Level.Success,
                Code = StatusCodes.Status200OK,
                Product = new ProductDetailDto { Id = 1, Name = "Test Product", Slug = "test-product" }
            };

            _productServiceMock.Setup(s => s.GetProductBySlug("test-product"))
                .ReturnsAsync(expected);

            // Act
            var result = await _controller.GetProductBySlug("test-product");

            // Assert
            var okResult = result.Should().BeOfType<OkObjectResult>().Subject;
            var response = okResult.Value.Should().BeOfType<SingleProductResponseDto>().Subject;
            response.Product.Should().NotBeNull();
            response.Product.Slug.Should().Be("test-product");
        }

        [Fact]
        public async Task GetProductBySlug_InvalidSlug_ReturnsNotFound()
        {
            // Arrange
            var expected = new SingleProductResponseDto
            {
                Status = Level.Failed,
                Code = 404,
                Message = "Product not found"
            };

            _productServiceMock.Setup(s => s.GetProductBySlug("nonexistent"))
                .ReturnsAsync(expected);

            // Act
            var result = await _controller.GetProductBySlug("nonexistent");

            // Assert
            result.Should().BeOfType<NotFoundObjectResult>();
        }

        [Fact]
        public async Task CreateProduct_ValidData_ReturnsCreatedProduct()
        {
            // Arrange
            var request = new CreateProductRequest
            {
                Name = "New Product",
                Price = 99.99m,
                Quantity = 10,
                CategoryId = 1,
                CompanyInfoId = 1
            };

            var expected = new SingleProductResponseDto
            {
                Status = Level.Success,
                Code = StatusCodes.Status200OK,
                Product = new ProductDetailDto { Id = 1, Name = "New Product", Slug = "new-product" }
            };

            _productServiceMock.Setup(s => s.CreateProduct(request))
                .ReturnsAsync(expected);

            // Act
            var result = await _controller.CreateProduct(request);

            // Assert (CreateProduct returns CreatedAtAction)
            var createdResult = result.Should().BeOfType<CreatedAtActionResult>().Subject;
            var response = createdResult.Value.Should().BeOfType<SingleProductResponseDto>().Subject;
            response.Product.Should().NotBeNull();
            response.Product.Name.Should().Be("New Product");
        }
    }
}
