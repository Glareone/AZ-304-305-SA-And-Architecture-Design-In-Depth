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
   
WHEN: 
* Workloads that are contained within a single Azure resource
* Workloads for which you need independent identities. 
 
**User-assigned:**  
You may also create a managed identity as a standalone Azure resource. You can create a user-assigned managed identity and assign it to one or more instances of an Azure service. In the case of user-assigned managed identities, the identity is managed separately from the resources that use it.

WHEN:  
* Workloads that run on multiple resources and which can share a single identity.
* Workloads that need pre-authorization to a secure resource as part of a provisioning flow.
* Workloads where resources are recycled frequently, but permissions should stay consistent.

## Vault Authentication
