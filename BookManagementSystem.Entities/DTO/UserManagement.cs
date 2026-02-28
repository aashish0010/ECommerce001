using BookManagementSystem.Domain.Entities;
using System.ComponentModel.DataAnnotations;

namespace BookManagementSystem.Domain.DTO
{
	public class LoginRequest
	{
		[Required(ErrorMessage = "Username is required")]
		public string UserName { get; set; }

		[Required(ErrorMessage = "Password is required")]
		public string Password { get; set; }

		[Required(ErrorMessage = "Company code is required")]
		public string CompanyCode { get; set; }
	}
	public class RegisterRequest
	{
		[Required(ErrorMessage = "Username is required")]
		[MaxLength(50, ErrorMessage = "Username cannot exceed 50 characters")]
		public string UserName { get; set; }

		[Required(ErrorMessage = "First name is required")]
		[MaxLength(100, ErrorMessage = "First name cannot exceed 100 characters")]
		public string FirstName { get; set; }

		[MaxLength(100, ErrorMessage = "Middle name cannot exceed 100 characters")]
		public string MiddleName { get; set; }

		[MaxLength(100, ErrorMessage = "Last name cannot exceed 100 characters")]
		public string LastName { get; set; }

		[Required(ErrorMessage = "Password is required")]
		[MinLength(6, ErrorMessage = "Password must be at least 6 characters")]
		public string Password { get; set; }

		[Required(ErrorMessage = "Email is required")]
		[EmailAddress(ErrorMessage = "Invalid email format")]
		public string Email { get; set; }

		[Required(ErrorMessage = "Phone number is required")]
		[RegularExpression(@"^\+?[0-9]{7,15}$", ErrorMessage = "Invalid phone number")]
		public string PhoneNumber { get; set; }

		[Required(ErrorMessage = "Company code is required")]
		public string CompanyCode { get; set; }
	}
	public class LoginResponse : Common
	{
		public string UserName { get; set; }
		public string Token { get; set; }
		public string RefreshToken { get; set; }
		public string Role { get; set; }
	}

	public class RefreshTokenRequest
	{
		[Required(ErrorMessage = "Access token is required")]
		public string AccessToken { get; set; }

		[Required(ErrorMessage = "Refresh token is required")]
		public string RefreshToken { get; set; }
	}

	public class UserProfileDto
	{
		public string UserName { get; set; }
		public string FirstName { get; set; }
		public string MiddleName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }
		public string PhoneNumber { get; set; }
		public string Role { get; set; }
		public DateTime Created { get; set; }
	}

	public class UpdateProfileRequest
	{
		[MaxLength(100, ErrorMessage = "First name cannot exceed 100 characters")]
		public string FirstName { get; set; }

		[MaxLength(100, ErrorMessage = "Middle name cannot exceed 100 characters")]
		public string MiddleName { get; set; }

		[MaxLength(100, ErrorMessage = "Last name cannot exceed 100 characters")]
		public string LastName { get; set; }

		[RegularExpression(@"^\+?[0-9]{7,15}$", ErrorMessage = "Invalid phone number")]
		public string PhoneNumber { get; set; }
	}

	public class ChangePasswordRequest
	{
		[Required(ErrorMessage = "Current password is required")]
		public string CurrentPassword { get; set; }

		[Required(ErrorMessage = "New password is required")]
		[MinLength(6, ErrorMessage = "Password must be at least 6 characters")]
		public string NewPassword { get; set; }

		[Required(ErrorMessage = "Confirm password is required")]
		public string ConfirmPassword { get; set; }
	}

}
