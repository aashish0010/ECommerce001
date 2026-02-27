using BookManagementSystem.Domain.DTO;

namespace BookManagementSystem.Service.Interfaces
{
    public interface IAddressService
    {
        Task<List<AddressResponseDto>> GetUserAddressesAsync(string userName);
        Task<AddressResponseDto> CreateAddressAsync(string userName, CreateAddressDto dto);
        Task<AddressResponseDto> UpdateAddressAsync(string userName, int id, CreateAddressDto dto);
        Task<bool> DeleteAddressAsync(string userName, int id);
    }
}
