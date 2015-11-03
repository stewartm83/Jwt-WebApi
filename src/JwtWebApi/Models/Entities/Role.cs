using System.Collections.Generic;

namespace JwtWebApi.Models.Entities
{
    public class Role
    {
        public Role()
        {
            Users = new List<UserRole>();
        }
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<UserRole> Users { get; set; }
    }
}