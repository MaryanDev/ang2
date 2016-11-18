using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ang2_Quizzer.Models
{
    public class Quiz
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Duration { get; set; }

        public List<Question> Questions { get; set; }
    }
}