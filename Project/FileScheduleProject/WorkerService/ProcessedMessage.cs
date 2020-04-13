using System;
using System.Collections.Generic;
using System.Text;

namespace WorkerService
{
    public class ProcessedMessage
    {
        public ProcessedMessage(string message, bool hasErrors = false)
        {
            TimeStamp = DateTime.UtcNow;

            Message = message;
            HasErrors = hasErrors;
        }

        public DateTime TimeStamp { get; set; }
        public string Message { get; set; }
        public bool HasErrors { get; set; }
    }
}
