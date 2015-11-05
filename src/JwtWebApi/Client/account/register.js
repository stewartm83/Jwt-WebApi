(function() {

    "use strict";

    angular.module("jwtWebApp")
        .controller("RegisterCtrl", [
            "$scope", "$window", "$http", "$state",
            function($scope, $window, $http, $state) {

                var storage = $window.localStorage;

                $scope.submit = function() {
                    debugger;
                    var url = "signup";

                    var user = {
                        email: $scope.email,
                        password: $scope.password
                    };

                    //Check for token 
                    if (!storage.getItem("jwt_token")) {
                        $http.post(url, user)
                            .success(function(res) {
                                storage.setItem("jwt_token", res.token);
                                $state.go("books");
                            })
                            .error(function(err) {
                                storage.removeItem("jwt_token");
                            });
                    }

                };
            }
        ]);
})();