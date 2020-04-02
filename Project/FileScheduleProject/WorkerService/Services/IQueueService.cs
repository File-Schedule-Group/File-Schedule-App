using System.Collections.Generic;
using System.Threading.Tasks;

namespace WorkerService.Services
{
    public interface IQueueService
    {
        public Task<IEnumerable<string>> GetNextMessagesAsync();
    }
}