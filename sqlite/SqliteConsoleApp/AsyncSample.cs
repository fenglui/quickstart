using System;
using System.IO;
using System.Collections.Generic;
using System.Text;
using Microsoft.Data.Sqlite;
using System.Diagnostics;

namespace SqliteConsoleApp
{
    public class AsyncSample : ISample
    {
        public async void Run()
        {
            var connection = new SqliteConnection("Data Source=AsyncSample.db");
            connection.Open();

            var createCommand = connection.CreateCommand();
            createCommand.CommandText =
            @"
                CREATE TABLE data (
                    value BLOB
                )
            ";
            createCommand.ExecuteNonQuery();

            // SQLite doesn't support asynchronous I/O. Instead, they recommend using a
            // write -ahead log (WAL) which improves write performance. This sample
            // demonstrates the anti-pattern of using ADO.NET's async methods with
            // Microsoft.Data.Sqlite.

            var insertCommand = connection.CreateCommand();
            insertCommand.CommandText =
            @"
                INSERT INTO data
                VALUES ($value)
            ";

            Console.WriteLine("Generating 100 MB of data...");
            var value = new byte[100_000_000];
            var random = new Random();
            random.NextBytes(value);
            insertCommand.Parameters.AddWithValue("$value", value);

            Console.WriteLine("Inserting data...");
            var stopwatch = Stopwatch.StartNew();
            var task = insertCommand.ExecuteNonQueryAsync();
            Console.WriteLine($"Blocked for {stopwatch.ElapsedMilliseconds} ms");

            stopwatch.Restart();
            await task;
            Console.WriteLine($"Yielded for {stopwatch.ElapsedMilliseconds} ms");

            // Clean up
            connection.Close();
            //File.Delete("AsyncSample.db");
        }
    }
}
