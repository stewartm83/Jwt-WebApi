(function() {

    "use strict";

    angular.module("jwtWebApp")
        .factory("bookService", [
            "$http", function($http, $q) {

                function getBooks() {
                    var deferred = $q.defer();
                    $http.get("/api/books").
                        success(function(res) {
                            deferred.resolve(res);
                        })
                        .error(function(err) {
                            deferred.reject(err);
                        });
                    return deferred.promise;
                }

                function getBook(id) {
                    var deferred = $q.defer();

                    $http.get("api/books/" + id)
                        .success(function(res) {
                            deferred.resolve(res);
                        })
                        .error(function(err) {
                            deferred.reject(err);
                        });
                    return deferred.promise;
                }

                return {
                    getBooks: getBooks,
                    getBook: getBook
                }

            }
        ]);
})();