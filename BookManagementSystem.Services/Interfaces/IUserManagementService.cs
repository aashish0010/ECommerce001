using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities;

namespace BookManagementSystem.Service.Interfaces
{
	public interface IUserManagementService
	{
		Task<Common> Register(RegisterRequest register);
		Task<LoginResponse> Login(LoginRequest login);
		Task<OptResponse> OtpManager(string email);
		Task<OptResponse> SendEmailVerification(string email);
		Task<Common> VerifyEmailOtp(VerifyEmailOtpRequest request);
		Task<Common> UpdatePassword(OptValidateRequest validateRequest);
		Task<Common> ResitPassword(ChangePassword changePassword);
		Task<LoginResponse> ThirdPartyUserManager(ThirdPartyAuth thirdParty);
		Task<UserProfileDto> GetUserProfile(string userName);
		Task<Common> UpdateUserProfile(string userName, UpdateProfileRequest request);
		Task<Common> ChangeUserPassword(string userName, ChangePasswordRequest request);
	}
}
