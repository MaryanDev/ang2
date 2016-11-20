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
            var sqlQuiz = new Quiz(2, "Sql basic", 30, new List<Models.Question>(new Question[]
                {
                    new Question(1, "How many joins are in the sql?", new List<Variant>(new Variant[] { new Variant(1, "2", false), new Variant(2, "5", true),  new Models.Variant(3, "1", false)})),
                    new Question(2, "What is sql stands for?", new List<Variant>(new Variant[] { new Variant(1,"Structured Query language", true), new Variant(2, "Self quoted lion", false), new Variant(3, "Some quite loop", false)})),
                    new Question(3, "What is SP?", new List<Variant>(new Variant[] { new Variant(1, "Super power", false), new Variant(2, "Self pointed", false), new Variant(3, "Stored procedure", false)})),
                    new Question(4, "How many PK's the table can have?", new List<Variant>(new Variant[] { new Variant(1, "2", false), new Variant(2, "1", true), new Variant(3, "5", false)})),
                    new Question(5, "How many unique constraints the table can have?", new List<Variant>(new Variant[] {new Variant(1, "1", false), new Variant(2, "3", false), new Variant(3, "As many as you need", true)}))
                }));
            var csharpQuiz = new Quiz(1, "C# core", 25, null);
            this.Quizzes = new List<Quiz>(new Quiz[] { csharpQuiz, sqlQuiz });
        }



        public HttpResponseMessage GetAllQuizzes()
        {
            return Request.CreateResponse(HttpStatusCode.OK, Quizzes);
        }

        public HttpResponseMessage GetQuestionsForQuiz([FromUri]int id)
        {
            var result = this.Quizzes.Where(q => q.Id == id).FirstOrDefault().Questions.Select(x => new
            {
                Id = x.Id,
                Text = x.QuestionText,
                Variants = x.Variants.Select(v => new { Id = v.Id, Text = v.VariantText })
            });
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        [HttpPost]
        public HttpResponseMessage CheckQuiz([FromBody]UserResult result)
        {
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}

