using BookManagementSystem.Domain.DTO;

namespace BookManagementSystem.Service.Interfaces
{
    public interface IBrandService
    {
        Task<BrandResponseDto> GetBrands(int companyInfoId);
        Task<BrandDetailDto> GetBrandBySlug(string slug, int companyInfoId);
        Task<BrandResponseDto> CreateBrand(CreateBrandRequest request);
    }
}
