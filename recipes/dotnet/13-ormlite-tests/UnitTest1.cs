using NUnit.Framework;
using ServiceStack.DataAnnotations;
using ServiceStack.OrmLite;
using System.Linq;

namespace OrmliteTests;

public class Tests
{
    private string cs = @"Server=127.0.0.1;Initial Catalog=friends;Persist Security Info=True;User ID=SA;Password=yourStrong1234!Password;MultipleActiveResultSets=True;";

    [Test]
    public void SelectFriendsTest()
    {
        var dbFactory = new OrmLiteConnectionFactory(
                           cs,
                           SqlServerDialect.Provider);
     

                
        using var db = dbFactory.Open();
      // var inserted = db.Insert(new Friend { Name = "Lorenzo", Id = 55,  });
       
        var friends = db.Select<Friend>();
  
        Assert.IsTrue(friends.Any());
    }

    [Test]
    public void InsertNewFriend()
    {
        var dbFactory = new OrmLiteConnectionFactory(
                           cs,
                           SqlServerDialect.Provider);

        using var db = dbFactory.Open();
        var inserted = db.Insert(new Friend { Name = "Lorenzo"  });
        var friends = db.Select<Friend>();

        Assert.IsTrue(inserted==1);

        var deleted = db.Delete<Friend>(x => x.Name == "Lorenzo");
    }

    [Test]
    public void UpdateFirstFriend()
    {
        var dbFactory = new OrmLiteConnectionFactory(
                           cs,
                           SqlServerDialect.Provider);

        using var db = dbFactory.Open();

        var inserted = db.Insert(new Friend { Name = "Lorenzo", Id = 1 });
        var updated=  db.UpdateOnly(() => new Friend { Name = "Primo" },
             where: x => x.Id == 1);
        var primo = db.Select<Friend>(x => x.Name == "Primo");

        Assert.IsTrue(primo.Any());
        
        
    }

    [Test]
    public void DeleteFriend()
    {
        var dbFactory = new OrmLiteConnectionFactory(
                           cs,
                           SqlServerDialect.Provider);


        using var db = dbFactory.Open();
        var inserted = db.Insert(new Friend { Name = "Eliminato" });
        var deleted = db.Delete<Friend>(x => x.Name == "Eliminato" );
        var primo = db.Select<Friend>(x => x.Name == "Eliminato");

        Assert.IsTrue(!primo.Any());


    }
}

[Alias("friends")]
public class Friend
{
 

    [PrimaryKey]
    [AutoIncrement]
    [Alias("id")]
    public int Id { get; set; }
    public string Name { get; set; }
}