﻿using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using TrackJs.Demo.Registrars;

namespace TrackJs.Demo
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            WebApiRegistrar.Register(GlobalConfiguration.Configuration);
            FilterRegistrar.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteRegistrar.RegisterRoutes(RouteTable.Routes);
        }
    }
}