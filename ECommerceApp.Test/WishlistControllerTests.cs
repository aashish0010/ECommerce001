using ECommerceApp.Controller;
using ECommerceApp.Domain.DTO;
using ECommerceApp.Service.Interfaces;
using ECommerceApp.Service.Services;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace ECommerceApp.Test
{
    public class WishlistControllerTests
    {
        private readonly Mock<IUnitOfWork> _unitOfWorkMock;
        private readonly Mock<WishlistService> _wishlistServiceMock;
        private readonly Mock<TokenService> _tokenServiceMock;
        private readonly WishlistController _controller;

        public WishlistControllerTests()
        {
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _unitOfWorkMock.DefaultValue = DefaultValue.Mock;
            _controller = new WishlistController(_unitOfWorkMock.Object);
            _wishlistServiceMock = Mock.Get(_unitOfWorkMock.Object.wishlistService);
            _tokenServiceMock = Mock.Get(_unitOfWorkMock.Object.tokenService);
        }

        [Fact]
        public async Task GetWishlist_ValidUser_ReturnsOk()
        {
            _tokenServiceMock.Setup(t => t.UserName).Returns("9841234567");
            var response = new WishlistResponseDto { Data = new List<ProductDetailDto>(), Total = 0 };
            _wishlistServiceMock.Setup(s => s.GetUserWishlistAsync("9841234567")).ReturnsAsync(response);

            var result = await _controller.GetWishlist();

            result.Should().BeOfType<OkObjectResult>();
        }

        [Fact]
        public async Task GetWishlist_NoToken_ReturnsUnauthorized()
        {
            _tokenServiceMock.Setup(t => t.UserName).Returns(string.Empty);

            var result = await _controller.GetWishlist();

            result.Should().BeOfType<UnauthorizedObjectResult>();
        }

        [Fact]
        public async Task AddToWishlist_ValidProduct_ReturnsOk()
        {
            _tokenServiceMock.Setup(t => t.UserName).Returns("9841234567");
            _wishlistServiceMock.Setup(s => s.AddToWishlistAsync("9841234567", 1)).ReturnsAsync(true);

            var result = await _controller.AddToWishlist(new AddToWishlistDto { ProductId = 1 });

            result.Should().BeOfType<OkObjectResult>();
        }

        [Fact]
        public async Task AddToWishlist_ProductNotFound_ReturnsNotFound()
        {
            _tokenServiceMock.Setup(t => t.UserName).Returns("9841234567");
            _wishlistServiceMock.Setup(s => s.AddToWishlistAsync("9841234567", 999)).ReturnsAsync(false);

            var result = await _controller.AddToWishlist(new AddToWishlistDto { ProductId = 999 });

            result.Should().BeOfType<NotFoundObjectResult>();
        }

        [Fact]
        public async Task RemoveFromWishlist_Exists_ReturnsOk()
        {
            _tokenServiceMock.Setup(t => t.UserName).Returns("9841234567");
            _wishlistServiceMock.Setup(s => s.RemoveFromWishlistAsync("9841234567", 1)).ReturnsAsync(true);

            var result = await _controller.RemoveFromWishlist(1);

            result.Should().BeOfType<OkObjectResult>();
        }

        [Fact]
        public async Task RemoveFromWishlist_NotFound_ReturnsNotFound()
        {
            _tokenServiceMock.Setup(t => t.UserName).Returns("9841234567");
            _wishlistServiceMock.Setup(s => s.RemoveFromWishlistAsync("9841234567", 99)).ReturnsAsync(false);

            var result = await _controller.RemoveFromWishlist(99);

            result.Should().BeOfType<NotFoundObjectResult>();
        }
    }
}
