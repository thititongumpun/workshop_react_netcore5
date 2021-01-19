using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Domain
{
    public class Question
    {
        [Key]
        public string Title { get; set; }
        public string Content { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
        public DateTime Created { get; set; }
    }
}