using System.Collections.Generic;

namespace FileScheduleProject.Repository
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        T GetById(object id);
        void Add(T obj);
        void Update(T obj);
        void Delete(object id);
    }

    //ref https://medium.com/net-core/repository-pattern-implementation-in-asp-net-core-21e01c6664d7
    // https://medium.com/@chathuranga94/generic-repository-pattern-for-asp-net-core-9e3e230e20cb
}
