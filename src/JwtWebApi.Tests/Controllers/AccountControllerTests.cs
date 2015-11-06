using System.Net;
using System.Net.Http;
using System.Web.Http;
using JwtWebApi.Controllers;
using JwtWebApi.ViewModels;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JwtWebApi.Tests.Controllers
{
    [TestClass]
    public class AccountControllerTests
    {
        [TestMethod]
        public void LoginTest()
        {
            //Arrange
            var controller = new AccountController
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            var user = new LoginViewModel
            {
                Email = "test@test.com",
                Password = "password123"
            };

            //Act
            var response = controller.Login(user);

            //Assert
            Assert.AreEqual(response.StatusCode, HttpStatusCode.OK);
        }

        [TestMethod]
        public void RegisterTest()
        {
            //Arrange
            var controller = new AccountController
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            var user = new RegisterViewModel
            {
                Email = "test@test.com",
                Password = "password123"
            };

            //Act
            var response = controller.Register(user);

            //Assert
            Assert.AreEqual(response.StatusCode, HttpStatusCode.OK);
        }

        [TestMethod]
        public void CreateSaltTest()
        {
            //Arrange
            var controller = new AccountController
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            var user = new RegisterViewModel
            {
                Email = "test@test.com",
                Password = "password123"
            };

            //Act
            var response = controller.Register(user);

            //Assert
            Assert.Fail();
        }

        [TestMethod]
        public void EncryptPasswordTest()
        {
            //Arrange

            var controller = new AccountController
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            var user = new RegisterViewModel
            {
                Email = "test@test.com",
                Password = "password123"
            };

            //Act
            var response = controller.Register(user);

            //Assert
            Assert.Fail();
        }
    }
}