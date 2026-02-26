using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementSystem.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class CouponController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CouponController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // Public: list active, non-expired coupons
        [HttpGet]
        public async Task<IActionResult> GetCoupons([FromQuery] int companyInfoId = 1)
        {
            var result = await _unitOfWork.couponService.GetAll(companyInfoId);
            return Ok(result);
        }

        // Authenticated: validate and calculate coupon discount
        [HttpPost("apply")]
        [Authorize]
        public async Task<IActionResult> ApplyCoupon([FromBody] ApplyCouponRequestDto dto)
        {
            try
            {
                var result = await _unitOfWork.couponService.Apply(dto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // Authenticated: create a new coupon (admin use)
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateCoupon([FromBody] CreateCouponDto dto)
        {
            try
            {
                var result = await _unitOfWork.couponService.Create(dto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
