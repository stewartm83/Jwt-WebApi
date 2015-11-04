angular.module("jwtWebApp")
    .controller("BooksCtrl",
    [
        "$scope", "$http", function($scope, $http) {


            $scope.books = {};

            $http.get("/api/books").
                success(function(res) {
                    $scope.books = res;
                })
                .error(function(err) {
                    console.log(err);
                });
        }
    ]);