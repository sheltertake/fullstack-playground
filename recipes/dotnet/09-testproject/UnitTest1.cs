using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;

namespace TestProject;

public class Tests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void Test1()
    {
        // arrange
        var manager = new BookManager();

        // sut
        var result = manager.GetBookById(1);

        // assert
        Assert.AreEqual("IT", result.Title);

    }


}

public class BookManager
{
    public Book GetBookById(int id)
    {
        List<Book> books = new List<Book>()
        {
            new Book {Id=1, Title="IT"},
            new Book {Id=2, Title="Divina Commedia"},
        };

        books.Add(new Book { Id = 3, Title = "Eneide" });

        var book = books.Where(x => x.Id == id).First();
        return book;
    }
}

public class Book
{
    public int Id { get; set; }
    public string Title { get; set; }
}