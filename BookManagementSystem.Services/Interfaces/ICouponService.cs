using BookManagementSystem.Domain.DTO;

namespace BookManagementSystem.Service.Interfaces
{
    public interface ICouponService
    {
        Task<CouponListResponseDto> GetAll(int companyInfoId);
        Task<CouponListResponseDto> GetAllAdmin(int companyInfoId);
        Task<CouponListResponseDto> GetById(int id);
        Task<ApplyCouponResponseDto> Apply(ApplyCouponRequestDto dto);
        Task<CouponListResponseDto> Create(CreateCouponDto dto);
        Task<CouponListResponseDto> Update(int id, UpdateCouponDto dto);
        Task<CouponListResponseDto> UpdateStatus(int id, bool isActive);
        Task<CouponListResponseDto> Delete(int id);
        Task<CouponListResponseDto> DeleteAll(List<int> ids);
    }
}
