using Asp.Versioning;
using ECommerceApp.Configuration;
using ECommerceApp.Domain;
using ECommerceApp.Infrastructure;
using ECommerceApp.Service;
using ECommerceApp.Validators;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.AspNetCore.StaticFiles;
using Serilog;
using System.Threading.RateLimiting;
using DataSeeder = ECommerceApp.Infrastructure.DataSeeder;

var builder = WebApplication.CreateBuilder(args);

var logger = new LoggerConfiguration()
		.ReadFrom.Configuration(builder.Configuration)
		.Enrich.FromLogContext()
		.CreateLogger();
builder.Logging.ClearProviders();
builder.Logging.AddSerilog(logger);
builder.Host.UseSerilog(logger);


builder.Services.ServiceHelpers(builder.Configuration);

// JwtSettings validation
var jwtSection = builder.Configuration.GetSection("Jwt");
builder.Services.Configure<JwtSettings>(jwtSection);
var jwtKey = jwtSection["Key"];
if (string.IsNullOrWhiteSpace(jwtKey) || jwtKey.Length < 32 || jwtKey == "CHANGE_THIS_TO_A_SECURE_KEY_AT_LEAST_32_CHARS_LONG")
{
    if (!builder.Environment.IsDevelopment())
        throw new InvalidOperationException("JWT Key must be set via environment variable and be at least 32 characters. Set Jwt__Key or Jwt:Key.");
}

// FluentValidation
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddValidatorsFromAssemblyContaining<RegisterRequestValidator>();

// API Versioning
builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
});

builder.Services.AddAutoMapper(typeof(Program));

// CORS: read allowed origins from configuration
var allowedOrigins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>() ?? Array.Empty<string>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policy =>
        policy.WithOrigins(allowedOrigins)
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials());
});

builder.Services.InfrastructureServices(builder.Configuration);
builder.Services.ServiceServices(builder.Configuration);

builder.Services.AddAuthorization();

builder.Services.AddRateLimiter(options =>
{
    options.AddSlidingWindowLimiter("auth", config =>
    {
        config.PermitLimit = 5;
        config.Window = TimeSpan.FromMinutes(1);
        config.SegmentsPerWindow = 6;
        config.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;
        config.QueueLimit = 0;
    });
    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
});



var app = builder.Build();

// Seed database (runs migrations + inserts seed data)
await DataSeeder.SeedAsync(app.Services);

// Security headers
app.Use(async (context, next) =>
{
    context.Response.Headers.Append("X-Content-Type-Options", "nosniff");
    context.Response.Headers.Append("X-Frame-Options", "DENY");
    context.Response.Headers.Append("X-XSS-Protection", "1; mode=block");
    context.Response.Headers.Append("Referrer-Policy", "no-referrer");
    await next();
});

app.UseOpenApi();
app.UseCors("CorsPolicy");


app.UseSerilogRequestLogging();
app.UseMiniProfiler();

app.UseSwaggerUi(x =>
	{
		x.Path = "/swagger";
	});

app.UseStaticFiles();

app.UseRateLimiter();
app.UseMiddleware<ErrorHandlerMiddleWare>();
app.UseAuthentication();
app.UseAuthorization();

if (app.Environment.IsDevelopment())
    app.UseHttpsRedirection();
app.MapControllers();

app.MapFallback("/api/{**slug}", () => Results.NotFound(new { message = "API endpoint not found" }));

// Admin SPA: serve static files directly, fall back to index.html for SPA routes
var contentTypeProvider = new FileExtensionContentTypeProvider();
app.Map("/admin/{**path}", async (HttpContext ctx, IWebHostEnvironment env) =>
{
    var adminRoot = Path.Combine(env.WebRootPath, "admin");
    var path = ctx.Request.RouteValues["path"] as string;

    // Try to serve the requested file directly
    if (!string.IsNullOrEmpty(path))
    {
        var filePath = Path.Combine(adminRoot, path.Replace('/', Path.DirectorySeparatorChar));
        var fullPath = Path.GetFullPath(filePath);

        // Security: ensure path stays within admin directory
        if (fullPath.StartsWith(adminRoot, StringComparison.OrdinalIgnoreCase) && File.Exists(fullPath))
        {
            if (!contentTypeProvider.TryGetContentType(fullPath, out var contentType))
                contentType = "application/octet-stream";
            ctx.Response.ContentType = contentType;
            await ctx.Response.SendFileAsync(fullPath);
            return;
        }
    }

    // SPA fallback: serve index.html for unmatched routes
    ctx.Response.ContentType = "text/html";
    await ctx.Response.SendFileAsync(Path.Combine(adminRoot, "index.html"));
});

if (!app.Environment.IsDevelopment())
{
    // Main ecommerce SPA: all other non-API routes → wwwroot/index.html
    app.MapFallbackToFile("index.html");
}

app.Run();
