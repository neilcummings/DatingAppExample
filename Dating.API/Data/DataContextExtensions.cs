using System;
using System.Collections.Generic;
using Dating.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace Dating.API.Data
{
    public static class DataContextExtensions
    {
        public static void SeedData(this DataContext context)
        {
            // clear the database so we always start fresh with each demo.  Not to be used for prod
            context.Database.Migrate();
            
            context.Values.RemoveRange(context.Values);
            context.SaveChanges();
            
            // init seed data
            var values = new List<Value>()
            {
                new Value()
                {
                    Id = new Guid("25320c5e-f58a-4b1f-b63a-8ee07a840bdf"),
                    Name = "Value10"
                },
                new Value()
                {
                    Id = new Guid("a3749477-f823-4124-aa4a-fc9ad5e79cd6"),
                    Name = "Value11"
                }
            };
            
            context.Values.AddRange(values);
            context.SaveChanges();
        }
    }
}