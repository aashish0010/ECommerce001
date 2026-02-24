using System.ComponentModel.DataAnnotations;

namespace BookManagementSystem.Domain.DTO
{
    public class ChangePassword
    {
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Old password is required")]
        public string OldPassword { get; set; }

        [Required(ErrorMessage = "New password is required")]
        [MinLength(6, ErrorMessage = "Password must be at least 6 characters")]
        public string NewPassword { get; set; }

        public string Otp { get; set; }

        [Required(ErrorMessage = "Process ID is required")]
        public string ProcessId { get; set; }
    }
}
