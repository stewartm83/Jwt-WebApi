(function () {

    "use strict";

    function headerCtrl($scope, $window) {

        $scope.isAuthenticated = function() {
            return !!($window.localStorage.getItem("jwt_token"));
        };

    }

    angular
        .module("jwtWebApp")
        .controller("HeaderCtrl", headerCtrl);

    headerCtrl.$inject = ["$scope"];
    headerCtrl.$inject = ["$window"];
})();