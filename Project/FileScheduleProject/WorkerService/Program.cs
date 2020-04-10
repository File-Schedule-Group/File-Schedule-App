using Amazon.SQS;
using DinkToPdf;
using DinkToPdf.Contracts;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.IO;

namespace WorkerService
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseWindowsService()
                .ConfigureAppConfiguration((hostingContext, config) =>
                {
                    var builder = new ConfigurationBuilder()
                            .SetBasePath(Directory.GetCurrentDirectory())
                            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                            .AddJsonFile($"appsettings.{hostingContext.HostingEnvironment.EnvironmentName}.json", optional: false, reloadOnChange: true)
                            .AddEnvironmentVariables()
                            .Build();
                })
                .ConfigureServices((hostingContext, services) =>
                {
                    services.AddSingleton(typeof(IConverter), new SynchronizedConverter(new PdfTools()));

                    // AWS Configuration
                    var options = hostingContext.Configuration.GetAWSOptions();
                    services.AddDefaultAWSOptions(options);
                    services.AddAWSService<IAmazonSQS>();

                    // Worker Service
                    services.AddHostedService<Worker>();
                });
    }
}
