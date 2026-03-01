using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookManagementSystem.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddMinOrderAmountAndTaxRate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "MinOrderAmount",
                table: "CompanyDetails",
                type: "numeric",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "MinOrderFreeShipping",
                table: "CompanyDetails",
                type: "numeric",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "TaxRate",
                table: "CompanyDetails",
                type: "numeric",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MinOrderAmount",
                table: "CompanyDetails");

            migrationBuilder.DropColumn(
                name: "MinOrderFreeShipping",
                table: "CompanyDetails");

            migrationBuilder.DropColumn(
                name: "TaxRate",
                table: "CompanyDetails");
        }
    }
}
