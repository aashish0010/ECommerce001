using ECommerceApp.Controller;
using ECommerceApp.Domain.DTO;
using ECommerceApp.Service.Interfaces;
using ECommerceApp.Service.Services;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace ECommerceApp.Test
{
    public class AddressControllerTests
    {
        private readonly Mock<IUnitOfWork> _unitOfWorkMock;
        private readonly Mock<AddressService> _addressServiceMock;
        private readonly Mock<TokenService> _tokenServiceMock;
        private readonly AddressController _controller;

        public AddressControllerTests()
        {
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _unitOfWorkMock.DefaultValue = DefaultValue.Mock;
            _controller = new AddressController(_unitOfWorkMock.Object);
            _addressServiceMock = Mock.Get(_unitOfWorkMock.Object.addressService);
            _tokenServiceMock = Mock.Get(_unitOfWorkMock.Object.tokenService);
        }

        [Fact]
        public async Task GetAddresses_ValidUser_ReturnsOk()
        {
            _tokenServiceMock.Setup(t => t.UserName).Returns("9841234567");
            var addresses = new List<AddressResponseDto>
            {
                new AddressResponseDto { Id = 1, Title = "Home", Street = "123 Main St", City = "Kathmandu", IsDefault = true }
            };
            _addressServiceMock.Setup(s => s.GetUserAddressesAsync("9841234567")).ReturnsAsync(addresses);

            var result = await _controller.GetMyAddresses();

            var okResult = result.Should().BeOfType<OkObjectResult>().Subject;
            var data = okResult.Value.Should().BeAssignableTo<List<AddressResponseDto>>().Subject;
            data.Should().HaveCount(1);
        }

        [Fact]
        public async Task GetAddresses_NoToken_ReturnsUnauthorized()
        {
            _tokenServiceMock.Setup(t => t.UserName).Returns(string.Empty);

            var result = await _controller.GetMyAddresses();

            result.Should().BeOfType<UnauthorizedObjectResult>();
        }

        [Fact]
        public async Task CreateAddress_ValidData_ReturnsOk()
        {
            _tokenServiceMock.Setup(t => t.UserName).Returns("9841234567");
            var dto = new CreateAddressDto { Title = "Home", Street = "123 Main St", City = "Kathmandu" };
            var response = new AddressResponseDto { Id = 1, Title = "Home", Street = "123 Main St", City = "Kathmandu" };
            _addressServiceMock.Setup(s => s.CreateAddressAsync("9841234567", dto)).ReturnsAsync(response);

            var result = await _controller.CreateAddress(dto);

            var okResult = result.Should().BeOfType<OkObjectResult>().Subject;
            okResult.Value.Should().BeOfType<AddressResponseDto>();
        }

        [Fact]
        public async Task CreateAddress_MissingTitle_ReturnsBadRequest()
        {
            _tokenServiceMock.Setup(t => t.UserName).Returns("9841234567");
            var dto = new CreateAddressDto { Title = "", Street = "123 Main St" };

            var result = await _controller.CreateAddress(dto);

            result.Should().BeOfType<BadRequestObjectResult>();
        }

        [Fact]
        public async Task DeleteAddress_Exists_ReturnsOk()
        {
            _tokenServiceMock.Setup(t => t.UserName).Returns("9841234567");
            _addressServiceMock.Setup(s => s.DeleteAddressAsync("9841234567", 1)).ReturnsAsync(true);

            var result = await _controller.DeleteAddress(1);

            result.Should().BeOfType<OkObjectResult>();
        }

        [Fact]
        public async Task DeleteAddress_NotFound_ReturnsNotFound()
        {
            _tokenServiceMock.Setup(t => t.UserName).Returns("9841234567");
            _addressServiceMock.Setup(s => s.DeleteAddressAsync("9841234567", 99)).ReturnsAsync(false);

            var result = await _controller.DeleteAddress(99);

            result.Should().BeOfType<NotFoundObjectResult>();
        }
    }
}
