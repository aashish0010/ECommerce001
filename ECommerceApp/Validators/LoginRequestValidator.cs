using ECommerceApp.Domain.DTO;
using FluentValidation;

namespace ECommerceApp.Validators
{
    public class LoginRequestValidator : AbstractValidator<LoginRequest>
    {
        public LoginRequestValidator()
        {
            RuleFor(x => x.UserName)
                .NotEmpty().WithMessage("Username is required");

            RuleFor(x => x.Password)
                .NotEmpty().WithMessage("Password is required");

            RuleFor(x => x.CompanyCode)
                .NotEmpty().WithMessage("Company code is required");
        }
    }
}
