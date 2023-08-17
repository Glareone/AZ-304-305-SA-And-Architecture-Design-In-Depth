namespace WebApi_Service_Principal_test;
using System.Reflection;
using WebApi_Service_Principal_test.Endpoints;

public static class EndpointRouteBuilderExtensions
{
    public static void MapAllEndpoints(this
        IEndpointRouteBuilder app, Assembly assembly)
    {
        var endpointRouteHandlerInterfaceType =
            typeof(IEndpointRouteHandler);
        var endpointRouteHandlerTypes =
            assembly.GetTypes().Where(t =>
                t.IsClass && !t.IsAbstract && !t.IsGenericType
                && t.GetConstructor(Type.EmptyTypes) != null
                && endpointRouteHandlerInterfaceType
                    .IsAssignableFrom(t));
        foreach (var endpointRouteHandlerType in
                 endpointRouteHandlerTypes)
        {
            var instantiatedType = (IEndpointRouteHandler)
                Activator.CreateInstance
                    (endpointRouteHandlerType)!;
            instantiatedType.MapEndpoints(app);
        }
    }
}
