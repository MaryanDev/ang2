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

        public int UserChoice { get; set; }

        public Question(int id, string text, List<Variant> variants)
        {
            this.Id = id;
            QuestionText = text;
            Variants = variants;
        }
    }
}