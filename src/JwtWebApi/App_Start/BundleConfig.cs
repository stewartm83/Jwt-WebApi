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
                "~/scripts/AngularUI/ui-router.js"));

            bundles.Add(new ScriptBundle("~/bundles/jwtWebApp").Include(
                "~/client/app.js",
                "~/client/account/login.js",
                "~/client/account/register.js",
                "~/client/books/book-detail.js",
                "~/client/books/books.js",
                "~/client/home/header.js",
                "~/client/home/home.js",
                "~/client/services/authinterceptor.js",
                "~/client/services/authService.js",
                "~/client/services/bookService.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/bootstrap-theme.css",
                "~/Content/site.css"));
        }
    }
}