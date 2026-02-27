using BookManagementSystem.Domain.DTO;

namespace BookManagementSystem.Service.Interfaces
{
    public interface IWishlistService
    {
        Task<WishlistResponseDto> GetUserWishlistAsync(string userName);
        Task<bool> AddToWishlistAsync(string userName, int productId);
        Task<bool> RemoveFromWishlistAsync(string userName, int productId);
    }
}
