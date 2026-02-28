using BookManagementSystem.Service.Interfaces;
using BookManagementSystem.Service.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http.Headers;


namespace BookManagementSystem.Service
{
    public static class ServiceCollectionServices
    {
        public static IServiceCollection ServiceServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<ICommonService, CommonService>();
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<AdminUserService>();
            services.AddHttpContextAccessor();

            services.AddHttpClient("Resend", client =>
            {
                client.BaseAddress = new Uri("https://api.resend.com/");
                client.DefaultRequestHeaders.Authorization =
                    new AuthenticationHeaderValue("Bearer", configuration["MailSettings:ApiKey"]);
            });

            return services;
        }
    }
}
