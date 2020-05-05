using DinkToPdf;
using DinkToPdf.Contracts;
using FileScheduleProject.Models;
using FileScheduleProject.Repository;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using WorkerService.Models;

namespace WorkerService.Utility
{
    public class TemplateGenerator
    {
        ////private IRepository<Customer> customerRepository;
        //private IConverter _converter;
        ////public TemplateGenerator(/*IRepository<Customer> _customerRepository*/)
        ////{
        ////    //this.customerRepository = _customerRepository;
        ////}
        //public TemplateGenerator(IConverter converter)
        //{
        //    _converter = converter;
        //}

        //public static string GetHTMLString()
        //{
        //    var customers = new List<Customer>
        //    {
        //        new Customer { Id=1,FirstName="Mike", LastName="Turner", Phone="2145", Country="Male",City="City"}
        //    };//customerRepository.GetAll();

        //    var sb = new StringBuilder();
        //    sb.Append(@"
        //                <html>
        //                    <head>
        //                    </head>
        //                    <body>
        //                        <div class='header'><h1>This is the generated PDF report!!!</h1></div>
        //                        <table align='center'>
        //                            <tr>
        //                                <th>Id</th>
        //                                <th>FirstName</th>
        //                                <th>LastName</th>
        //                                <th>City</th>
        //                                <th>Country</th>
        //                                <th>Phone</th>
        //                            </tr>");

        //    foreach (var cus in customers)
        //    {
        //        sb.AppendFormat(@"<tr>
        //                            <td>{0}</td>
        //                            <td>{1}</td>
        //                            <td>{2}</td>
        //                            <td>{3}</td>
        //                            <td>{4}</td>
        //                            <td>{5}</td>
        //                          </tr>", cus.Id, cus.FirstName, cus.LastName, cus.City, cus.Country, cus.Phone);
        //    }

        //    sb.Append(@"
        //                        </table>
        //                    </body>
        //                </html>");

        //    return sb.ToString();
        //}

        //public void ReportGenerate(ReceivedMessage message)
        //{
        //    var globalSettings = new GlobalSettings
        //    {
        //        ColorMode = ColorMode.Color,
        //        Orientation = Orientation.Portrait,
        //        PaperSize = PaperKind.A4,
        //        Margins = new MarginSettings { Top = 10 },
        //        DocumentTitle = "PDF Report",
        //        Out = @"D:\PDFCreator\Employee_Report.pdf"
        //    };

        //    var objectSettings = new ObjectSettings
        //    {
        //        PagesCount = true,
        //        HtmlContent = TemplateGenerator.GetHTMLString(),
        //        WebSettings = { DefaultEncoding = "utf-8", UserStyleSheet = Path.Combine(Directory.GetCurrentDirectory(), "assets", "styles.css") },
        //        HeaderSettings = { FontName = "Arial", FontSize = 9, Right = "Page [page] of [toPage]", Line = true },
        //        FooterSettings = { FontName = "Arial", FontSize = 9, Line = true, Center = "Report Footer" }
        //    };

        //    var pdf = new HtmlToPdfDocument()
        //    {
        //        GlobalSettings = globalSettings,
        //        Objects = { objectSettings }
        //    };

        //    _converter.Convert(pdf);
        //}
    }
}
