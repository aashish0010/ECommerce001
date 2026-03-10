using ECommerceApp.Domain.Entities;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using NSwag.Generation.Processors.Security;
using System.Text;

namespace ECommerceApp.Configuration
{
	public static class ServiceHelper
	{
		public static IServiceCollection ServiceHelpers(this IServiceCollection services, IConfiguration configuration)
		{


			services.AddMemoryCache();
			services.AddMiniProfiler(options =>
			{
				options.RouteBasePath = "/profiler";
				options.SqlFormatter = new StackExchange.Profiling.SqlFormatters.InlineFormatter();
options.IgnoredPaths.Add("/css");
				options.IgnoredPaths.Add("/js");
				options.IgnoredPaths.Add("/index.html");
				options.TrackConnectionOpenClose = false;
				options.ShouldProfile = request => ECommerceApp.Service.Function.Helper.ShouldProfile(request);
			}).AddEntityFramework();
			services.AddControllers();


			services.AddAuthentication(options =>
			{
				options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
				options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;

			}).AddJwtBearer(o =>
			{
				o.TokenValidationParameters = new TokenValidationParameters
				{
					ValidateIssuer = true,
					ValidateAudience = true,
					ValidateLifetime = true,
					ValidateIssuerSigningKey = true,
					ValidIssuer = configuration["Jwt:Issuer"],
					ValidAudience = configuration["Jwt:Issuer"],
					IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"])),
					RoleClaimType = "Role"
				};
			});

			var authBuilder = services.AddAuthentication().AddCookie();

			var fbAppId = configuration["FacebookAuthencation:AppId"];
			if (!string.IsNullOrEmpty(fbAppId))
			{
				authBuilder.AddFacebook(facebookOptions =>
				{
					facebookOptions.AppId = fbAppId;
					facebookOptions.AppSecret = configuration["FacebookAuthencation:AppSecret"];
				});
			}

			var googleClientId = configuration["GoogleAuthencation:ClientId"];
			if (!string.IsNullOrEmpty(googleClientId))
			{
				authBuilder.AddGoogle(googleOptions =>
				{
					googleOptions.ClientId = googleClientId;
					googleOptions.ClientSecret = configuration["GoogleAuthencation:ClientSecret"];
				});
			}


			services.Configure<MailSettings>(configuration.GetSection("MailSettings"));
			services.Configure<CloudinarySettings>(configuration.GetSection("Cloudinary"));
			services.AddControllers();
			services.AddOpenApiDocument(document =>
			{
				document.AddSecurity("JWT", Enumerable.Empty<string>(), new NSwag.OpenApiSecurityScheme
				{
					Type = NSwag.OpenApiSecuritySchemeType.ApiKey,
					Name = "Authorization",
					In = NSwag.OpenApiSecurityApiKeyLocation.Header,
					Description = "Type into the TextBox : Bearer {your JWT Token}"
				});
				document.OperationProcessors.Add(
					new AspNetCoreOperationSecurityScopeProcessor("JWT"));
			});


			return services;
		}
	}
}
