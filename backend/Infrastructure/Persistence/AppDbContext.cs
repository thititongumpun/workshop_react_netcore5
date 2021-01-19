using System;
using System.Reflection;
using backend.Domain;
using Microsoft.EntityFrameworkCore;

namespace backend.Infrastruture.Persistence
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Question>().HasData(new Question { Title = "ดี", Content = "ดีๆ", UserId = "ดีๆๆ", UserName = "ดีๆๆๆๆ", Created = DateTime.Now },
                                                    new Question {Title = "ไม่ดี", Content = "ไม่ดีๆ", UserId = "ไม่ดีๆๆ", UserName = "ไม่่ดีๆๆๆๆ", Created = DateTime.Now.AddDays(1)});

            modelBuilder.Entity<Answer>().HasData(new Answer { QuestionId = 1, Content = "ดีๆ", UserId = "1", UserName = "ดีๆๆ", Created = DateTime.Now },
                                                new Answer { QuestionId = 2, Content = "ไม่ดีๆ", UserId = "2", UserName = "ไม่ดีๆๆ", Created = DateTime.Now.AddMinutes(5) });
        }
    }
}