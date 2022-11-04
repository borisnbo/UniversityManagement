﻿namespace University.Api.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Credits { get; set; }
        public int DepartmentId { get; set; }
        public Department? Department { get; set; }
        //public ICollection<Enrollment> Enrollments { get;set; }

    }
}