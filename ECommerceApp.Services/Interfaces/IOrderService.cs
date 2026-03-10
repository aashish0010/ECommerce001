using ECommerceApp.Domain.DTO;

namespace ECommerceApp.Service.Interfaces
{
    public interface IOrderService
    {
        Task<PlaceOrderResponseDto> PlaceOrderAsync(PlaceOrderRequestDto dto, string userName);
        Task<List<OrderSummaryDto>> GetUserOrdersAsync(string userName);
    }
}
