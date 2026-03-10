using ECommerceApp.Domain.Entities;

namespace ECommerceApp.Service.Interfaces
{
    public interface IEmailManagerService
    {
        Task SendEmail(MailRequest mailRequest);
    }
}
