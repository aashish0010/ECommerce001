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
    public class CouponControllerTests
    {
        private readonly Mock<IUnitOfWork> _unitOfWorkMock;
        private readonly Mock<CouponService> _couponServiceMock;
        private readonly CouponController _controller;

        public CouponControllerTests()
        {
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _unitOfWorkMock.DefaultValue = DefaultValue.Mock;
            _controller = new CouponController(_unitOfWorkMock.Object);
            _couponServiceMock = Mock.Get(_unitOfWorkMock.Object.couponService);
        }

        [Fact]
        public async Task GetCoupons_ReturnsActiveCoupons()
        {
            // Arrange
            var expected = new CouponListResponseDto
            {
                Status = Level.Success,
                Code = StatusCodes.Status200OK
            };

            _couponServiceMock.Setup(s => s.GetAll(1)).ReturnsAsync(expected);

            // Act
            var result = await _controller.GetCoupons(1);

            // Assert
            var okResult = result.Should().BeOfType<OkObjectResult>().Subject;
            var response = okResult.Value.Should().BeOfType<CouponListResponseDto>().Subject;
            response.Status.Should().Be(Level.Success);
        }

        [Fact]
        public async Task ApplyCoupon_ValidCode_ReturnsDiscount()
        {
            // Arrange
            var request = new ApplyCouponRequestDto
            {
                Code = "WELCOME10",
                Subtotal = 1000,
                CompanyInfoId = 1
            };

            var expected = new ApplyCouponResponseDto
            {
                Code = "WELCOME10",
                DiscountType = "percentage",
                Amount = 10,
                DiscountAmount = 100
            };

            _couponServiceMock.Setup(s => s.Apply(request)).ReturnsAsync(expected);

            // Act
            var result = await _controller.ApplyCoupon(request);

            // Assert
            var okResult = result.Should().BeOfType<OkObjectResult>().Subject;
            var response = okResult.Value.Should().BeOfType<ApplyCouponResponseDto>().Subject;
            response.DiscountAmount.Should().Be(100);
        }

        [Fact]
        public async Task ApplyCoupon_ExpiredCode_ReturnsBadRequest()
        {
            // Arrange
            var request = new ApplyCouponRequestDto
            {
                Code = "EXPIRED",
                Subtotal = 1000,
                CompanyInfoId = 1
            };

            _couponServiceMock.Setup(s => s.Apply(request))
                .ThrowsAsync(new Exception("Coupon has expired"));

            // Act
            var result = await _controller.ApplyCoupon(request);

            // Assert
            result.Should().BeOfType<BadRequestObjectResult>();
        }
    }
}
