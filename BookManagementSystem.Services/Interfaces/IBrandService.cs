using BookManagementSystem.Domain.DTO;

namespace BookManagementSystem.Service.Interfaces
{
    public interface IBrandService
    {
        Task<BrandResponseDto> GetBrands(int companyInfoId);
        Task<BrandDetailDto> GetBrandBySlug(string slug, int companyInfoId);
        Task<BrandResponseDto> CreateBrand(CreateBrandRequest request);
        Task<BrandResponseDto> UpdateBrand(int id, UpdateBrandRequest request);
        Task<BrandResponseDto> UpdateBrandStatus(int id, bool status);
        Task<BrandResponseDto> DeleteBrand(int id);
        Task<BrandResponseDto> DeleteAllBrands(List<int> ids);
    }
}
