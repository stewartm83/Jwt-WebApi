(function() {

    "use strict";

    authService.$inject = ["$http"];
    authService.$inject = ["$window"];

    function authService($http, $window) {

        function login(user) {
            debugger;
            $http.post("signin", user)
                .success(function(res) {
                    $window.localStorage.setItem("jwt_token", res.token);
                })
                .error(function(err) {
                    $window.localStorage.removeItem("jwt_token");
                });
        }

        function register(user) {
            debugger;
            $http.post("signup", user)
                .success(function(res) {
                    $window.localStorage.setItem("jwt_token", res.token);

                })
                .error(function(err) {
                    $window.localStorage.removeItem("jwt_token");
                });
        }

        return {
            login: login,
            register: register
        };
    }

    angular
        .module("jwtWebApp")
        .service("authService", authService);

})();