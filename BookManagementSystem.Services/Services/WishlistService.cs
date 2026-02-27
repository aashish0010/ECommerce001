using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Infrastructure;
using BookManagementSystem.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BookManagementSystem.Service.Services
{
    public class WishlistService : IWishlistService
    {
        private readonly ApplicationDbContext _context;

        public WishlistService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<WishlistResponseDto> GetUserWishlistAsync(string userName)
        {
            var items = await _context.WishlistItems
                .Where(w => w.UserName == userName)
                .Include(w => w.Product)
                    .ThenInclude(p => p.Category)
                .Include(w => w.Product)
                    .ThenInclude(p => p.Brand)
                .Include(w => w.Product)
                    .ThenInclude(p => p.ProductColors)
                        .ThenInclude(pc => pc.Color)
                .OrderByDescending(w => w.CreatedAt)
                .Select(w => w.Product)
                .ToListAsync();

            return new WishlistResponseDto
            {
                Data = items.Select(ProductService.MapToDto).ToList(),
                Total = items.Count
            };
        }

        public async Task<bool> AddToWishlistAsync(string userName, int productId)
        {
            var exists = await _context.WishlistItems
                .AnyAsync(w => w.UserName == userName && w.ProductId == productId);

            if (exists) return true;

            var productExists = await _context.Products.AnyAsync(p => p.Id == productId);
            if (!productExists) return false;

            _context.WishlistItems.Add(new WishlistItem
            {
                UserName = userName,
                ProductId = productId,
                CreatedAt = DateTime.UtcNow
            });

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> RemoveFromWishlistAsync(string userName, int productId)
        {
            var item = await _context.WishlistItems
                .FirstOrDefaultAsync(w => w.UserName == userName && w.ProductId == productId);

            if (item == null) return false;

            _context.WishlistItems.Remove(item);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
