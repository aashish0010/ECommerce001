using ECommerceApp.Domain.Entities;
using ECommerceApp.Infrastructure;
using ECommerceApp.Service.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Net.Http.Headers;
using System.Net.Http.Json;

namespace ECommerceApp.Service.Services
{
	public class EmailManagerService : IEmailManagerService
	{
		private readonly MailSettings _mailSettings;
		private readonly IHttpClientFactory _httpClientFactory;
		private readonly ApplicationDbContext _context;

		public EmailManagerService(IOptions<MailSettings> mail, IHttpClientFactory httpClientFactory, ApplicationDbContext context)
		{
			_mailSettings = mail.Value;
			_httpClientFactory = httpClientFactory;
			_context = context;
		}

		public async Task SendEmail(MailRequest mailRequest)
		{
			string fromEmail, fromName, apiKey;

			// Try DB config first; fall back to appsettings if no DB record or empty API key
			var dbConfig = await _context.EmailConfigurations.FirstOrDefaultAsync();
			if (dbConfig != null && !string.IsNullOrEmpty(dbConfig.ApiKey))
			{
				fromEmail = dbConfig.FromEmail;
				fromName = dbConfig.FromName;
				apiKey = dbConfig.ApiKey;
			}
			else
			{
				fromEmail = _mailSettings.Mail;
				fromName = _mailSettings.DisplayName;
				apiKey = _mailSettings.ApiKey ?? string.Empty;
			}

			var client = _httpClientFactory.CreateClient();
			client.BaseAddress = new Uri("https://api.resend.com/");
			client.DefaultRequestHeaders.Authorization =
				new AuthenticationHeaderValue("Bearer", apiKey);

			var payload = new
			{
				from = $"{fromName} <{fromEmail}>",
				to = new[] { mailRequest.ToEmail },
				subject = mailRequest.Subject,
				html = mailRequest.Body
			};
			var response = await client.PostAsJsonAsync("emails", payload);
			response.EnsureSuccessStatusCode();
		}
	}
}
