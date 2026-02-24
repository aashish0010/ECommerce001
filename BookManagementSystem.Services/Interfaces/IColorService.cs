using BookManagementSystem.Domain.DTO;

namespace BookManagementSystem.Service.Interfaces
{
    public interface IColorService
    {
        Task<ColorResponseDto> GetColors(int companyInfoId);
        Task<ColorDetailDto> GetColorBySlug(string slug, int companyInfoId);
        Task<ColorResponseDto> CreateColor(CreateColorRequest request);
    }
}
