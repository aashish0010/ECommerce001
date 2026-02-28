using BookManagementSystem.Domain.DTO;

namespace BookManagementSystem.Service.Interfaces
{
    public interface ICategoryService
    {
        Task<CategoryResponseDto> GetCategories(int companyInfoId);
        Task<CategoryDetailDto> GetCategoryById(int id);
        Task<CategoryResponseDto> CreateCategory(CreateCategoryRequest request);
        Task<CategoryResponseDto> UpdateCategory(int id, UpdateCategoryRequest request);
        Task<CategoryResponseDto> DeleteCategory(int id);
    }
}
