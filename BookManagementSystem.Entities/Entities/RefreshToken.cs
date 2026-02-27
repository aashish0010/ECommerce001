namespace BookManagementSystem.Domain.Entities
{
	public class RefreshToken
	{
		public Guid Id { get; set; } = Guid.NewGuid();
		public string UserName { get; set; }
		public string Token { get; set; }
		public DateTime ExpiresAt { get; set; }
		public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
		public DateTime? RevokedAt { get; set; }
		public string ReplacedByToken { get; set; }
		public bool IsRevoked => RevokedAt != null;
		public bool IsExpired => DateTime.UtcNow >= ExpiresAt;
		public bool IsActive => !IsRevoked && !IsExpired;
	}
}
