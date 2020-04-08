using Microsoft.EntityFrameworkCore.Migrations;

namespace FileScheduleProject.Migrations
{
    public partial class AddedAnInitialDataSeedToFileTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "File",
                columns: new[] { "FileID", "Category", "FileName", "FilePath" },
                values: new object[] { 1, "HR", "TestFile1", "Path1" });

            migrationBuilder.InsertData(
                table: "File",
                columns: new[] { "FileID", "Category", "FileName", "FilePath" },
                values: new object[] { 2, "Insuarance", "TestFile2", "Path2" });

            migrationBuilder.InsertData(
                table: "File",
                columns: new[] { "FileID", "Category", "FileName", "FilePath" },
                values: new object[] { 3, "Finance", "TestFile3", "Path3" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "File",
                keyColumn: "FileID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "File",
                keyColumn: "FileID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "File",
                keyColumn: "FileID",
                keyValue: 3);
        }
    }
}
