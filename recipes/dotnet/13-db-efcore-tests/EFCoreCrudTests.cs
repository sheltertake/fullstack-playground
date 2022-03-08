using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System.Linq;

namespace EFCoreTests;

public class EFCoreCrudTests
{
    private string cs = @"Server=127.0.0.1;Initial Catalog=friends;Persist Security Info=True;User ID=SA;Password=yourStrong1234!Password;MultipleActiveResultSets=True;";

    [Test]
    public void SelectFriendsShouldReturnSomeRecord()
    [SetUp]

    [Test]
    public void IsAnyFriendTest()
    {
        var contextOptions = new DbContextOptionsBuilder<FriendContext>()
            .UseSqlServer(cs)
            .Options;

        var context = new FriendContext(contextOptions);
        var friends = context.Friends.ToList();

        Assert.IsTrue(friends.Any());


    }


    [Test]
    public void AddNewFriendTest()
    {
        var contextOptions = new DbContextOptionsBuilder<FriendContext>()
            .UseSqlServer(cs)
            .Options;


        var context = new FriendContext(contextOptions);
        var newFriend = new Friend { Name = "Lorenz" };
        context.Friends.Add(newFriend);
        context.SaveChanges();
        var lorenzo = context.Friends.Single(b => b.Name == "Lorenz");

        Assert.IsTrue(lorenzo.Name == "Lorenz");


    }

    [Test]
    public void RemoveFirstFriendTest()
    {
        var contextOptions = new DbContextOptionsBuilder<FriendContext>()
            .UseSqlServer(cs)
            .Options;


        var context = new FriendContext(contextOptions);

        var itemToRemove = context.Friends.SingleOrDefault(x => x.Id == 1); //returns a single item.

        if (itemToRemove != null)
        {
            context.Friends.Remove(itemToRemove);
            context.SaveChanges();
        }

        var removed = context.Friends.Single(x => x.Id == 1);
        Assert.IsTrue(removed.GetType == null);
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
}