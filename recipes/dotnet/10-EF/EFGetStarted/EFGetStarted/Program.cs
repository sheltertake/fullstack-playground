using System;
using System.Linq;

namespace EFGetStarted
{
    internal class Program
    {
        private static void Main()
        {
            using (var db = new BloggingContext())
            {
                // Note: This sample requires the database to be created before running.
                Console.WriteLine($"Database path: {db.DbPath}.");

                //Create 
                Console.WriteLine("Inserting a new blog");
                db.Add(new Blog { url = "http://blogs.msdn.com/adonet" });
                db.SaveChanges();

                    //Read 
                    Console.WriteLine("Inserting a new blog");
                var blog = db.Blogs.OrderBy(b => b.BlogId).First();


                //Update 
                Console.WriteLine("Updating the blog and adding a post");
                blog.url = "https://devblogs.microsoft.com/dotnet";
                    
                    blog.Posts.Add(
                    new Post { Title = "Hello World", Content = "I wrote an app using EF!" }
                    );
                db.SaveChanges();

                //Delete
                Console.WriteLine("Delete the blog");
                db.Remove(blog);
                db.SaveChanges();

            }
        }
    }
}