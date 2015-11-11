"use strict";

angular.module("jwtApp")
    .controller("BookEditController", [
        "$scope", "$http", "$stateParams", "$location", function($scope, $http, $stateParams, $location) {
            var bookId = $stateParams.id;
            if (bookId && bookId.length > 0) {
                $http.get("/api/books/" + bookId).success(function(book) {
                    $scope.book = book;

                    $scope.book.dateCreated = book.dateCreated.shortDateFormat();
                    $scope.book.dateUpdated = book.dateUpdated.shortDateFormat();
                    $scope.book.publishDate = book.publishDate.shortDateFormat();


                });
            }

            $scope.saveItem = function() {
                if (bookId && bookId.length > 0) {
                    $http.put("/api/books/" + bookId, $scope.book).success(function(book) {
                        $location.path("/books");
                    });
                } else {
                    $http.post("/api/books", $scope.book).success(function(book) {
                        $location.path("/books");
                    });
                }
            };


        }
    ]);