using System;
using System.Web.Mvc;

namespace TrackJs.Demo.Controllers
{
    public class LogController : Controller
    {
        [HttpPost]
        public JsonResult Index(object o)
        {
            var location = Guid.NewGuid().ToString("N");
            return Json(new { location = location }, JsonRequestBehavior.DenyGet);
        }
    }
}
