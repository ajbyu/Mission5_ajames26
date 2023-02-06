using Microsoft.AspNetCore.Mvc;
using Mission5_ajames26.Models;

namespace Mission5_ajames26.Controllers
{
    public class HomePagesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalculator(GradeCalcModel model)
        {
            return View();
        }
    }
}
