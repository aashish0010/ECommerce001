using ECommerceApp.Domain.DTO;
using ECommerceApp.Domain.Entities.Company;

namespace ECommerceApp.Service.Interfaces
{
    public interface ICommonService
    {
        Task<CompanyDetailResponseDto> FindCompanyByCompanyCode(string companyCode);
    }
}
