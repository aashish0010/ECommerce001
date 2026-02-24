using BookManagementSystem.Domain.DTO;

namespace BookManagementSystem.Service.Interfaces
{
    public interface IAddressService
    {
        Task<List<AddressResponseDto>> GetUserAddressesAsync(string userName);
        Task<AddressResponseDto> CreateAddressAsync(string userName, CreateAddressDto dto);
    }
}
