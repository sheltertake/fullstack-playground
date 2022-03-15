using Microsoft.EntityFrameworkCore;
using StarChart.Models;

namespace StarChart.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<CelestialObject> CelestialObjects { get; set; }
        public object CelestialObject { get; internal set; }

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
