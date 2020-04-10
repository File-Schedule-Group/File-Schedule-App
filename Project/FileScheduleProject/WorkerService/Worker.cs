using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Amazon.Runtime;
using Amazon.SQS;
using Amazon.SQS.Model;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace WorkerService
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;
        private readonly IAmazonSQS _sqs;

        private readonly string _processedMessageQueueUrl = "https://sqs.us-east-1.amazonaws.com/220972709433/Reports";

        public Worker(ILogger<Worker> logger, IAmazonSQS sqs)
        {
            _logger = logger;
            _sqs = sqs;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            var QueueUrl = "https://sqs.us-east-1.amazonaws.com/220972709433/Reports";

            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    var request = new ReceiveMessageRequest
                    {
                        QueueUrl = QueueUrl,
                        MaxNumberOfMessages = 10,

                        WaitTimeSeconds = 5
                    };
                   
                    var result = await _sqs.ReceiveMessageAsync(request);
                    if (result.Messages.Any())
                    {
                        foreach (var message in result.Messages)
                        {
                            ReportGenerate(JsonConvert.DeserializeObject<Message>(message.Body));

                            // Some Processing code would live here
                            _logger.LogInformation("Processing Message: {message} | {time}", message.Body, DateTimeOffset.Now);

                            //var processedMessage = new ProcessedMessage(message.Body);
                            //var sendRequest = new SendMessageRequest(_processedMessageQueueUrl, JsonConvert.SerializeObject(processedMessage));

                            //var sendResult = await _sqs.SendMessageAsync(sendRequest, stoppingToken);
                            //if (sendResult.HttpStatusCode == System.Net.HttpStatusCode.OK)
                            //{
                                var deleteResult = await _sqs.DeleteMessageAsync(QueueUrl, message.ReceiptHandle);
                            //}
                        }
                    }
                }
                catch (Exception e)
                {
                    _logger.LogError(e.InnerException.ToString());
                }

                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
            }
        }

        private void ReportGenerate(Message message)
        {
            throw new NotImplementedException();
        }
    }
}
