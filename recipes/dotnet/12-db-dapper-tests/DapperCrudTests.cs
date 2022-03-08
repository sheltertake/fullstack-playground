using Dapper;
using NUnit.Framework;
using System.Data.SqlClient;
using System.Linq;

namespace DapperTests;

public class DapperCrudTests
{
    private string cs = @"Server=127.0.0.1;Initial Catalog=friends;Persist Security Info=True;User ID=SA;Password=yourStrong1234!Password;MultipleActiveResultSets=True;";

    [SetUp]
    public void Setup()
    {

    }

    [Test]
    public void SelectFriendsShouldReturnRecords()
    {
        using (var con = new SqlConnection(cs))
        {
            con.Open();
            var friends = con.Query<Friend>("SELECT * FROM friends").ToList();
            Assert.IsTrue(friends.Any());
        }
    }

    //InsertWithDapperAssertRecordInserted
    //UpdateWithDapperAssertRecordUpdated
    //DeleteWithDapperAssertRecordDeleted
}

public class Friend
{
    public string Name { get; set; }
    public int Id { get; set; }
}