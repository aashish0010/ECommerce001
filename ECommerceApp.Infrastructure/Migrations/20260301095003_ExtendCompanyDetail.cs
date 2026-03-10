using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ECommerceApp.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class ExtendCompanyDetail : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CompanyAddress",
                table: "CompanyDetails",
                type: "character varying(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CopyrightContent",
                table: "CompanyDetails",
                type: "character varying(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DefaultCurrency",
                table: "CompanyDetails",
                type: "character varying(20)",
                maxLength: 20,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FaviconUrl",
                table: "CompanyDetails",
                type: "character varying(1000)",
                maxLength: 1000,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FooterLogoUrl",
                table: "CompanyDetails",
                type: "character varying(1000)",
                maxLength: 1000,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HeaderLogoUrl",
                table: "CompanyDetails",
                type: "character varying(1000)",
                maxLength: 1000,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SiteTagline",
                table: "CompanyDetails",
                type: "character varying(300)",
                maxLength: 300,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SiteUrl",
                table: "CompanyDetails",
                type: "character varying(500)",
                maxLength: 500,
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompanyAddress",
                table: "CompanyDetails");

            migrationBuilder.DropColumn(
                name: "CopyrightContent",
                table: "CompanyDetails");

            migrationBuilder.DropColumn(
                name: "DefaultCurrency",
                table: "CompanyDetails");

            migrationBuilder.DropColumn(
                name: "FaviconUrl",
                table: "CompanyDetails");

            migrationBuilder.DropColumn(
                name: "FooterLogoUrl",
                table: "CompanyDetails");

            migrationBuilder.DropColumn(
                name: "HeaderLogoUrl",
                table: "CompanyDetails");

            migrationBuilder.DropColumn(
                name: "SiteTagline",
                table: "CompanyDetails");

            migrationBuilder.DropColumn(
                name: "SiteUrl",
                table: "CompanyDetails");
        }
    }
}
