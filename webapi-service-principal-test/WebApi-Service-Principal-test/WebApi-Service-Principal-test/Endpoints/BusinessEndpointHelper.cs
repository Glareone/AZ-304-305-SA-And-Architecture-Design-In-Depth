using Azure.Core;
using Azure.Identity;

namespace WebApi_Service_Principal_test.Endpoints;
public class BusinessEndpointHelper : IEndpointRouteHandler
{
    public void MapEndpoints(IEndpointRouteBuilder app)
    {
        app.MapGet("/service-principal-token", async () =>
            {
                var tenantId = "<Service Principal TenantId. Main Screen>";
                var clientId = "<Service Principal ClientId. Main Screen>";
                var clientSecret = "<Service Principal Secret. Secret Screen>";
                var clientCredential = new ClientSecretCredential(tenantId, clientId, clientSecret);
                var token = await clientCredential.GetTokenAsync(new TokenRequestContext(new []{ ".default" }));

                return Results.Ok(token);
            })
            .WithName("Obtain token using Service Principal")
            .WithMetadata("Service Principal. Client Crendential Flow under the hood. Provides token");

    }
}