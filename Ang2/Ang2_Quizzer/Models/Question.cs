using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ang2_Quizzer.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string QuestionText { get; set; }
        public List<Variant> Variants { get; set; } 
    }
}