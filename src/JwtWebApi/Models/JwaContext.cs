using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using JwtWebApi.Models.Entities;



namespace JwtWebApi.Models
{
    public class JwaContext : DbContext
    {
        public JwaContext() : base("JwaConnection")
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Book> Books { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingEntitySetNameConvention>();
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Entity<User>().HasMany(r => r.Roles);
            modelBuilder.Entity<Role>().HasMany(u => u.Users);

            base.OnModelCreating(modelBuilder);
        }
    }
}