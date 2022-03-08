using NUnit.Framework;
using ServiceStack.DataAnnotations;
using ServiceStack.OrmLite;
using System.Linq;

namespace OrmliteTests;

public class Tests
{
    private string cs = @"Server=127.0.0.1;Initial Catalog=friends;Persist Security Info=True;User ID=SA;Password=yourStrong1234!Password;MultipleActiveResultSets=True;";
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void Test1()
    {
        var dbFactory = new OrmLiteConnectionFactory(
                           cs,
                           SqlServerDialect.Provider);

        using (var db = dbFactory.Open())
        {
            var friends = db.Select<Friend>();
            Assert.IsTrue(friends.Any());
        }            
    }
}

[Alias("friends")]
public class Friend
{
    public int Id { get; set; }
    public string Name { get; set; }
}