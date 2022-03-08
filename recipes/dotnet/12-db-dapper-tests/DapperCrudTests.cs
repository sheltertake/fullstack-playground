using Dapper;
using NUnit.Framework;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace DapperTests;

public class DapperCrudTests
{
    private string cs = @"Server=127.0.0.1;Initial Catalog=friends;Persist Security Info=True;User ID=SA;Password=yourStrong1234!Password;MultipleActiveResultSets=True;";


    [Test]
    public void SelectFriendsShouldReturnRecords()
    {
        using (var con = new SqlConnection(cs))
        {
            con.Open();
            var ret = con.Execute("INSERT INTO friends(Name) VALUES( @name )", new
            {
            });
            List<Friend> friends = con.Query<Friend>("SELECT * FROM friends").ToList();
            Assert.IsTrue(friends.Any());
        }
    }


      //InsertWithDapperAssertRecordInserted
    [Test]
    public void InsertNewFriend()
    {
        using (var con = new SqlConnection(cs))
        {
            con.Open();
            var ret = con.Execute("INSERT INTO friends(Name) VALUES( @name )", new
            {
                name = "Lorenzo"
            });
            List<Friend> friends = con.Query<Friend>("SELECT * FROM friends").ToList();

            Assert.IsTrue(friends.Any());

            con.Execute("TRUNCATE TABLE friends");
        }
    }

    //InsertWithDapperAssertRecordInserted

    //UpdateWithDapperAssertRecordUpdated
    [Test]
    public void UpdateFirstFriendName()
    {
        using (var con = new SqlConnection(cs))
        {
            con.Open();
            var ret = con.Execute("INSERT INTO friends(Name) VALUES( @name )", new
            {
                name = "Lorenzo"
            });
            var updates = con.
                Execute("UPDATE friends SET name = 'Luca' WHERE Id = 1");

            List<Friend> friends = con.Query<Friend>("SELECT * FROM friends WHERE name = 'Luca'").ToList();
            Assert.IsTrue(friends.Any());
            
            con.Execute("TRUNCATE TABLE friends");
        }
    }

    //DeleteWithDapperAssertRecordDeleted
    [Test]
    public void DeleteFirstFriend()
    {
        using (var con = new SqlConnection(cs))
        {
            con.Open();
            con.Execute("INSERT INTO friends(Name) VALUES( @name )", new
            {
                name = "Lorenzo"
            });
            con.Execute("INSERT INTO friends(Name) VALUES( @name )", new
            {
                name = "Giovanni"
            });
            con.Execute("INSERT INTO friends(Name) VALUES( @name )", new
            {
                name = "Paolo"
            });

            var deleted = con.Execute("DELETE FROM friends WHERE name = 'Lorenzo'");
            
            List<Friend> friends = con.Query<Friend>("SELECT * FROM friends WHERE name = 'Lorenzo'").ToList();
            Assert.IsTrue(!friends.Any());

            con.Execute("TRUNCATE TABLE friends");
        }
    }

}

public class Friend
{
    public string Name { get; set; }
    public int Id { get; set; }
}