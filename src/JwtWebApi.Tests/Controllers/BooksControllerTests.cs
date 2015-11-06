using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using JwtWebApi.Controllers;
using JwtWebApi.Models.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JwtWebApi.Tests.Controllers
{
    [TestClass()]
    public class BooksControllerTests
    {
        [TestMethod()]
        public void GetBooksTest()
        {
            //Arrange
            var controller = new BooksController
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            //Act
            var books = controller.GetBooks();
            //Assert
            Assert.IsNotNull(books);
            Assert.IsTrue(books.Any());
        }

        [TestMethod()]
        public void GetBookTest()
        {
            //Arrange
            var controller = new BooksController
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            //Act
            var book = controller.GetBook(1);
            //Assert
            Assert.IsNotNull(book);
            Assert.AreEqual(book.Id, 1, "Returned Id is different to the expected Id.");
        }

        [TestMethod()]
        public void PutBookTest()
        {
            //Arrange
            var controller = new BooksController
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            //Act
            var book = new Book
            {
                
            };
            //Assert
            Assert.IsNotNull(book);
            Assert.AreEqual(book.BookId, 1, "Returned Id is different to the expected Id.");
        }

        [TestMethod()]
        public void PostBookTest()
        {
            //Arrange
            var controller = new BooksController
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            //Act
            var book = new Book
            {

            };
            //Assert
            Assert.IsNotNull(book);
            Assert.AreEqual(book.BookId, 1, "Returned Id is different to the expected Id.");
        }

        [TestMethod()]
        public void DeleteBookTest()
        {
            //Arrange
            var controller = new BooksController
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            //Act
            var book = new Book
            {

            };
            //Assert
            Assert.IsNotNull(book);
            Assert.AreEqual(book.BookId, 1, "Returned Id is different to the expected Id.");
        }
    }
}