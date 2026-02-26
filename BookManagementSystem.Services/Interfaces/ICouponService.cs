using BookManagementSystem.Domain.DTO;

namespace BookManagementSystem.Service.Interfaces
{
    public interface ICouponService
    {
        Task<CouponListResponseDto> GetAll(int companyInfoId);
        Task<ApplyCouponResponseDto> Apply(ApplyCouponRequestDto dto);
        Task<CouponListResponseDto> Create(CreateCouponDto dto);
    }
}
