
(function() {

    "use strict";

    angular.module("jwtWebApp")
        .controller("BooksDetailCtrl", [
            "$scope", "$stateParams", "bookService",
            function($scope, $stateParams,  bookService) {

                $scope.selectedBook = bookService.Getbook($stateParams.id);

            }
        ]);

})();