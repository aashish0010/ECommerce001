using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace BookManagementSystem.Domain.DTO
{
    public class AdminUserDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("email")]
        public string Email { get; set; }

        [JsonPropertyName("phone")]
        public string Phone { get; set; }

        [JsonPropertyName("country_code")]
        public int CountryCode { get; set; } = 977;

        [JsonPropertyName("status")]
        public bool Status { get; set; }

        [JsonPropertyName("role_name")]
        public string RoleName { get; set; }

        [JsonPropertyName("role")]
        public AdminRoleDto Role { get; set; }

        [JsonPropertyName("created_at")]
        public string CreatedAt { get; set; }
    }

    public class AdminRoleDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }
    }

    public class AdminUserListResponse
    {
        [JsonPropertyName("data")]
        public List<AdminUserDto> Data { get; set; }

        [JsonPropertyName("total")]
        public int Total { get; set; }
    }

    public class CreateAdminUserRequest
    {
        [Required(ErrorMessage = "Name is required")]
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        [JsonPropertyName("email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Phone is required")]
        [JsonPropertyName("phone")]
        public string Phone { get; set; }

        [JsonPropertyName("password")]
        public string Password { get; set; }

        [JsonPropertyName("send_password_setup_email")]
        public bool SendPasswordSetupEmail { get; set; } = true;

        [JsonPropertyName("role_id")]
        public int RoleId { get; set; } = 2;
    }

    public class UpdateAdminUserRequest
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("email")]
        [EmailAddress]
        public string Email { get; set; }

        [JsonPropertyName("phone")]
        public string Phone { get; set; }

        [JsonPropertyName("status")]
        public bool? Status { get; set; }
    }
}
