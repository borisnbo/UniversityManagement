using Microsoft.EntityFrameworkCore;
using University.Api.Models;

namespace University.Api.Data
{
    public class SchoolContext:DbContext
    {
        public SchoolContext(DbContextOptions<SchoolContext> options):base(options)
        {}
        
        public DbSet<Course> Courses { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Instructor> Instructors { get; set; }
        public DbSet<University.Api.Models.CourseAssignment> CourseAssignments { get; set; }
        public DbSet<University.Api.Models.Department> Departments { get; set; }
    }
}
