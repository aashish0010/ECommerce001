using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementSystem.Controller
{
    [Route("api/email-config")]
    [ApiController]
    [Authorize]
    public class EmailConfigController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public EmailConfigController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        /// <summary>
        /// Admin: get email configuration.
        /// GET /api/email-config?companyInfoId=1
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetConfig([FromQuery] int companyInfoId = 1)
        {
            try
            {
                var result = await _unitOfWork.emailConfigService.GetConfig(companyInfoId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        /// <summary>
        /// Admin: update email configuration.
        /// PUT /api/email-config/{id}
        /// </summary>
        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateConfig(int id, [FromBody] EmailConfigUpdateDto dto)
        {
            try
            {
                var result = await _unitOfWork.emailConfigService.UpdateConfig(id, dto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
