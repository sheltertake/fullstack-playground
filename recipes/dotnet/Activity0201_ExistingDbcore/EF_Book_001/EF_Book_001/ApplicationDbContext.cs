using Microsoft.EntityFrameworkCore;


namespace EF_Book_001
{
    public class ApplicationDbContext : DbContext
    {


        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }
    }
}