using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FileScheduleProject.Models;
using FileScheduleProject.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FileScheduleProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        private IRepository<File> _fileRepository;

        public FileController(IRepository<File> fileRepository)
        { 
            this._fileRepository = fileRepository; 
        }

        [HttpGet]
        public IEnumerable<File> GetFiles()
        {
            return _fileRepository.GetAll();
        } 


    }
}