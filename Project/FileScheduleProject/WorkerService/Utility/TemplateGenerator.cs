using FileScheduleProject.Models;
using FileScheduleProject.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace WorkerService.Utility
{
    public class TemplateGenerator
    {
        private IRepository<Customer> customerRepository;
        public TemplateGenerator(IRepository<Customer> _customerRepository)
        {
            this.customerRepository = _customerRepository;
        }

        public string GetHTMLString()
        {
            var customers = customerRepository.GetAll();

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
