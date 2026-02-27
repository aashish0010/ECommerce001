using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities.Order;
using BookManagementSystem.Infrastructure;
using BookManagementSystem.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BookManagementSystem.Service.Services
{
    public class AddressService : IAddressService
    {
        private readonly ApplicationDbContext _context;

        public AddressService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<AddressResponseDto>> GetUserAddressesAsync(string userName)
        {
            return await _context.UserAddresses
                .Where(a => a.UserName == userName)
                .OrderByDescending(a => a.IsDefault)
                .ThenByDescending(a => a.CreatedAt)
                .Select(a => new AddressResponseDto
                {
                    Id = a.Id,
                    Title = a.Title,
                    Street = a.Street,
                    City = a.City,
                    Pincode = a.Pincode,
                    Phone = a.Phone,
                    CountryCode = a.CountryCode,
                    StateId = a.StateId,
                    StateName = a.StateName,
                    CountryId = a.CountryId,
                    CountryName = a.CountryName,
                    IsDefault = a.IsDefault
                })
                .ToListAsync();
        }

        public async Task<AddressResponseDto> CreateAddressAsync(string userName, CreateAddressDto dto)
        {
            if (dto.IsDefault)
            {
                var existing = await _context.UserAddresses
                    .Where(a => a.UserName == userName && a.IsDefault)
                    .ToListAsync();
                existing.ForEach(a => a.IsDefault = false);
            }

            var address = new UserAddress
            {
                UserName = userName,
                Title = dto.Title,
                Street = dto.Street,
                City = dto.City,
                Pincode = dto.Pincode,
                Phone = dto.Phone,
                CountryCode = dto.CountryCode,
                StateId = dto.StateId,
                StateName = dto.StateName,
                CountryId = dto.CountryId,
                CountryName = dto.CountryName,
                IsDefault = dto.IsDefault,
                CreatedAt = DateTime.UtcNow
            };

            _context.UserAddresses.Add(address);
            await _context.SaveChangesAsync();

            return new AddressResponseDto
            {
                Id = address.Id,
                Title = address.Title,
                Street = address.Street,
                City = address.City,
                Pincode = address.Pincode,
                Phone = address.Phone,
                CountryCode = address.CountryCode,
                StateId = address.StateId,
                StateName = address.StateName,
                CountryId = address.CountryId,
                CountryName = address.CountryName,
                IsDefault = address.IsDefault
            };
        }

        public async Task<AddressResponseDto> UpdateAddressAsync(string userName, int id, CreateAddressDto dto)
        {
            var address = await _context.UserAddresses
                .FirstOrDefaultAsync(a => a.Id == id && a.UserName == userName);

            if (address == null) return null;

            if (dto.IsDefault)
            {
                var others = await _context.UserAddresses
                    .Where(a => a.UserName == userName && a.IsDefault && a.Id != id)
                    .ToListAsync();
                others.ForEach(a => a.IsDefault = false);
            }

            address.Title = dto.Title;
            address.Street = dto.Street;
            address.City = dto.City;
            address.Pincode = dto.Pincode;
            address.Phone = dto.Phone;
            address.CountryCode = dto.CountryCode;
            address.StateId = dto.StateId;
            address.StateName = dto.StateName;
            address.CountryId = dto.CountryId;
            address.CountryName = dto.CountryName;
            address.IsDefault = dto.IsDefault;

            await _context.SaveChangesAsync();

            return new AddressResponseDto
            {
                Id = address.Id,
                Title = address.Title,
                Street = address.Street,
                City = address.City,
                Pincode = address.Pincode,
                Phone = address.Phone,
                CountryCode = address.CountryCode,
                StateId = address.StateId,
                StateName = address.StateName,
                CountryId = address.CountryId,
                CountryName = address.CountryName,
                IsDefault = address.IsDefault
            };
        }

        public async Task<bool> DeleteAddressAsync(string userName, int id)
        {
            var address = await _context.UserAddresses
                .FirstOrDefaultAsync(a => a.Id == id && a.UserName == userName);

            if (address == null) return false;

            _context.UserAddresses.Remove(address);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
