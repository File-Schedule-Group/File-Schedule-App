using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FileScheduleProject.Models
{
    public class File
    {
        [Key]
        public int FileID { get; set; }
        [Required]
        public string FileName { get; set; }
        public string FilePath { get; set; }
        public string Category { get; set; }
    }
}
