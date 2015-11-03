using System.Collections.Generic;

namespace JwtWebApi.Models.Entities
{
    public class User
    {
        public User()
        {
            Roles = new List<UserRole>();
        }
        public int Id { get; set; }
 public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string Salt { get; set; }

        public virtual ICollection<UserRole> Roles { get; set; }
    }
}