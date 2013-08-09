using System.Web.Mvc;

namespace TrackJs.Demo.Registrars
{
    public class FilterRegistrar
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}