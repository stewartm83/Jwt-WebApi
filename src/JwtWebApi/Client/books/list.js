"use strict";

angular.module("jwtApp")
    .controller("BookListController", [
        "$scope", "$http", "$location", function($scope, $http, $location) {
            $http.get("/api/books").success(function(books) {
                $scope.books = books;
            });

            $scope.selectItem = function(item) {
                $location.path("/book/edit/" + item._id);
            };
            $scope.deleteItem = function(item) {
                $http.delete("/api/books/" + item._id).success(function() {
                    $http.get("/api/books").success(function(books) {
                        $scope.books = books;
                    });
                });
            };
            $scope.addNew = function() {
                $location.path("/book/edit");
            };
        }
    ]);