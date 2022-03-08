using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System.Linq;

namespace EFCoreTests;

public class EFCoreCrudTests
{
    private string cs = @"Server=127.0.0.1;Initial Catalog=friends;Persist Security Info=True;User ID=SA;Password=yourStrong1234!Password;MultipleActiveResultSets=True;";

    [Test]
    public void SelectFriendsShouldReturnSomeRecord()
    {
        var contextOptions = new DbContextOptionsBuilder<FriendContext>()
            .UseSqlServer(cs)
            .Options;

        var context = new FriendContext(contextOptions);
        var friends = context.Friends.ToList();
        Assert.IsTrue(friends.Any());
    }
}

public class FriendContext : DbContext
{
    public FriendContext(DbContextOptions<FriendContext> options) : base(options)
    { }

    public virtual DbSet<Friend> Friends { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        modelBuilder.Entity<Friend>(entity =>
        {
            entity.HasKey(x => x.Id);
        });
    }

}
public class Friend
{
    public int Id { get; set; }
    public string Name { get; set; }
}