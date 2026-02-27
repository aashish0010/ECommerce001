using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Infrastructure;
using BookManagementSystem.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BookManagementSystem.Service.Services
{
    public class CompareService : ICompareService
    {
        private readonly ApplicationDbContext _context;

        public CompareService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<CompareResponseDto> GetUserCompareAsync(string userName)
        {
            var items = await _context.CompareItems
                .Where(c => c.UserName == userName)
                .Include(c => c.Product)
                    .ThenInclude(p => p.Category)
                .Include(c => c.Product)
                    .ThenInclude(p => p.Brand)
                .Include(c => c.Product)
                    .ThenInclude(p => p.ProductColors)
                        .ThenInclude(pc => pc.Color)
                .OrderByDescending(c => c.CreatedAt)
                .Select(c => c.Product)
                .ToListAsync();

            return new CompareResponseDto
            {
                Data = items.Select(ProductService.MapToDto).ToList(),
                Total = items.Count
            };
        }

        public async Task<bool> AddToCompareAsync(string userName, int productId)
        {
            var exists = await _context.CompareItems
                .AnyAsync(c => c.UserName == userName && c.ProductId == productId);

            if (exists) return true;

            var productExists = await _context.Products.AnyAsync(p => p.Id == productId);
            if (!productExists) return false;

            _context.CompareItems.Add(new CompareItem
            {
                UserName = userName,
                ProductId = productId,
                CreatedAt = DateTime.UtcNow
            });

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> RemoveFromCompareAsync(string userName, int productId)
        {
            var item = await _context.CompareItems
                .FirstOrDefaultAsync(c => c.UserName == userName && c.ProductId == productId);

            if (item == null) return false;

            _context.CompareItems.Remove(item);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
