using ECommerceApp.Domain.DTO;
using ECommerceApp.Infrastructure;
using ECommerceApp.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ECommerceApp.Service.Services
{
    public class CommonService : ICommonService
    {
        private readonly ApplicationDbContext _context;
        public CommonService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<CompanyDetailResponseDto> FindCompanyByCompanyCode(string companyCode)
        {
            CompanyDetailResponseDto companyDetailResponseDto = new CompanyDetailResponseDto();
            var info = await _context.CompanyDetails.FirstOrDefaultAsync(x => x.CompanyCode == companyCode);
            if (info is not null)
            {
                companyDetailResponseDto.Code = 200;
                companyDetailResponseDto.Message = "Successfully Fetch Company Details";
                companyDetailResponseDto.CompanyDetailRes.CompanyDetail = info;
                companyDetailResponseDto.CompanyDetailRes.CompanySocialInfos = (await _context.CompanySocialInfos.Where(x => x.CompanyInfoId == info.Id).ToListAsync());
                companyDetailResponseDto.CompanyDetailRes.CompanyServices = (await _context.CompanyServices.Where(x => x.CompanyInfoId == info.Id).ToListAsync());

            }
            return companyDetailResponseDto;
        }
    }
}
