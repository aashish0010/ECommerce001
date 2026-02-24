using BookManagementSystem.Configuration;
using BookManagementSystem.Infrastructure;
using BookManagementSystem.Service;
using Microsoft.AspNetCore.RateLimiting;
using Serilog;
using System.Threading.RateLimiting;

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
app.UseOpenApi();
app.UseCors("AllowAllOrigins");


app.UseSerilogRequestLogging();
app.UseMiniProfiler();

app.UseSwaggerUi3(x =>
	{
		x.Path = "/swagger";
	});

app.UseStaticFiles();

app.UseRateLimiter();
app.UseMiddleware<ErrorHandlerMiddleWare>();
app.UseAuthentication();
app.UseAuthorization();

app.UseHttpsRedirection();
app.MapControllers();

app.MapFallback("/api/{**slug}", () => Results.NotFound(new { message = "API endpoint not found" }));

if (!app.Environment.IsDevelopment())
{
    app.MapFallbackToFile("index.csr.html");
}

app.Run();
