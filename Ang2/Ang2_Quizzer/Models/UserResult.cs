using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ang2_Quizzer.Models
{
    public class UserResult
    {
        public int QuizId { get; set; }
        public List<Question> Questions { get; set; }
    }
}