(function() {
    "use strict";

    angular.module("jwtWebApp")
        .controller("BooksCtrl",
        [
            "$scope", "$http", function($scope, $http) {
                $scope.books = {};

                $http.get("/api/books").
                    success(function(res) {
                        $scope.books = res;
                        $scope.isSuccess = true;
                    })
                    .error(function(err) {
                        $scope.isSuccess = false;
                        console.log(err);
                        $scope.ErrorMessage = err.Message;
                    });
            }
        ]);

})();