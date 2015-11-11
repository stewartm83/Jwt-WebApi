(function () {

    "use strict";

    //Tryout a new pattern in Angular
    function logoutCtrl($scope, $window, $state) {

        function logout() {
            $window.localStorage.removeItem("jwt_token");
            $state.go("home");
        }

        logout();
    }

    angular
        .module("jwtWebApp")
        .controller("LogoutCtrl", logoutCtrl);

    logoutCtrl.$inject = ["$window"];
    logoutCtrl.$inject = ["$state"];

})();