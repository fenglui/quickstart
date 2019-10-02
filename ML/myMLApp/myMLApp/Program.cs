using Microsoft.ML;
using MyMLAppML.Model.DataModels;
using System;

namespace myMLApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            ConsumeModel();
        }

        public static void ConsumeModel()
        {
            // Load the model
            MLContext mlContext = new MLContext();
            ITransformer mlModel = mlContext.Model.Load("MLModel.zip", out var modelInputSchema);
            var predEngine = mlContext.Model.CreatePredictionEngine<ModelInput, ModelOutput>(mlModel);

            // Use the code below to add input data
            var input = new ModelInput();
            input.Sentiment = true;
            input.SentimentText = "This game is so dang good man";

            // Try model on sample data
            ModelOutput result = predEngine.Predict(input);
            Console.WriteLine(result.Score);
            Console.ReadLine();
        }
    }
}
