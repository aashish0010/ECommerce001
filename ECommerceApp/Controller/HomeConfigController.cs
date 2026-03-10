using Asp.Versioning;
using ECommerceApp.Domain.DTO;
using ECommerceApp.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceApp.Controller
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/home-config")]
    [ApiController]
    public class HomeConfigController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public HomeConfigController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        /// <summary>
        /// Public: get home banner configuration (used by ecommerce frontend).
        /// GET /api/home-config?companyInfoId=1
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetConfig([FromQuery] int companyInfoId = 1)
        {
            try
            {
                var result = await _unitOfWork.homeConfigService.GetConfig(companyInfoId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        /// <summary>
        /// Admin: update home banner configuration.
        /// PUT /api/home-config/{id}
        /// </summary>
        [HttpPut("{id:int}")]
        [Authorize]
        public async Task<IActionResult> UpdateConfig(int id, [FromBody] HomeConfigUpdateDto dto)
        {
            try
            {
                var result = await _unitOfWork.homeConfigService.UpdateConfig(id, dto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
