using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookManagementSystem.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CompanyController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        /// <summary>
        /// Admin: get full company config including new branding fields + social links.
        /// GET /api/company?companyInfoId=1
        /// </summary>
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetCompany([FromQuery] int companyInfoId = 1)
        {
            try
            {
                var result = await _unitOfWork.companyAdminService.GetCompany(companyInfoId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        /// <summary>
        /// Admin: update company details and branding fields.
        /// PUT /api/company/{id}
        /// </summary>
        [HttpPut("{id:int}")]
        [Authorize]
        public async Task<IActionResult> UpdateCompany(int id, [FromBody] CompanyUpdateDto dto)
        {
            try
            {
                var result = await _unitOfWork.companyAdminService.UpdateCompany(id, dto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        /// <summary>
        /// Admin: replace all social links for the company (full upsert).
        /// PUT /api/company/{id}/social-links
        /// </summary>
        [HttpPut("{id:int}/social-links")]
        [Authorize]
        public async Task<IActionResult> UpdateSocialLinks(int id, [FromBody] UpsertSocialLinksDto dto)
        {
            try
            {
                var result = await _unitOfWork.companyAdminService.UpsertSocialLinks(id, dto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
