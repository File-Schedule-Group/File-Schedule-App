using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Amazon.Runtime;
using Amazon.SQS;
using Amazon.SQS.Model;
using DinkToPdf;
using DinkToPdf.Contracts;
using FileScheduleProject.Models;
using FileScheduleProject.Repository;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using WorkerService.Models;
using WorkerService.Utility;

namespace WorkerService
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;
        private readonly IAmazonSQS _sqs;
        private IConverter _converter;
        //private readonly IRepository<Customer> customerRepository;

        public Worker(ILogger<Worker> logger, IAmazonSQS sqs, IConverter converter)
        {
            _logger = logger;
            _sqs = sqs;
            _converter = converter;
            //this.customerRepository = _customerRepository;
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
                            ReportGenerate(JsonConvert.DeserializeObject<ReceivedMessage>(message.Body));

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

        private void ReportGenerate(ReceivedMessage receivedMessage)
        {
            var globalSettings = new GlobalSettings
            {
                ColorMode = ColorMode.Color,
                Orientation = Orientation.Portrait,
                PaperSize = PaperKind.A4,
                Margins = new MarginSettings { Top = 10 },
                DocumentTitle = "PDF Report",
                Out = @"D:\PDFCreator\Employee_Report_"+ "ReportID_"+receivedMessage.ReportId+"_User_" + receivedMessage.User+".pdf"
            };

            var objectSettings = new ObjectSettings
            {
                PagesCount = true,
                HtmlContent = GetHTMLString(),
                WebSettings = { DefaultEncoding = "utf-8", UserStyleSheet = Path.Combine(Directory.GetCurrentDirectory(), "assets", "styles.css") },
                HeaderSettings = { FontName = "Arial", FontSize = 9, Right = "Page [page] of [toPage]", Line = true },
                FooterSettings = { FontName = "Arial", FontSize = 9, Line = true, Center = "Report Footer" }
            };

            var pdf = new HtmlToPdfDocument()
            {
                GlobalSettings = globalSettings,
                Objects = { objectSettings }
            };

            _converter.Convert(pdf);
        }

        public static string GetHTMLString()
        {
            var customers = new List<Customer>
            {
                new Customer { Id=1,FirstName="Mike", LastName="Turner", Phone="2145", Country="Male",City="City"}
            };

            var sb = new StringBuilder();
            sb.Append(@"
                        <html>
                            <head>
                            </head>
                            <body>
                                <div class='header'><h1>This is the generated PDF report!!!</h1></div>
                                <table align='center'>
                                    <tr>
                                        <th>Id</th>
                                        <th>FirstName</th>
                                        <th>LastName</th>
                                        <th>City</th>
                                        <th>Country</th>
                                        <th>Phone</th>
                                    </tr>");

            foreach (var cus in customers)
            {
                sb.AppendFormat(@"<tr>
                                    <td>{0}</td>
                                    <td>{1}</td>
                                    <td>{2}</td>
                                    <td>{3}</td>
                                    <td>{4}</td>
                                    <td>{5}</td>
                                  </tr>", cus.Id, cus.FirstName, cus.LastName, cus.City, cus.Country, cus.Phone);
            }

            sb.Append(@"
                                </table>
                            </body>
                        </html>");

            return sb.ToString();
        }
    }
}
