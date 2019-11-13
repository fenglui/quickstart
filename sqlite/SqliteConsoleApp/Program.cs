using System;

namespace SqliteConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            ISample sample = null;
            //sample = new EncryptionSample();
            //sample = new AggregateFunctionSample();
            //sample = new AsyncSample();
            sample = new EFGetStarted();
            sample.Run();
        }
    }
}
