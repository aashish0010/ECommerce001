using System.ComponentModel.DataAnnotations;

namespace ECommerceApp.Domain.Entities.Company
{
    public class MediaConfiguration
    {
        [Key]
        public int Id { get; set; }
        public int CompanyInfoId { get; set; }
        public CompanyDetail CompanyDetail { get; set; }
        public string CloudName { get; set; } = string.Empty;
        public string ApiKey { get; set; } = string.Empty;
        public string ApiSecret { get; set; } = string.Empty;
    }
}
