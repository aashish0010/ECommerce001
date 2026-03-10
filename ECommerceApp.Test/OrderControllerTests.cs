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
    public class OrderControllerTests
    {
        private readonly Mock<IUnitOfWork> _unitOfWorkMock;
        private readonly Mock<OrderService> _orderServiceMock;
        private readonly Mock<TokenService> _tokenServiceMock;
        private readonly OrderController _controller;

        public OrderControllerTests()
        {
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _unitOfWorkMock.DefaultValue = DefaultValue.Mock;
            _controller = new OrderController(_unitOfWorkMock.Object);
            _orderServiceMock = Mock.Get(_unitOfWorkMock.Object.orderService);
            _tokenServiceMock = Mock.Get(_unitOfWorkMock.Object.tokenService);
        }

        [Fact]
        public async Task PlaceOrder_ValidData_ReturnsOrder()
        {
            // Arrange
            var request = new PlaceOrderRequestDto
            {
                Products = new List<OrderItemRequestDto>
                {
                    new OrderItemRequestDto { ProductId = 1, Quantity = 2 }
                },
                PaymentMethod = "cod",
                ShippingAddress = new AddressDto
                {
                    Title = "Home",
                    Street = "123 Main St",
                    City = "Kathmandu"
                }
            };

            var expected = new PlaceOrderResponseDto
            {
                OrderNumber = "ORD-20260310-001",
                Status = "pending",
                Total = 199.98m,
                PaymentMethod = "cod"
            };

            _tokenServiceMock.Setup(s => s.UserName).Returns("9841234567");
            _orderServiceMock.Setup(s => s.PlaceOrderAsync(request, "9841234567"))
                .ReturnsAsync(expected);

            // Act
            var result = await _controller.PlaceOrder(request);

            // Assert
            var okResult = result.Should().BeOfType<OkObjectResult>().Subject;
            var response = okResult.Value.Should().BeOfType<PlaceOrderResponseDto>().Subject;
            response.OrderNumber.Should().NotBeNullOrEmpty();
            response.Total.Should().BeGreaterThan(0);
        }

        [Fact]
        public async Task PlaceOrder_EmptyProducts_ReturnsBadRequest()
        {
            // Arrange
            var request = new PlaceOrderRequestDto
            {
                Products = new List<OrderItemRequestDto>(),
                PaymentMethod = "cod"
            };

            _tokenServiceMock.Setup(s => s.UserName).Returns("9841234567");

            // Act
            var result = await _controller.PlaceOrder(request);

            // Assert
            result.Should().BeOfType<BadRequestObjectResult>();
        }

        [Fact]
        public async Task PlaceOrder_NoToken_ReturnsUnauthorized()
        {
            // Arrange
            var request = new PlaceOrderRequestDto
            {
                Products = new List<OrderItemRequestDto>
                {
                    new OrderItemRequestDto { ProductId = 1, Quantity = 1 }
                },
                PaymentMethod = "cod"
            };

            _tokenServiceMock.Setup(s => s.UserName).Returns((string)null!);

            // Act
            var result = await _controller.PlaceOrder(request);

            // Assert
            result.Should().BeOfType<UnauthorizedObjectResult>();
        }

        [Fact]
        public async Task GetMyOrders_ValidUser_ReturnsOrders()
        {
            // Arrange
            var expected = new List<OrderSummaryDto>
            {
                new OrderSummaryDto
                {
                    Id = 1,
                    OrderNumber = "ORD-001",
                    Status = "pending",
                    Total = 500m
                }
            };

            _tokenServiceMock.Setup(s => s.UserName).Returns("9841234567");
            _orderServiceMock.Setup(s => s.GetUserOrdersAsync("9841234567"))
                .ReturnsAsync(expected);

            // Act
            var result = await _controller.GetMyOrders();

            // Assert
            var okResult = result.Should().BeOfType<OkObjectResult>().Subject;
            var response = okResult.Value.Should().BeAssignableTo<List<OrderSummaryDto>>().Subject;
            response.Should().HaveCount(1);
        }
    }
}
