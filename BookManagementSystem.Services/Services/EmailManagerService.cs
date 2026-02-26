using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Service.Interfaces;
using Microsoft.Extensions.Options;
using System.Net.Http.Json;

namespace BookManagementSystem.Service.Services
{
	public class EmailManagerService : IEmailManagerService
	{
		private readonly MailSettings _mailSettings;
		private readonly IHttpClientFactory _httpClientFactory;

		public EmailManagerService(IOptions<MailSettings> mail, IHttpClientFactory httpClientFactory)
		{
			_mailSettings = mail.Value;
			_httpClientFactory = httpClientFactory;
		}

		public async Task SendEmail(MailRequest mailRequest)
		{
			var client = _httpClientFactory.CreateClient("Resend");
			var payload = new
			{
				from = $"{_mailSettings.DisplayName} <{_mailSettings.Mail}>",
				to = new[] { mailRequest.ToEmail },
				subject = mailRequest.Subject,
				html = mailRequest.Body
			};
			var response = await client.PostAsJsonAsync("emails", payload);
			response.EnsureSuccessStatusCode();
		}
	}
}
