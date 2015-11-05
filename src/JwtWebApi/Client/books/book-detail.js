
(function() {

    "use strict";

    angular.module("jwtWebApp")
        .controller("BooksDetailCtrl", [
            "$scope", "$stateParams", "$http",
            function($scope, $stateParams, $http) {

                $scope.selectedBook = {};
                $http.get("api/books/" + $stateParams.id)
                    .success(function(res) {
                        console.log(res);
                        debugger;
                        $scope.selectedBook = res;
                    })
                    .error(function(err) {
                        console.log(err);
                    });
            }
        ]);

})();