namespace BookManagementSystem.Domain.Entities.Order
{
    public class UserAddress
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Title { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Pincode { get; set; }
        public string Phone { get; set; }
        public string CountryCode { get; set; }
        public string StateId { get; set; }
        public string StateName { get; set; }
        public string CountryId { get; set; }
        public string CountryName { get; set; }
        public bool IsDefault { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
