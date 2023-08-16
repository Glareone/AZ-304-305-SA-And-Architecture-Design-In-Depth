# Design Service Principals
## Managed Identities
* A common challenge for developers is the management of secrets and credentials used to secure communication between different components making up a solution.
Managed identities eliminate the need for developers to manage credentials. Managed identities provide an identity for applications
to use when connecting to resources that support Azure Active Directory (Azure AD) authentication.
* Azure managed identity is a feature of Azure AD and free of charge.

![managed identities](https://user-images.githubusercontent.com/4239376/162589365-17bbe18d-cbb7-4fa8-998e-efee5025a732.png)
Resources that support system assigned managed identities allow you to:  

* Enable or disable managed identities at the resource level.
* Use RBAC roles to grant permissions.
* Review create, read, update, delete (CRUD) operations in Azure Activity logs.
* Review sign-in activity in Azure AD sign-in logs.

### System-assigned vs User-assigned managed identity
**System-assigned:**  
Some Azure services allow you to enable a managed identity directly on a service instance. When you enable a system-assigned managed identity an identity is created in Azure AD that is tied to the lifecycle of that service instance. So when the resource is deleted, Azure automatically deletes the identity for you. By design, only that Azure resource can use this identity to request tokens from Azure AD.  

![image](https://github.com/Glareone/AZ-304-SA-And-Architecture-Design-In-Depth/assets/4239376/11138262-6180-4ee0-91ad-37a64403f376)

   
WHEN: 
* Workloads that are contained within a single Azure resource
* Workloads for which you need independent identities. 
 
**User-assigned:**  
You may also create a managed identity as a standalone Azure resource. You can create a user-assigned managed identity and assign it to one or more instances of an Azure service. In the case of user-assigned managed identities, the identity is managed separately from the resources that use it.

WHEN:  
* Workloads that run on multiple resources and which can share a single identity.
* Workloads that need pre-authorization to a secure resource as part of a provisioning flow.
* Workloads where resources are recycled frequently, but permissions should stay consistent.

## Azure Key Vault, the Vault Authentication
* Azure Key Vault, in combination with managed identities for Azure resources, enables your Azure web app to access secret configuration values easily and securely without needing to store any secrets in your source control or configuration.

* Azure Key Vault uses Azure Active Directory (Azure AD) to authenticate users and apps that try to access a vault. To grant your web app access to the vault, you first need to register your app with Azure Active Directory. Registering creates an identity for the app. After the app has an identity, you can assign vault permissions to it.

* Apps and users authenticate to Key Vault using an Azure AD authentication token. Getting a token from Azure AD requires a secret or certificate because anyone with a token could use the app identity to access all the secrets in the vault. To access resources that are secured by an Azure AD tenant, the entity that requires access must be represented by a security principal. This requirement is true for both users (user principal) and applications (service principal). 

### Select application service principals
all info is here: [Microsoft Docs](https://docs.microsoft.com/en-us/learn/modules/design-authentication-authorization-solutions/9-design-service-principals)  
There are three types of service principal:

**Application**
* The type of service principal is the local representation, or application instance, of a global application object in a single tenant or directory. In this case, a service principal is a concrete instance created from the application object and inherits certain properties from that application object. A service principal is created in each tenant where the application is used and references the globally unique app object. The service principal object defines what the app can do in the specific tenant, who can access the app, and what resources the app can access. When an application is given permission to access resources in a tenant (upon registration or consent), a service principal object is created. When you register an application using the Azure portal, a service principal is created automatically. You can also create service principal objects in a tenant using Azure PowerShell, Azure CLI, Microsoft Graph, and other tools.

**Managed identity** 
* This type of service principal is used to represent a managed identity. Managed identities eliminate the need for developers to manage credentials. Managed identities provide an identity for applications to use when connecting to resources that support Azure AD authentication. When a managed identity is enabled, a service principal representing that managed identity is created in your tenant. Service principals representing managed identities can be granted access and permissions, but cannot be updated or modified directly.

**Legacy** 
* This type of service principal represents a legacy app, which is an app created before app registrations were introduced or an app created through legacy experiences. A legacy service principal can have credentials, service principal names, reply URLs, and other properties that an authorized user can edit, but does not have an associated app registration. The service principal can only be used in the tenant where it was created.

![service principals](https://user-images.githubusercontent.com/4239376/162589813-26d2631a-858e-43bb-9268-5d5c5da90d52.png)
**Applications represented in Azure AD**
There are two representations of applications in Azure AD:  

1. Application objects - Although there are exceptions, application objects can be considered the definition of an application.
2. Service principals - Can be considered an instance of an application. Service principals generally reference an application object, and one application object can be referenced by multiple service principals across directories.

**An application object has:**
* A 1:1 relationship with the software application
* A 1:many relationship with its corresponding service principal object(s).

## SAS Tokens
**A common scenario where a SAS is useful is a service where users read and write their own data to your storage account. In a scenario where a storage account stores user data, there are two typical design patterns:**  

* Clients upload and download data via a front-end proxy service, which performs authentication. This front-end proxy service allows the validation of business rules. But for large amounts of data, or high-volume transactions, creating a service that can scale to match demand may be expensive or difficult.
* A lightweight service authenticates the client as needed and then generates a SAS. Once the client application receives the SAS, it can access storage account resources directly. Access permissions are defined by the SAS and for the interval allowed by the SAS. The SAS mitigates the need for routing all data through the front-end proxy service.

# LABS
[Conditional Access](https://docs.microsoft.com/en-us/learn/modules/plan-implement-administer-conditional-access/)    
[Manage Access review](https://docs.microsoft.com/en-us/learn/modules/plan-implement-manage-access-review/)  
[B2B + MFA](https://docs.microsoft.com/en-us/learn/modules/enable-external-collaboration-with-b2b/)  
[B2C + MFA](https://docs.microsoft.com/en-us/learn/modules/enable-external-access-with-b2c/)  
