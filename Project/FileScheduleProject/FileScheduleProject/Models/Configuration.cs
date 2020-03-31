using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FileScheduleProject.Models
{
    public class Configuration
    {
        [Key]
        public int ID { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
    }
}
