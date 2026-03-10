using Asp.Versioning;
using ECommerceApp.Domain.DTO;
using ECommerceApp.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceApp.Controller
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/media-config")]
    [ApiController]
    [Authorize]
    public class MediaConfigController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public MediaConfigController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        /// <summary>
        /// Admin: get media (Cloudinary) configuration.
        /// GET /api/media-config?companyInfoId=1
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetConfig([FromQuery] int companyInfoId = 1)
        {
            try
            {
                var result = await _unitOfWork.mediaConfigService.GetConfig(companyInfoId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        /// <summary>
        /// Admin: update media (Cloudinary) configuration.
        /// PUT /api/media-config/{id}
        /// </summary>
        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateConfig(int id, [FromBody] MediaConfigUpdateDto dto)
        {
            try
            {
                var result = await _unitOfWork.mediaConfigService.UpdateConfig(id, dto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
