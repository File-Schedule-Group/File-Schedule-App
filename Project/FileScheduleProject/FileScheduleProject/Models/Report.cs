using System.ComponentModel.DataAnnotations;

namespace FileScheduleProject.Models
{
    public class Report
    {
        [Key]
        public int ReportID { get; set; }
        [Required]
        public string ReportName { get; set; }
        public string ReportType { get; set; }
    }
}
