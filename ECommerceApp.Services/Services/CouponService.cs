using ECommerceApp.Domain.DTO;
using ECommerceApp.Domain.Entities;
using ECommerceApp.Domain.Entities.Order;
using ECommerceApp.Infrastructure;
using ECommerceApp.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ECommerceApp.Service.Services
{
    public class CouponService : ICouponService
    {
        private readonly ApplicationDbContext _context;

        protected CouponService() { }

        public CouponService(ApplicationDbContext context)
        {
            _context = context;
        }

        public virtual async Task<CouponListResponseDto> GetAll(int companyInfoId)
        {
            var now = DateTime.UtcNow;
            var coupons = await _context.Coupons
                .Where(c => c.IsActive
                    && c.CompanyInfoId == companyInfoId
                    && (c.ExpiresAt == null || c.ExpiresAt > now)
                    && (c.UsageLimit == null || c.UsageCount < c.UsageLimit))
                .OrderBy(c => c.Id)
                .ToListAsync();

            return new CouponListResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Coupons retrieved successfully",
                Data = coupons.Select(MapToDto).ToList()
            };
        }

        public virtual async Task<ApplyCouponResponseDto> Apply(ApplyCouponRequestDto dto)
        {
            var now = DateTime.UtcNow;
            var coupon = await _context.Coupons
                .FirstOrDefaultAsync(c =>
                    c.Code == dto.Code.Trim().ToUpper()
                    && c.IsActive
                    && c.CompanyInfoId == dto.CompanyInfoId
                    && (c.ExpiresAt == null || c.ExpiresAt > now)
                    && (c.UsageLimit == null || c.UsageCount < c.UsageLimit));

            if (coupon == null)
                throw new Exception("Invalid or expired coupon code.");

            if (coupon.MinSpend.HasValue && dto.Subtotal < coupon.MinSpend.Value)
                throw new Exception($"Minimum spend of {coupon.MinSpend.Value:F2} is required for this coupon.");

            if (coupon.MaxSpend.HasValue && dto.Subtotal > coupon.MaxSpend.Value)
                throw new Exception($"This coupon is only valid for orders up to {coupon.MaxSpend.Value:F2}.");

            decimal discountAmount;
            if (coupon.DiscountType == "percentage")
                discountAmount = Math.Round(dto.Subtotal * coupon.Amount / 100, 2);
            else
                discountAmount = Math.Min(coupon.Amount, dto.Subtotal);

            return new ApplyCouponResponseDto
            {
                Code = coupon.Code,
                Title = coupon.Title,
                DiscountType = coupon.DiscountType,
                Amount = coupon.Amount,
                DiscountAmount = discountAmount
            };
        }

        public virtual async Task<CouponListResponseDto> Create(CreateCouponDto dto)
        {
            var code = dto.Code.Trim().ToUpper();
            var exists = await _context.Coupons
                .AnyAsync(c => c.Code == code && c.CompanyInfoId == dto.CompanyInfoId);

            if (exists)
                throw new Exception("A coupon with this code already exists.");

            var coupon = new Coupon
            {
                Code = code,
                Title = dto.Title,
                Description = dto.Description,
                DiscountType = dto.DiscountType,
                Amount = dto.Amount,
                MinSpend = dto.MinSpend,
                MaxSpend = dto.MaxSpend,
                ExpiresAt = dto.ExpiresAt,
                UsageLimit = dto.UsageLimit,
                IsActive = true,
                CompanyInfoId = dto.CompanyInfoId,
                CreatedAt = DateTime.UtcNow
            };

            _context.Coupons.Add(coupon);
            await _context.SaveChangesAsync();

            return new CouponListResponseDto
            {
                Status = Level.Success,
                Code = 201,
                Message = "Coupon created successfully",
                Data = new List<CouponListItemDto> { MapToDto(coupon) }
            };
        }

        public virtual async Task<CouponListResponseDto> GetAllAdmin(int companyInfoId)
        {
            var coupons = await _context.Coupons
                .Where(c => c.CompanyInfoId == companyInfoId)
                .OrderByDescending(c => c.CreatedAt)
                .ToListAsync();

            return new CouponListResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Coupons retrieved successfully",
                Data = coupons.Select(MapToDto).ToList()
            };
        }

        public virtual async Task<CouponListResponseDto> GetById(int id)
        {
            var coupon = await _context.Coupons.FindAsync(id);
            if (coupon == null)
                throw new Exception("Coupon not found.");

            return new CouponListResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Coupon retrieved successfully",
                Data = new List<CouponListItemDto> { MapToDto(coupon) }
            };
        }

        public virtual async Task<CouponListResponseDto> Update(int id, UpdateCouponDto dto)
        {
            var coupon = await _context.Coupons.FindAsync(id);
            if (coupon == null)
                throw new Exception("Coupon not found.");

            coupon.Title = dto.Title;
            coupon.Description = dto.Description;
            coupon.DiscountType = dto.DiscountType;
            coupon.Amount = dto.Amount;
            coupon.MinSpend = dto.MinSpend;
            coupon.MaxSpend = dto.MaxSpend;
            coupon.ExpiresAt = dto.ExpiresAt;
            coupon.UsageLimit = dto.UsageLimit;
            coupon.IsActive = dto.IsActive;

            await _context.SaveChangesAsync();

            return new CouponListResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Coupon updated successfully",
                Data = new List<CouponListItemDto> { MapToDto(coupon) }
            };
        }

        public virtual async Task<CouponListResponseDto> UpdateStatus(int id, bool isActive)
        {
            var coupon = await _context.Coupons.FindAsync(id);
            if (coupon == null)
                throw new Exception("Coupon not found.");

            coupon.IsActive = isActive;
            await _context.SaveChangesAsync();

            return new CouponListResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Coupon status updated",
                Data = new List<CouponListItemDto> { MapToDto(coupon) }
            };
        }

        public virtual async Task<CouponListResponseDto> Delete(int id)
        {
            var coupon = await _context.Coupons.FindAsync(id);
            if (coupon == null)
                throw new Exception("Coupon not found.");

            _context.Coupons.Remove(coupon);
            await _context.SaveChangesAsync();

            return new CouponListResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Coupon deleted successfully",
                Data = new List<CouponListItemDto>()
            };
        }

        public virtual async Task<CouponListResponseDto> DeleteAll(List<int> ids)
        {
            var coupons = await _context.Coupons.Where(c => ids.Contains(c.Id)).ToListAsync();
            _context.Coupons.RemoveRange(coupons);
            await _context.SaveChangesAsync();

            return new CouponListResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Coupons deleted successfully",
                Data = new List<CouponListItemDto>()
            };
        }

        private static CouponListItemDto MapToDto(Coupon c) => new CouponListItemDto
        {
            Id = c.Id,
            Code = c.Code,
            Title = c.Title,
            Description = c.Description,
            DiscountType = c.DiscountType,
            Amount = c.Amount,
            MinSpend = c.MinSpend,
            MaxSpend = c.MaxSpend,
            ExpiresAt = c.ExpiresAt,
            UsageLimit = c.UsageLimit,
            UsageCount = c.UsageCount,
            IsActive = c.IsActive,
            CreatedAt = c.CreatedAt
        };
    }
}
