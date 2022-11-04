﻿namespace University.Api.Models
{
    public class Department
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Decimal Budget { get; set; }
        public DateTime StartDate { get; set; }
        public int? InstructorId { get; set; }
        public Instructor? Administrator { get; set; }
    }
}
