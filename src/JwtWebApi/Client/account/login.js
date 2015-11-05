(function() {

    "use strict";

    angular.module("jwtWebApp")
        .controller("LoginCtrl", function($scope, $window, $http, $state) {

            var storage = $window.localStorage;

            //Check for token and remove
            if (storage.getItem("jwt_token")) {
                storage.removeItem("jwt_token");
            }

            $scope.submit = function() {

                var url = "signin";

                var user = {
                    email: $scope.email,
                    password: $scope.password
                };

                $http.post(url, user)
                    .success(function(res) {
                        storage.setItem("jwt_token", res.token);
                        $state.go("books");
                    })
                    .error(function(err) {
                        console.log("warning", "Opps!", "Could not register" + err);
                    });

            };
        });
})();