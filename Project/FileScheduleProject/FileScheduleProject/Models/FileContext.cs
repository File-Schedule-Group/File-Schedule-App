using Microsoft.EntityFrameworkCore;

namespace FileScheduleProject.Models
{
    public class FileContext : DbContext
    {
        public FileContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Report> Report { get; set; }
        public DbSet<File> File { get; set; }
        public DbSet<Configuration> Configuration { get; set; }
        

        //seed data
        // https://code-maze.com/net-core-web-api-ef-core-code-first/
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Employee>().HasData(new Employee
            //{
            //    EmployeeId = 1,
            //    FirstName = "Uncle",
            //    LastName = "Bob",
            //    Email = "uncle.bob@gmail.com",
            //    DateOfBirth = new DateTime(1979, 04, 25),
            //    PhoneNumber = "999-888-7777"

            //}, new Employee
            //{
            //    EmployeeId = 2,
            //    FirstName = "Jan",
            //    LastName = "Kirsten",
            //    Email = "jan.kirsten@gmail.com",
            //    DateOfBirth = new DateTime(1981, 07, 13),
            //    PhoneNumber = "111-222-3333"
            //});

            modelBuilder.Entity<File>().HasData(new File
            {
                FileID = 1,
                FileName = "TestFile1",
                FilePath = "Path1",
                Category = "HR"

            }, new File
            {
                FileID = 2,
                FileName = "TestFile2",
                FilePath = "Path2",
                Category = "Insuarance"

            }, new File
            {
                FileID = 3,
                FileName = "TestFile3",
                FilePath = "Path3",
                Category = "Finance"

            });
        }
    }
}

