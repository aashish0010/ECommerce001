using BookManagementSystem.Infrastructure;
using BookManagementSystem.Service.Services;

namespace BookManagementSystem.Service.Interfaces
{
	public interface IUnitOfWork
	{
		UserManagementService userManagementService { get; }
		TokenService tokenService { get; }
		EmailManagerService mailService { get; }
        DbHelperService dbHelperService { get; }
		CommonService commonService { get; }
		ProductService productService { get; }
		BrandService brandService { get; }
		ColorService colorService { get; }
		OrderService orderService { get; }
		AddressService addressService { get; }
		CouponService couponService { get; }
		WishlistService wishlistService { get; }
		CompareService compareService { get; }
    }
}
