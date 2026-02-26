using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using StackExchange.Profiling;
using System.Data;
using System.Data.Common;

namespace BookManagementSystem.Infrastructure
{
    public class DbHelperService : IDisposable ,IDbHelperService
    {
        private readonly IConfiguration _configuration;
        public DbHelperService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        private DbConnection GetConn()
        {
            DbConnection connection = new NpgsqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            return new StackExchange.Profiling.Data.ProfiledDbConnection(connection, MiniProfiler.Current);
        }
        public async Task<IEnumerable<T>> ExecuteQuery<T>(string sql,DynamicParameters param=null,bool isproc=false)
        {
            DbConnection conn = GetConn();
            return await conn.QueryAsync<T>(sql, param, commandType: (isproc) ? CommandType.StoredProcedure : CommandType.Text);

        }
        public void Execute(string sql, DynamicParameters param = null, bool isproc = false)
        {
            DbConnection conn =  GetConn();
            conn.Execute(sql, param, commandType: (isproc) ? CommandType.StoredProcedure : CommandType.Text);
        }
        public void Dispose()
        {
            if (GetConn().State == ConnectionState.Open)
                GetConn().Close();
        }
    }
}
