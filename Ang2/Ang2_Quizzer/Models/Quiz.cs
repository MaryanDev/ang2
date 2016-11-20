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


        public Quiz(int id, string title, int duration, List<Question> questions)
        {
            Id = id;
            Title = title;
            Duration = duration;
            Questions = questions;
        }
    }
}