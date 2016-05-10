(function() {

    "use strict";

    angular
        .module("jwtWebApp")
        .controller("LogoutCtrl",
        [
            "$scope", "$window", "$state",
            function($scope, $window, $state) {

                function logout() {
                    $window.localStorage.removeItem("jwt_token");
                    $state.go("home");
                }

                logout();
            }
        ]);


})();