using Amazon.Runtime;
using Amazon.SQS;
using Amazon.SQS.Model;
using FileScheduleProject.Models;
using FileScheduleProject.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FileScheduleProject.Controllers
{
    //Reference : https://markmcgookin.com/2017/03/17/posting-to-amazon-sqs-with-net-core/

    [Route("api/[controller]")]
    public class MessageController : Controller
    {
        private IRepository<Configuration> Configuration;
        private IAmazonSQS sqs;

        public MessageController(IRepository<Configuration> _Configuration, IAmazonSQS _sqs)
        {
            this.Configuration = _Configuration;
            this.sqs = _sqs;
        }

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "API", "Working....." };
        }

        //[HttpPost("{id}")]  // why we need this?
        [HttpPost]
        public IActionResult Sent(int id)
        {
            var queueUrl = "https://sqs.us-east-1.amazonaws.com/220972709433/Reports";

            var sendRequest = new SendMessageRequest();
            sendRequest.QueueUrl = queueUrl;
            sendRequest.MessageBody = "{ 'ReportId' : "+ id +" , 'User' : 3 }";
            var sendMessageResponse = sqs.SendMessageAsync(sendRequest).Result;

            if (sendMessageResponse.HttpStatusCode != System.Net.HttpStatusCode.OK)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}