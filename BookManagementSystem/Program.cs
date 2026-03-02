using BookManagementSystem.Configuration;
using BookManagementSystem.Infrastructure;
using BookManagementSystem.Service;
using Microsoft.AspNetCore.RateLimiting;
using Serilog;
using System.Threading.RateLimiting;
using DataSeeder = BookManagementSystem.Infrastructure.DataSeeder;

var builder = WebApplication.CreateBuilder(args);

var logger = new LoggerConfiguration()
		.ReadFrom.Configuration(builder.Configuration)
		.Enrich.FromLogContext()
		.CreateLogger();
builder.Logging.ClearProviders();
builder.Logging.AddSerilog(logger);
builder.Host.UseSerilog(logger);


builder.Services.ServiceHelpers(builder.Configuration);


builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        policyBuilder => policyBuilder.AllowAnyHeader()
            .AllowAnyMethod()
            .AllowAnyOrigin()
            //.AllowCredentials()
            .SetIsOriginAllowed(_ => true)
    );
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

// Debug: log admin static files at startup
var webRoot = app.Environment.WebRootPath;
var adminDir = Path.Combine(webRoot, "admin");
if (Directory.Exists(adminDir))
{
    var jsFiles = Directory.GetFiles(adminDir, "*.js").Length;
    var cssFiles = Directory.GetFiles(adminDir, "*.css").Length;
    var allFiles = Directory.GetFiles(adminDir, "*", SearchOption.AllDirectories).Length;
    Log.Information("wwwroot/admin: {JsCount} JS, {CssCount} CSS, {TotalCount} total files", jsFiles, cssFiles, allFiles);
}
else
{
    Log.Warning("wwwroot/admin directory does NOT exist! WebRootPath={WebRoot}", webRoot);
}

app.UseOpenApi();
app.UseCors("AllowAllOrigins");


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

// Diagnostic: list files in wwwroot/admin to debug static file issues
app.MapGet("/api/debug/admin-files", (IWebHostEnvironment env) =>
{
    var adminPath = Path.Combine(env.WebRootPath, "admin");
    if (!Directory.Exists(adminPath))
        return Results.Ok(new { exists = false, webRootPath = env.WebRootPath });

    var files = Directory.GetFiles(adminPath, "*", SearchOption.TopDirectoryOnly)
        .Select(f => Path.GetFileName(f))
        .OrderBy(f => f)
        .ToList();
    var dirs = Directory.GetDirectories(adminPath)
        .Select(d => Path.GetFileName(d))
        .ToList();
    return Results.Ok(new { exists = true, webRootPath = env.WebRootPath, fileCount = files.Count, directories = dirs, files = files.Take(50) });
});

// Admin SPA: /admin and /admin/** → serve wwwroot/admin/index.html
app.MapFallback("/admin", async ctx =>
{
    var env = ctx.RequestServices.GetRequiredService<IWebHostEnvironment>();
    ctx.Response.ContentType = "text/html";
    await ctx.Response.SendFileAsync(
        Path.Combine(env.WebRootPath, "admin", "index.html"));
});
app.MapFallback("/admin/{**slug}", async ctx =>
{
    var env = ctx.RequestServices.GetRequiredService<IWebHostEnvironment>();
    ctx.Response.ContentType = "text/html";
    await ctx.Response.SendFileAsync(
        Path.Combine(env.WebRootPath, "admin", "index.html"));
});

if (!app.Environment.IsDevelopment())
{
    // Main ecommerce SPA: all other non-API routes → wwwroot/index.html
    app.MapFallbackToFile("index.html");
}

app.Run();
