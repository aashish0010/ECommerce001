using ECommerceApp.Infrastructure;
using System.Security.Claims;

namespace ECommerceApp.Service.Interfaces
{
	public interface ITokenService
	{
		string TokenGenerate(User user, string role);
		string GenerateRefreshToken();
		ClaimsPrincipal GetPrincipalFromExpiredToken(string token);

		string UserName { get; }
		string Email { get; }
		string Role { get; }

	}
}
