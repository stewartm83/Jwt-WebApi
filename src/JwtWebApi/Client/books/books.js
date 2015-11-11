(function() {
    "use strict";

    angular.module("jwtWebApp")
        .controller("BooksCtrl",
        [
            "$scope", "bookService", function($scope, bookService) {
                $scope.books = {};

                bookService.Getbooks().then(
                    function(response) {
                        console.log(response);
                        $scope.books = response;
                    },
                    function(error) {
                        console.log(error);
                    });

                $scope.isSuccess = true;

            }
        ]);

})();