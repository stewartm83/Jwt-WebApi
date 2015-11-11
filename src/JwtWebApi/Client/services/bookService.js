(function () {

    "use strict";

    angular.module("jwtWebApp")
        .factory("bookService", ["$http", function ($http) {

        function getBooks() {

                     $http.get("/api/books").
                    success(function(res) {
                       return   res;
                    })
                    .error(function(err) {
                        return err;
                    });
        }

        function getBook(id) {

            $http.get("api/books/" + id)
                    .success(function(res) {
                     return  res;
                    })
                    .error(function(err) {
                    return err;
                });
        }

        return {
            getBooks: getBooks,
            getBook: getBook
        }
       
    }]);
})();
