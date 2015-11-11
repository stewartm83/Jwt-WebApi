(function() {

    "use strict";

    angular.module("jwtWebApp")
        .controller("HomeCtrl", [
            "$scope", "$window", "$state", function($scope, $window, $state) {

                $scope.isAuthenticated = function() {
                    return !!($window.localStorage.getItem("jwt_token"));
                };

                $scope.logout = function() {
                    $window.localStorage.removeItem("jwt_token");
                    $state.go("home");
                };
            }
        ]);
})();