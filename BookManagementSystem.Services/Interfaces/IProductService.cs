using BookManagementSystem.Domain.DTO;

namespace BookManagementSystem.Service.Interfaces
{
    public interface IProductService
    {
        Task<ProductResponseDto> GetProducts(int companyInfoId, int? categoryId, string categorySlug, string search, int page, int pageSize, int? brandId = null, string brandSlug = null, string colorSlugs = null);
        Task<SingleProductResponseDto> GetProductBySlug(string slug);
        Task<CategoryResponseDto> GetCategories(int companyInfoId);
        Task<SingleProductResponseDto> CreateProduct(CreateProductRequest request);
        Task<SingleProductResponseDto> UpdateProduct(int id, UpdateProductRequest request);
        Task<SingleProductResponseDto> UpdateProductStatus(int id, bool status);
        Task<SingleProductResponseDto> DeleteProduct(int id);
        Task<ProductResponseDto> DeleteAllProducts(List<int> ids);
        Task<CategoryResponseDto> SeedCategories(int companyInfoId);
    }
}
