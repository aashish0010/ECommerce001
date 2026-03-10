using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ECommerceApp.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddEmailMediaHomeConfigurations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmailConfigurations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CompanyInfoId = table.Column<int>(type: "integer", nullable: false),
                    FromEmail = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    FromName = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    ApiKey = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmailConfigurations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmailConfigurations_CompanyDetails_CompanyInfoId",
                        column: x => x.CompanyInfoId,
                        principalTable: "CompanyDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HomeConfigurations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CompanyInfoId = table.Column<int>(type: "integer", nullable: false),
                    Slider1ImageUrl = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: true),
                    Slider1Link = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true),
                    Slider1LinkType = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: true),
                    Slider2ImageUrl = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: true),
                    Slider2Link = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true),
                    Slider2LinkType = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: true),
                    Offer1ImageUrl = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: true),
                    Offer1Link = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true),
                    Offer1LinkType = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: true),
                    Offer2ImageUrl = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: true),
                    Offer2Link = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true),
                    Offer2LinkType = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HomeConfigurations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HomeConfigurations_CompanyDetails_CompanyInfoId",
                        column: x => x.CompanyInfoId,
                        principalTable: "CompanyDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MediaConfigurations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CompanyInfoId = table.Column<int>(type: "integer", nullable: false),
                    CloudName = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    ApiKey = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    ApiSecret = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MediaConfigurations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MediaConfigurations_CompanyDetails_CompanyInfoId",
                        column: x => x.CompanyInfoId,
                        principalTable: "CompanyDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EmailConfigurations_CompanyInfoId",
                table: "EmailConfigurations",
                column: "CompanyInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_HomeConfigurations_CompanyInfoId",
                table: "HomeConfigurations",
                column: "CompanyInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_MediaConfigurations_CompanyInfoId",
                table: "MediaConfigurations",
                column: "CompanyInfoId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmailConfigurations");

            migrationBuilder.DropTable(
                name: "HomeConfigurations");

            migrationBuilder.DropTable(
                name: "MediaConfigurations");
        }
    }
}
