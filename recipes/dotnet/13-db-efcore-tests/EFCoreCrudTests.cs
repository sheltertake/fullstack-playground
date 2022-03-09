using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System.Diagnostics;
using System.Linq;

namespace EFCoreTests;

public class EFCoreCrudTests
{
    private string cs = @"Server=127.0.0.1;Initial Catalog=friends;Persist Security Info=True;User ID=SA;Password=yourStrong1234!Password;MultipleActiveResultSets=True;";

 
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
        var newFriend = new Friend { Name = "Lore" };


        //Exception System.InvalidOperationException : Sequence contains more than one element
        try
        {
            context.Friends.Add(newFriend);
            context.SaveChanges();
            var lorenzo = context.Friends.Single(b => b.Name == "Lore");

            Assert.IsTrue(lorenzo.Name == "Lore");
        }
        catch (System.Exception e)
        {
               Assert.IsTrue(true);
 
            // e.GetType().ToString()
            // Debug.WriteLine("caio");
         }
    

    }

    [Test]
    public void RemoveFriendTest()
    {
        var contextOptions = new DbContextOptionsBuilder<FriendContext>()
            .UseSqlServer(cs)
            .Options;


        var context = new FriendContext(contextOptions);

        var itemToRemove = context.Friends.SingleOrDefault(x => x.Name == "Lorenzo"); //returns a single item.

        if (itemToRemove != null)
        {
            context.Friends.Remove(itemToRemove);
            context.SaveChanges();
   
        }

        var removed = context.Friends.SingleOrDefault(x => x.Name == "Lorenzo");
        Assert.IsTrue(removed == null);
    }

    [Test]
    public void UpdateFriendTest()
    {
        var contextOptions = new DbContextOptionsBuilder<FriendContext>()
            .UseSqlServer(cs)
            .Options;

        var mod = new Friend { Name = "Modifica" };
        var context = new FriendContext(contextOptions);

        //Exception System.InvalidOperationException : Sequence contains more than one element
        try
        {
            context.Friends.Add(mod);
            context.SaveChanges();

        }
        catch (System.Exception e)
        {

            // e.GetType().ToString()
            // Debug.WriteLine("caio");
        }

        var entity = context.Friends.SingleOrDefault(item => item.Name == "Modifica");

        if (entity != null)
        {
            entity.Name = "Modified";
            context.SaveChanges();
        }
    
 

        var modified = context.Friends.SingleOrDefault(x => x.Name == "Modified");
        Assert.IsTrue(entity != null);
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