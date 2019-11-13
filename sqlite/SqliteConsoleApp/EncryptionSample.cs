using Microsoft.Data.Sqlite;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

using static SQLitePCL.raw;

namespace SqliteConsoleApp
{
    public class EncryptionSample : ISample
    {
        public void Run()
        {
            const string baseConnectionString = @"Data Source=EncryptionSample.db;";

            // Notice which packages are referenced by this project:
            // - Microsoft.Data.Sqlite.Core
            // - SQLitePCLRaw.bundle_sqlcipher

            Boolean hasDatabassExists = File.Exists("EncryptionSample.db");
            Console.WriteLine($"hasDatabassExists = { hasDatabassExists }");


            // The Password keyword in the connection string specifies the encryption key
            var connectionString = new SqliteConnectionStringBuilder(baseConnectionString)
            {
                Mode = hasDatabassExists ? SqliteOpenMode.ReadOnly : SqliteOpenMode.ReadWriteCreate,
                Password = "password"
            }.ToString();

            if (false == hasDatabassExists)
            {
                using (var connection = new SqliteConnection(connectionString))
                {
                    // When a new database is created, it will be encrypted using the key
                    connection.Open();

                    var command = connection.CreateCommand();
                    command.CommandText =
                    @"
                    CREATE TABLE data (
                        value TEXT
                    );

                    INSERT INTO data
                    VALUES ('Hello, encryption!');
                ";
                    command.ExecuteNonQuery();
                }
            }

            Console.Write("Password (it's 'password'): ");
            var password = Console.ReadLine();

            connectionString = new SqliteConnectionStringBuilder(baseConnectionString)
            {
                Mode = SqliteOpenMode.ReadWrite,
                Password = password
            }.ToString();

            using (var connection = new SqliteConnection(connectionString))
            {
                try
                {
                    // If the key is incorrect, this will throw
                    connection.Open();
                }
                catch (SqliteException ex) when (ex.SqliteErrorCode == SQLITE_NOTADB)
                {
                    Console.WriteLine("Access denied.");
                    goto Cleanup;
                }

                var command = connection.CreateCommand();
                command.CommandText =
                @"
                    SELECT *
                    FROM data
                ";
                var data = (string)command.ExecuteScalar();
                Console.WriteLine(data);
            }


        Cleanup:
            File.Delete("EncryptionSample.db");
        }
    }
}
