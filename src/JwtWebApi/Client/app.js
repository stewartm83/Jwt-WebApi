"use strict";

/**
 * @ngdoc overview
 * @name jwtScafApp
 * @description
 * # jwtScafApp
 *
 * Main module of the application.
 */
angular
    .module("jwtWebApp", [
        "ngAnimate",
        "ngAria",
        "ngCookies",
        "ngMessages",
        "ngResource",
        "ngRoute",
        "ngSanitize",
        "ngTouch",
        ["ui.router"]
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "main/main.html",
                controller: "MainCtrl",
                controllerAs: "main"
            })
            .when("/about", {
                templateUrl: "about/about.html",
                controller: "AboutCtrl",
                controllerAs: "about"
            })
            .otherwise({
                redirectTo: "/"
            });

        $locationProvider.html5Mode(true);


        $httpProvider.interceptors.push("authinterceptor");
    });