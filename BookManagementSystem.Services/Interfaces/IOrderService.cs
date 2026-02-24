using BookManagementSystem.Domain.DTO;

namespace BookManagementSystem.Service.Interfaces
{
    public interface IOrderService
    {
        Task<PlaceOrderResponseDto> PlaceOrderAsync(PlaceOrderRequestDto dto, string userName);
        Task<List<OrderSummaryDto>> GetUserOrdersAsync(string userName);
    }
}
