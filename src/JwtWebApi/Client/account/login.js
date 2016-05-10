(function() {

    "use strict";

    angular.module("jwtWebApp")
        .controller("LoginCtrl",
        [
            "$scope", "$window", "$http", "$state",
            function($scope, $window, $http, $state) {

                var storage = $window.localStorage;

                $scope.submit = function() {

                    var user = {
                        email: $scope.email,
                        password: $scope.password
                    };

                    //Check for token
                    if (!storage.getItem("jwt_token")) {
                        $http.post("signin", user)
                            .success(function(res) {
                                $window.localStorage.setItem("jwt_token", res.token);
                                $state.go("books");
                            })
                            .error(function(err) {
                                console.log(err);
                            });
                    }

                };

            }
        ]);

})();