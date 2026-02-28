using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using StackExchange.Profiling;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace BookManagementSystem.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public AuthController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpPost("register")]
        [EnableRateLimiting("auth")]
        public async Task<IActionResult> Register(RegisterRequest register)
        {
            using (MiniProfiler.Current.Step("Test2"))
            {
                var result = await _unitOfWork.userManagementService.Register(register);
                if (result.Status == Level.Success)
                    return Ok(result);

                return BadRequest(result);
            }
        }

        [HttpPost("login")]
        [EnableRateLimiting("auth")]
        public async Task<IActionResult> Login(LoginRequest login)
        {
            var result = await _unitOfWork.userManagementService.Login(login);
            if (result.Status == Level.Success)
                return Ok(result);
            return BadRequest(result);
        }

        [HttpPost("admin-login")]
        [EnableRateLimiting("auth")]
        public async Task<IActionResult> AdminLogin(LoginRequest login)
        {
            var result = await _unitOfWork.userManagementService.Login(login);
            if (result.Status != Level.Success)
                return BadRequest(result);

            if (result.Role != "Admin")
            {
                result.Code = StatusCodes.Status403Forbidden;
                result.Status = Level.Failed;
                result.Message = "Access denied. Admin role required.";
                result.Token = null;
                result.RefreshToken = null;
                return StatusCode(StatusCodes.Status403Forbidden, result);
            }

            return Ok(result);
        }

        [HttpPost("refresh")]
        [EnableRateLimiting("auth")]
        public async Task<IActionResult> RefreshToken(RefreshTokenRequest request)
        {
            var result = await _unitOfWork.userManagementService.RefreshToken(request);
            if (result.Status == Level.Success)
                return Ok(result);
            return Unauthorized(result);
        }

        [HttpGet("getecho")]
        public IActionResult Test()
        {
            return Ok(new
            {
                Code = 200,
                Message = "I am alive"
            });
        }

        [HttpGet("sendopt")]
        [EnableRateLimiting("auth")]
        public async Task<IActionResult> SendOpt(string email)
        {
            if (string.IsNullOrWhiteSpace(email) || !new EmailAddressAttribute().IsValid(email))
                return BadRequest(new { message = "A valid email address is required" });

            var result = await _unitOfWork.userManagementService.OtpManager(email);
            if (result.Status == Level.Success)
                return Ok(result);
            return BadRequest(result);
        }

        [HttpGet("sendemailotp")]
        [EnableRateLimiting("auth")]
        public async Task<IActionResult> SendEmailOtp(string email)
        {
            if (string.IsNullOrWhiteSpace(email) || !new EmailAddressAttribute().IsValid(email))
                return BadRequest(new { message = "A valid email address is required" });

            var result = await _unitOfWork.userManagementService.SendEmailVerification(email);
            if (result.Status == Level.Success)
                return Ok(result);
            return BadRequest(result);
        }

        [HttpPost("verifyemail")]
        public async Task<IActionResult> VerifyEmail(VerifyEmailOtpRequest request)
        {
            var result = await _unitOfWork.userManagementService.VerifyEmailOtp(request);
            if (result.Status == Level.Success)
                return Ok(result);
            return BadRequest(result);
        }

        [HttpPost("verifyopt")]
        public async Task<IActionResult> VerifyOpt(OptValidateRequest request)
        {
            var result = await _unitOfWork.userManagementService.UpdatePassword(request);
            if (result.Status == Level.Success)
                return Ok(result);
            return BadRequest(result);
        }

        [HttpPost("changepassword")]
        public async Task<IActionResult> ChangePassword(ChangePassword password)
        {
            var result = await _unitOfWork.userManagementService.ResitPassword(password);
            if (result.Status == Level.Success)
                return Ok(result);
            return BadRequest(result);
        }
        [HttpGet("/thirdparty-login")]
        public IActionResult ThirdPartyLogin(string provider, string companyCode)
        {
            var properties = new AuthenticationProperties
            {
                RedirectUri = provider == "Facebook"
                    ? Url.Action(nameof(FacebookCallback))
                    : Url.Action(nameof(GoogleCallback))
            };

            properties.Items.Add("CompanyCode", companyCode);

            string scheme = provider == "Facebook"
                ? FacebookDefaults.AuthenticationScheme
                : GoogleDefaults.AuthenticationScheme;

            return Challenge(properties, scheme);
        }
        [HttpGet("/google-callback")]
        public async Task<IActionResult> GoogleCallback()
        {

            ThirdPartyAuth auth = new ThirdPartyAuth();
            var result = await HttpContext.AuthenticateAsync("Google");
            if (!result.Succeeded)
            {
                return Unauthorized();
            }
            var companyCode = result.Properties.Items.ContainsKey("CompanyCode")
                ? result.Properties.Items["CompanyCode"]
                : null;

            var companyDetail = await _unitOfWork.commonService.FindCompanyByCompanyCode(companyCode);

            auth.CompanyInfo = companyDetail.CompanyDetailRes.CompanyDetail;
            auth.Username = result.Principal.FindFirstValue("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name");
            auth.CreateDate = DateTime.UtcNow;
            auth.UserId = result.Principal.FindFirstValue(ClaimTypes.NameIdentifier);
            auth.UserEmail = result.Principal.FindFirstValue("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress");
            auth.Provider = "Google";
            return Ok(await _unitOfWork.userManagementService.ThirdPartyUserManager(auth));
        }

        [HttpGet("/facebook-callback")]
        public async Task<IActionResult> FacebookCallback()
        {
            ThirdPartyAuth auth = new ThirdPartyAuth();

            var result = await HttpContext.AuthenticateAsync("Facebook");
            if (!result.Succeeded)
            {
                return Unauthorized();
            }
            var companyCode = result.Properties.Items.ContainsKey("CompanyCode")
               ? result.Properties.Items["CompanyCode"]
               : null;

            var companyDetail = await _unitOfWork.commonService.FindCompanyByCompanyCode(companyCode);

            auth.CompanyInfo = companyDetail.CompanyDetailRes.CompanyDetail;

            auth.Username = result.Principal.FindFirstValue("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name");
            auth.CreateDate = DateTime.UtcNow;
            auth.UserId = result.Principal.FindFirstValue(ClaimTypes.NameIdentifier);
            auth.Provider = "Facebook";
            auth.UserEmail = auth.Username;
            return Ok(await _unitOfWork.userManagementService.ThirdPartyUserManager(auth));
        }

        [HttpPost]
        public async Task<IActionResult> UserEdit()
        {
            return Ok();
        }

        [HttpGet("companydetails")]
        public async Task<IActionResult> GetCompanyInfo(string companyCode)
        {
            return Ok(await _unitOfWork.commonService.FindCompanyByCompanyCode(companyCode));
        }
    }
}