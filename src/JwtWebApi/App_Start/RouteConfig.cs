using System.Web.Mvc;
using System.Web.Routing;

namespace JwtWebApi
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.MapRoute("App", "{*url}", new
            {
                controller = "Home",
                action = "Index"
            }
                );
        }
    }
}