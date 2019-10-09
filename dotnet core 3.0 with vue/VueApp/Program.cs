using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace VueApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args)
        {
            var host = WebHost.CreateDefaultBuilder(args);
            //if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            //{
            //    host.UseIISIntegration();
            //}
            //else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
            //{
            //    host.UseKestrel();
            //}
            //host.UseKestrel();
            host.UseUrls("http://*:9001");
            host.UseStartup<Startup>();
            return host;
        }
    }
}
