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

        // Admin: list all coupons including inactive/expired
        [HttpGet("admin")]
        [Authorize]
        public async Task<IActionResult> GetCouponsAdmin([FromQuery] int companyInfoId = 1)
        {
            var result = await _unitOfWork.couponService.GetAllAdmin(companyInfoId);
            return Ok(result);
        }

        // Admin: get single coupon by id
        [HttpGet("{id:int}")]
        [Authorize]
        public async Task<IActionResult> GetCouponById(int id)
        {
            try
            {
                var result = await _unitOfWork.couponService.GetById(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        // Admin: create a new coupon
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

        // Admin: update coupon
        [HttpPut("{id:int}")]
        [Authorize]
        public async Task<IActionResult> UpdateCoupon(int id, [FromBody] UpdateCouponDto dto)
        {
            try
            {
                var result = await _unitOfWork.couponService.Update(id, dto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // Admin: toggle coupon active status
        [HttpPatch("{id:int}/status")]
        [Authorize]
        public async Task<IActionResult> UpdateCouponStatus(int id, [FromBody] CouponStatusDto dto)
        {
            try
            {
                var result = await _unitOfWork.couponService.UpdateStatus(id, dto.Status);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // Admin: delete coupon
        [HttpDelete("{id:int}")]
        [Authorize]
        public async Task<IActionResult> DeleteCoupon(int id)
        {
            try
            {
                var result = await _unitOfWork.couponService.Delete(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // Admin: delete multiple coupons
        [HttpPost("delete-all")]
        [Authorize]
        public async Task<IActionResult> DeleteAllCoupons([FromBody] CouponDeleteAllDto dto)
        {
            try
            {
                var result = await _unitOfWork.couponService.DeleteAll(dto.Ids);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }

    public class CouponStatusDto
    {
        public bool Status { get; set; }
    }

    public class CouponDeleteAllDto
    {
        public List<int> Ids { get; set; }
    }
}
