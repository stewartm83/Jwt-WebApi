(function() {
    "use strict";

    angular.module("jwtWebApp")
        .controller("BooksCtrl",
        [
            "$scope", "bookService", function ($scope, bookService) {
                $scope.books = {};

                $scope.books = bookService.Getbooks();

                $scope.isSuccess = true;

            }
        ]);

})();