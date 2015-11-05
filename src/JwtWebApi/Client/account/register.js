(function() {

    "use strict";

    angular.module("jwtWebApp")
        .controller("RegisterCtrl", function($scope, $window, $http, $state) {

            var storage = $window.localStorage;

            //Check for token and remove
            if (storage.getItem("jwt_token")) {
                storage.removeItem("jwt_token");
            }

            $scope.submit = function() {
                debugger;
                var url = "signup";

                var user = {
                    email: $scope.email,
                    password: $scope.password
                };

                $http.post(url, user)
                    .success(function(res) {
                        console.log(res);
                        console.log(res.dbUser);
                        console.log(res.token);
                        storage.setItem("jwt_token", res.token);
                        $state.go("books");
                    })
                    .error(function(err) {
                        console.log("warning", "Opps!", "Could not register" + err);
                    });

            };
        });
})();