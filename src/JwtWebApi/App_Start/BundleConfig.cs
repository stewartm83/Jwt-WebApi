using System.Web.Optimization;

namespace JwtWebApi
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/scripts/angular.js",
                "~/scripts/angular-animate.js",
                "~/scripts/angular-aria.js",
                "~/scripts/angular-cookies.js",
                "~/scripts/angular-loader.js",
                "~/scripts/angular-message-format.js",
                "~/scripts/angular-messages.js",
                "~/scripts/angular-mocks.js",
                "~/scripts/angular-resource.js",
                "~/scripts/angular-route.js",
                "~/scripts/angular-sanitize.js",
                "~/scripts/angular-scenario.js",
                "~/scripts/angular-touch.js",
                "~/scripts/angular-ui-router.js"));

            bundles.Add(new ScriptBundle("~/bundles/jwtapp").Include(
                 "~/scripts/app/app.js",
                "~/scripts/app/account/login.js",
                "~/scripts/app/account/register.js",
                "~/scripts/app/books/book-detail.js",
                "~/scripts/app/books/books.js",
                "~/scripts/app/home/header.js",
                "~/scripts/app/home/home.js",
                "~/scripts/app/services/authinterceptor.js",
                "~/scripts/app/services/bookservice.js"));
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/bootstrap-theme.css",
                "~/Content/site.css"));
        }
    }
}
