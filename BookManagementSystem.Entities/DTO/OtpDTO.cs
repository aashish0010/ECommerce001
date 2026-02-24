using BookManagementSystem.Domain.Entities;
using System.ComponentModel.DataAnnotations;

namespace BookManagementSystem.Domain.DTO
{
	public class OptResponse : Common
	{
		public string Email { get; set; }
		public string ProcessId { get; set; }
	}
	public class OptValidateRequest
	{
		[Required(ErrorMessage = "Email is required")]
		[EmailAddress(ErrorMessage = "Invalid email format")]
		public string Email { get; set; }

		[Required(ErrorMessage = "OTP is required")]
		public string Otp { get; set; }

		[Required(ErrorMessage = "Process ID is required")]
		public string ProcessId { get; set; }

		[Required(ErrorMessage = "New password is required")]
		[MinLength(6, ErrorMessage = "Password must be at least 6 characters")]
		public string NewPassword { get; set; }
	}

	public class VerifyEmailOtpRequest
	{
		[Required(ErrorMessage = "Email is required")]
		[EmailAddress(ErrorMessage = "Invalid email format")]
		public string Email { get; set; }

		[Required(ErrorMessage = "OTP is required")]
		public string Otp { get; set; }

		[Required(ErrorMessage = "Process ID is required")]
		public string ProcessId { get; set; }
	}
}
