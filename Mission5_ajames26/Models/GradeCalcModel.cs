using System.ComponentModel.DataAnnotations;

namespace Mission5_ajames26.Models
{
    public class GradeCalcModel
    {
        [Range(0, 100)]
        public double Assignments { get; set; }
        [Range(0, 100)]
        public double GroupProject { get; set; }
        [Range(0, 100)]
        public double Quizzes { get; set; }
        [Range(0, 100)]
        public double Midterm { get; set; }
        [Range(0, 100)]
        public double FinalExam { get; set; }
        [Range(0, 100)]
        public double Intex { get; set; } 
    }
}
