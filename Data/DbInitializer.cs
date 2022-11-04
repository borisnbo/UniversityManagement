
using University.Api.Data;
using University.Api.Models;

namespace ContosoUniversity.Data
{
    public static class DbInitializer
    {
        public static void Initialize(SchoolContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Students.Any())
            {
                return;   // DB has been seeded
            }

            var students = new Student[]
            {
            new Student{FirstName="Carson",LastName="Alexander",EnrollmentDate=DateTime.Parse("2005-09-01")},
            new Student{FirstName="Meredith",LastName="Alonso",EnrollmentDate=DateTime.Parse("2002-09-01")},
            new Student{FirstName="Arturo",LastName="Anand",EnrollmentDate=DateTime.Parse("2003-09-01")},
            new Student{FirstName="Gytis",LastName="Barzdukas",EnrollmentDate=DateTime.Parse("2002-09-01")},
            new Student{FirstName="Yan",LastName="Li",EnrollmentDate=DateTime.Parse("2002-09-01")},
            new Student{FirstName="Peggy",LastName="Justice",EnrollmentDate=DateTime.Parse("2001-09-01")},
            new Student{FirstName="Laura",LastName="Norman",EnrollmentDate=DateTime.Parse("2003-09-01")},
            new Student{FirstName="Nino",LastName="Olivetto",EnrollmentDate=DateTime.Parse("2005-09-01")}
            };
            foreach (Student s in students)
            {
                context.Students.Add(s);
            }
            context.SaveChanges();

            var courses = new Course[]
            {
            new Course{Id=1050,Title="Chemistry",Credits=3},
            new Course{Id=4022,Title="Microeconomics",Credits=3},
            new Course{Id=4041,Title="Macroeconomics",Credits=3},
            new Course{Id=1045,Title="Calculus",Credits=4},
            new Course{Id=3141,Title="Trigonometry",Credits=4},
            new Course{Id=2021,Title="Composition",Credits=3},
            new Course{Id=2042,Title="Literature",Credits=4}
            };
            foreach (Course c in courses)
            {
                context.Courses.Add(c);
            }
            context.SaveChanges();

            var enrollments = new Enrollment[]
            {
            new Enrollment{StudentId=1,CourseId=1,Grade=Grade.A},
            new Enrollment{StudentId=1,CourseId=2,Grade=Grade.C},
            new Enrollment{StudentId=1,CourseId=3,Grade=Grade.B},
            new Enrollment{StudentId=2,CourseId=4,Grade=Grade.B},
            new Enrollment{StudentId=2,CourseId=5,Grade=Grade.F},
            new Enrollment{StudentId=2,CourseId=6,Grade=Grade.F},
            new Enrollment{StudentId=3,CourseId=1},
            new Enrollment{StudentId=4,CourseId=1},
            new Enrollment{StudentId=4,CourseId=2,Grade=Grade.F},
            new Enrollment{StudentId=5,CourseId=7,Grade=Grade.C},
            new Enrollment{StudentId=6,CourseId=1},
            new Enrollment{StudentId=7,CourseId=5,Grade=Grade.A},
            };
            foreach (Enrollment e in enrollments)
            {
                context.Enrollments.Add(e);
            }
            context.SaveChanges();
        }
    }
}