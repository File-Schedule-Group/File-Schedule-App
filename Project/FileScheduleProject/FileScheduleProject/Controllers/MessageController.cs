﻿using Amazon.Runtime;
using Amazon.SQS;
using Amazon.SQS.Model;
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
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpPost]
        public IEnumerable<string> Sent()
        {
            //the url for our queue	            
            //"https://sqs.eu-west-1.amazonaws.com/[USERID]/[QUEUENAME]";

            var queueUrl = "https://sqs.us-east-1.amazonaws.com/220972709433/Reports";
            Console.WriteLine("Queue Test Starting!");
            Console.WriteLine("Creating Client and request");
            //Create some Credentials with our IAM user	            
            var awsCreds = new BasicAWSCredentials("AKIATG4X76Y4TU67BGDN", "7JUZZujTLMczotl8P61QNZ43rL9D1WhlyAjGCtNc");
            //Create a client to talk to SQS	            
            var amazonSQSClient = new AmazonSQSClient(awsCreds, Amazon.RegionEndpoint.EUWest1);
            //Create the request to send	            
            var sendRequest = new SendMessageRequest();
            sendRequest.QueueUrl = queueUrl;
            sendRequest.MessageBody = "{ 'message' : 'hello world' }";
            //Send the message to the queue and wait for the result	            
            Console.WriteLine("Sending Message");
            var sendMessageResponse = amazonSQSClient.SendMessageAsync(sendRequest).Result;
            Console.WriteLine("Receiving Message");
            //Create a receive requesdt to see if there are any messages on the queue	            
            var receiveMessageRequest = new ReceiveMessageRequest();
            receiveMessageRequest.QueueUrl = queueUrl;
            //Send the receive request and wait for the response	            
            var response = amazonSQSClient.ReceiveMessageAsync(receiveMessageRequest).Result;
            //If we have any messages available	            
            if (response.Messages.Any())
            {
                foreach (var message in response.Messages)
                {
                    //Spit it out	                    
                    Console.WriteLine(message.Body);
                    //Remove it from the queue as we don't want to see it again	                    
                    var deleteMessageRequest = new DeleteMessageRequest();
                    deleteMessageRequest.QueueUrl = queueUrl;
                    deleteMessageRequest.ReceiptHandle = message.ReceiptHandle;
                    var result = amazonSQSClient.DeleteMessageAsync(deleteMessageRequest).Result;
                }
            }

            return new string[] { "value1", "value2" };
        }
    }
}