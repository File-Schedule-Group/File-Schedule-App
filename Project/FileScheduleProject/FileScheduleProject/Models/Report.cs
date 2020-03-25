using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

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
