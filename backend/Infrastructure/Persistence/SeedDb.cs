using System;
using System.Collections.Generic;
using System.Linq;
using backend.Domain;

namespace backend.Infrastruture.Persistence
{
    public class SeedDb
    {
        public static void Seed(AppDbContext context)
        {
            context.Database.EnsureCreated();

            if(context.Questions.Any())
            {
                var q = new List<Question>();
                {
                    new Question { Title = "ดี", Content = "ดีๆ", UserId = "ดีๆๆ", UserName = "ดีๆๆๆๆ", Created = DateTime.Now };
                    new Question { Title = "ไม่ดี", Content = "ไม่ดีๆ", UserId = "ไม่ดีๆๆ", UserName = "ไม่่ดีๆๆๆๆ", Created = DateTime.Now.AddDays(1) };
                }
                context.AddRange(q);
                context.SaveChanges();
            }

            if (context.Answers.Any())
            {
                var a = new List<Answer>();
                {
                    new Answer { QuestionId = 1, Content = "ดีๆ", UserId = "1", UserName = "ดีๆๆ", Created = DateTime.Now };
                    new Answer { QuestionId = 2, Content = "ไม่ดีๆ", UserId = "2", UserName = "ไม่ดีๆๆ", Created = DateTime.Now.AddMinutes(5) };
                }
                context.AddRange(a);
                context.SaveChanges();
            }
        }
    }
}

       