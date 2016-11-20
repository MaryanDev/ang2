using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ang2_Quizzer.Models
{
    public class Variant
    {
        public int Id { get; set; }
        public string VariantText { get; set; }
        public bool IsTrue { get; set; }

        public Variant(int id, string text, bool isTrue)
        {
            Id = id;
            VariantText = text;
            IsTrue = isTrue;
        }
    }
}