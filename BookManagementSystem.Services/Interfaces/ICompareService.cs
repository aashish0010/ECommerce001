using BookManagementSystem.Domain.DTO;

namespace BookManagementSystem.Service.Interfaces
{
    public interface ICompareService
    {
        Task<CompareResponseDto> GetUserCompareAsync(string userName);
        Task<bool> AddToCompareAsync(string userName, int productId);
        Task<bool> RemoveFromCompareAsync(string userName, int productId);
    }
}
