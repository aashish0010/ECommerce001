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
    public class AuthServiceTests
    {
        private readonly Mock<IUnitOfWork> _unitOfWorkMock;
        private readonly Mock<UserManagementService> _userServiceMock;
        private readonly AuthController _controller;

        public AuthServiceTests()
        {
            _unitOfWorkMock = new Mock<IUnitOfWork>();
            _unitOfWorkMock.DefaultValue = DefaultValue.Mock;
            _controller = new AuthController(_unitOfWorkMock.Object);
            _userServiceMock = Mock.Get(_unitOfWorkMock.Object.userManagementService);
        }

        [Fact]
        public async Task Register_ValidData_ReturnsOkWithSuccess()
        {
            // Arrange
            var request = new RegisterRequest
            {
                UserName = "9841234567",
                FirstName = "John",
                LastName = "Doe",
                Email = "john@example.com",
                Password = "Password@123",
                CompanyCode = "WOW001"
            };

            var expected = new Common
            {
                Code = StatusCodes.Status200OK,
                Status = Level.Success,
                Message = "Register Successfully"
            };

            _userServiceMock.Setup(s => s.Register(request)).ReturnsAsync(expected);

            // Act
            var result = await _controller.Register(request);

            // Assert
            var okResult = result.Should().BeOfType<OkObjectResult>().Subject;
            var response = okResult.Value.Should().BeOfType<Common>().Subject;
            response.Status.Should().Be(Level.Success);
        }

        [Fact]
        public async Task Register_DuplicateUser_ReturnsBadRequest()
        {
            // Arrange
            var request = new RegisterRequest
            {
                UserName = "9841234567",
                FirstName = "John",
                LastName = "Doe",
                Email = "john@example.com",
                Password = "Password@123",
                CompanyCode = "WOW001"
            };

            var expected = new Common
            {
                Code = StatusCodes.Status400BadRequest,
                Status = Level.Failed,
                Message = "User already exists"
            };

            _userServiceMock.Setup(s => s.Register(request)).ReturnsAsync(expected);

            // Act
            var result = await _controller.Register(request);

            // Assert
            result.Should().BeOfType<BadRequestObjectResult>();
        }

        [Fact]
        public async Task Login_ValidCredentials_ReturnsOkWithToken()
        {
            // Arrange
            var request = new LoginRequest
            {
                UserName = "9841234567",
                Password = "Password@123",
                CompanyCode = "WOW001"
            };

            var expected = new LoginResponse
            {
                Status = Level.Success,
                Code = StatusCodes.Status200OK,
                Message = "Login successful",
                Token = "jwt-token-here",
                RefreshToken = "refresh-token-here",
                Role = "Customer"
            };

            _userServiceMock.Setup(s => s.Login(request)).ReturnsAsync(expected);

            // Act
            var result = await _controller.Login(request);

            // Assert
            var okResult = result.Should().BeOfType<OkObjectResult>().Subject;
            var response = okResult.Value.Should().BeOfType<LoginResponse>().Subject;
            response.Token.Should().NotBeNullOrEmpty();
            response.Status.Should().Be(Level.Success);
        }

        [Fact]
        public async Task Login_InvalidPassword_ReturnsBadRequest()
        {
            // Arrange
            var request = new LoginRequest
            {
                UserName = "9841234567",
                Password = "WrongPassword",
                CompanyCode = "WOW001"
            };

            var expected = new LoginResponse
            {
                Status = Level.Failed,
                Code = StatusCodes.Status400BadRequest,
                Message = "Invalid password"
            };

            _userServiceMock.Setup(s => s.Login(request)).ReturnsAsync(expected);

            // Act
            var result = await _controller.Login(request);

            // Assert
            result.Should().BeOfType<BadRequestObjectResult>();
        }
    }
}
