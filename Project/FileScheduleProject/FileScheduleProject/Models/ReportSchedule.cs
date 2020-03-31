using System;
using System.ComponentModel.DataAnnotations;

namespace FileScheduleProject.Models
{
    public class ReportSchedule
    {
        [Key]
        public int ScheduleID { get; set; }
        [Required]
        public string ScheduleName { get; set; }
        public DateTime ScheduleTime { get; set; }
        public string ScheduleUser { get; set; }
        public string MailAddress { get; set; }
    }
}
