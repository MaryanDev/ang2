using Ang2_Quizzer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace Ang2_Quizzer.Controllers
{
    public class QuizController : ApiController
    {
        public List<Quiz> Quizzes;

        public QuizController()
        {
            Quizzes = new List<Quiz>();
            Quizzes
                .AddRange(new Quiz[] { new Quiz { Id = 1, Title = "C# Core", Duration = 25 }, new Quiz { Id = 2, Title = "Sql basic", Duration = 40 } });

        }

        public HttpResponseMessage GetAllQuizzes()
        {
            return Request.CreateResponse(HttpStatusCode.OK, Quizzes);
        }
    }
}
