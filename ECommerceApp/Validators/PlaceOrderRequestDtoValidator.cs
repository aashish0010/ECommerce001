using ECommerceApp.Domain.DTO;
using FluentValidation;

namespace ECommerceApp.Validators
{
    public class PlaceOrderRequestDtoValidator : AbstractValidator<PlaceOrderRequestDto>
    {
        public PlaceOrderRequestDtoValidator()
        {
            RuleFor(x => x.Products)
                .NotEmpty().WithMessage("At least one product is required");

            RuleFor(x => x.PaymentMethod)
                .NotEmpty().WithMessage("Payment method is required");

            RuleFor(x => x.ShippingAddress)
                .NotNull().WithMessage("Shipping address is required");
        }
    }
}
