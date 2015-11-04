angular.module("jwtWebApp").factory("BookService", function() {
    var books = [
        {
            id: 1,
            name: "Genesis",
            description: "The story of mans creation and fall into exile."
        },
        {
            id: 2,
            name: "Ruth",
            description: "A good woman remains faithful to her family and finds love in a surprising place."
        },
        {
            id: 3,
            name: "Esther",
            description: "A young queen risks her life to save her people from the brink of death."
        }
    ];


    return {
        list: function() {
            return books;
        },
        find: function(id) {
            return _.find(books, function(book) { return book.id === id });
        }
    };
});