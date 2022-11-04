namespace University.Api.Models
{
    public class Student
    {
        // on ne va plus avancer sur ce projet car l'analyse n'est plus coherente.
        // un cour appartient a plusieurs filieres, et une filiere pour un departement, ...
        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public DateTime EnrollmentDate { get; set; }

        //public ICollection<Enrollment> Enrollments { get; set; }
    }
}
