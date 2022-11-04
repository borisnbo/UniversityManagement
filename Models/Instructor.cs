namespace University.Api.Models
{
    public class Instructor
    {
        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public DateTime HireDate { get; set; }
       // public OfficeAssignment? OfficeAssignment { get; set; }
    }
}
