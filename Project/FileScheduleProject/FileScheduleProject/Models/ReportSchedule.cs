using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FileScheduleProject.Models
{
    public class ReportSchedule
    {
        [Key]
        public int ScheduleID { get; set; }
        [Required]
        public string ScheduleName { get; set; }
        public DateTime ScheduleTime{ get; set; }
        public string ScheduleUser { get; set; }
        public string MailAddress { get; set; }
    }
}
