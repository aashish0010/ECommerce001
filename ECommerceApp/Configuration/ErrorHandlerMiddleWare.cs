using FluentValidation;
using System.Text.Json;

namespace ECommerceApp.Configuration
{
	public class ErrorHandlerMiddleWare
	{
		private readonly RequestDelegate _requestDelegate;
		private readonly ILogger<ErrorHandlerMiddleWare> _logger;

		public ErrorHandlerMiddleWare(RequestDelegate request, ILogger<ErrorHandlerMiddleWare> logger)
		{
			_requestDelegate = request;
			_logger = logger;
		}

		public async Task InvokeAsync(HttpContext context)
		{
			try
			{
				await _requestDelegate(context);
			}
			catch (Exception ex)
			{
				_logger.LogError(ex, "Unhandled exception");
				await HandleExceptionAsync(context, ex);
			}
		}

		private static async Task HandleExceptionAsync(HttpContext context, Exception exception)
		{
			context.Response.ContentType = "application/problem+json";

			var (statusCode, title) = exception switch
			{
				KeyNotFoundException => (StatusCodes.Status404NotFound, "Resource not found"),
				UnauthorizedAccessException => (StatusCodes.Status401Unauthorized, "Unauthorized"),
				ValidationException => (StatusCodes.Status400BadRequest, "Validation failed"),
				ArgumentException => (StatusCodes.Status400BadRequest, "Invalid request"),
				_ => (StatusCodes.Status500InternalServerError, "An error occurred")
			};

			context.Response.StatusCode = statusCode;

			var problemDetails = new
			{
				type = $"https://tools.ietf.org/html/rfc9110#section-15.5.{statusCode - 399}",
				title,
				status = statusCode,
				detail = statusCode == 500 ? "An internal server error occurred." : exception.Message,
				traceId = context.TraceIdentifier,
				errors = exception is ValidationException validationEx
					? validationEx.Errors.Select(e => e.ErrorMessage).ToArray()
					: null
			};

			var json = JsonSerializer.Serialize(problemDetails, new JsonSerializerOptions
			{
				PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
				DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull
			});

			await context.Response.WriteAsync(json);
		}
	}
}
