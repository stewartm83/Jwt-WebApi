(function() {

    "use strict";

    angular.module("jwtWebApp")
        .controller("LoginCtrl",
        [
            "$scope", "$window", "authService", "$state",
            function($scope, $window, authService, $state) {

                var storage = $window.localStorage;

                $scope.submit = function() {

                    var user = {
                        email: $scope.email,
                        password: $scope.password
                    };

                    //Check for token
                    if (!storage.getItem("jwt_token")) {
                        authService.login(user);
                    }

                };

            }
        ]);

})();