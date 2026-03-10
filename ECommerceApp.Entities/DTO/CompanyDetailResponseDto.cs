using ECommerceApp.Domain.Entities;
using ECommerceApp.Domain.Entities.Company;

namespace ECommerceApp.Domain.DTO
{
    public class CompanyDetailResponseDto : Common
    {
        public CompanyDetailResponseDto()
        {
            CompanyDetailRes = new CompanyDetailRes();
        }
        public CompanyDetailRes CompanyDetailRes { get; set; }
    }
    public class CompanyDetailRes
    {
        public CompanyDetailRes()
        {
            CompanyDetail =new CompanyDetail();
            CompanyServices = new List<CompanyService>();
            CompanySocialInfos = new List<CompanySocialInfo>();
        }
        public CompanyDetail CompanyDetail { get; set; }
        public List<CompanyService> CompanyServices { get; set; }
        public List<CompanySocialInfo> CompanySocialInfos { get; set; }
    }
}
