using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.SpaServices.VueDevelopmentServer;
using System.Text;
using VueApp.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Server.Kestrel.Core;

namespace VueApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                builder =>
                {
                    builder
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    //.AllowCredentials()
                    //.AllowAnyOrigin()
                    //.WithOrigins(
                    //    "https://localhost:44384", "https://192.168.0.102:62633")
                    ;
                }
               );
            });

            if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
            {
                // 允许 Kestrel InProcess Hosting 的同步 IO
                services.Configure<KestrelServerOptions>(options =>
                {
                    options.AllowSynchronousIO = true;
                });
            } else if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                // 允许 IIS InProcess Hosting 的同步 IO
                services.Configure<IISServerOptions>(options =>
                {
                    options.AllowSynchronousIO = true;
                });
            }

            services.AddControllersWithViews()
            .AddNewtonsoftJson(options => { options.SerializerSettings.DateFormatString = "yyyy-MM-dd HH:mm:ss"; });

            // In production, the React files will be served from this directory
            // services.AddSpaStaticFiles(configuration =>
            // {
            //     configuration.RootPath = "ClientApp/dist";
            // });

            services.AddSpaStaticFiles(cfg =>
            {
                cfg.RootPath = "wwwroot";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //启用 GB2312
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors("AllowAll");
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            // https://dev.to/alexeyzimarev/hacking-the-aspnet-core-react-spa-template-for-vuejs-1plg
            // https://gist.github.com/alexeyzimarev/f0262426aa38e2c1ed2913252ceb5e7a
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseVueDevelopmentServer(npmScript: "serve");
                }
            });
        }
    }
}
