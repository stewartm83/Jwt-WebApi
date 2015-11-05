(function () {

    "use strict";

    angular.module("jwtWebApp")
        .factory("authinterceptor", [
            "$window", function ($window) {

                var storage = $window.localStorage;

                return {
                    request: function(config) {
                        var token = storage.getItem("jwt_token");
                        if (token) {
                            config.headers.Authorization = "Bearer" + " " + token;
                        }
                        return config;
                    },

                    response: function(response) {
                        return response;
                    }
                };
            }
        ]);
})();