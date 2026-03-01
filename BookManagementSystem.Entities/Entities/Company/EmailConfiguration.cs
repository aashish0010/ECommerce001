using System.ComponentModel.DataAnnotations;

namespace BookManagementSystem.Domain.Entities.Company
{
    public class EmailConfiguration
    {
        [Key]
        public int Id { get; set; }
        public int CompanyInfoId { get; set; }
        public CompanyDetail CompanyDetail { get; set; }
        public string FromEmail { get; set; } = string.Empty;
        public string FromName { get; set; } = string.Empty;
        public string ApiKey { get; set; } = string.Empty;
    }
}
