namespace WebApi_Service_Principal_test.Endpoints;
using Azure.Identity;
using Azure.Core;

public class ManagedIdentityHelper : IEndpointRouteHandler
{
    public void MapEndpoints(IEndpointRouteBuilder app)
    {
        app.MapGet("/default-azure-credential-token", async () =>
            {
                var credential = new DefaultAzureCredential();

                // In Token Request you must specify the scope
                var token = await credential.GetTokenAsync(new TokenRequestContext(new []{ "https://vault.azure.net" }));

                return Results.Ok(token);
            })
            .WithName("Obtain Token using DefaultAzureCredential which manages options like ManagedI")
            .Produces(StatusCodes.Status200OK, typeof(AccessToken))
            .WithMetadata("Could be run locally and in Azure. https://learn.microsoft.com/en-us/dotnet/azure/sdk/authentication/local-development-dev-accounts?tabs=azure-portal%2Csign-in-visual-studio%2Ccommand-line");

        app.MapGet("azureonly/managed-identity-token", async () =>
            {
                string userAssignedManagedIdentityClientId = "<Managed Identity ClientId>";
                var credential = new ManagedIdentityCredential(userAssignedManagedIdentityClientId);
                // also acceptable:
                // var credential = new DefaultAzureCredential(new DefaultAzureCredentialOptions { ManagedIdentityClientId = userAssignedManagedIdentityClientId });

                var token = await credential.GetTokenAsync(new TokenRequestContext(new[] { "blob.contributor" }));

                return Results.Ok(token);
            })
            .WithName("Obtain Token using Managed Identity")
            .Produces(StatusCodes.Status200OK, typeof(AccessToken))
            .WithMetadata("Could be run only in Azure. https://learn.microsoft.com/en-us/dotnet/azure/sdk/authentication/local-development-dev-accounts?tabs=azure-portal%2Csign-in-visual-studio%2Ccommand-line");

    }
}