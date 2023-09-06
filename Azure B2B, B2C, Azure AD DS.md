# Azure B2B & B2C

| If you need this	                                                                                 | Use this                               |
| -------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Provide identity and access management for employees in a cloud or hybrid environment.          	 |  Azure Active Directory (Azure AD)     |
| Collaborate with guest users and external business partners like suppliers and vendors.            |	Azure AD Business to Business (B2B)   |
| Control how customers sign up, sign in, and manage their profiles when they use your applications. |  Azure AD Business to Consumer (B2C)   |

## Azure AD Connect & Azure AD Connect cloud sync

** Tips: **
Azure AD is a multitenant, cloud-based directory

![AD Connect](https://user-images.githubusercontent.com/4239376/162587231-521d81e7-cfea-4e15-b9a8-ecdb624f0899.png)

Features:  
* Centralize identity management.
* Establish a single Azure AD instance. Reduce security risks from human errors and configuration complexity. Designate a single Azure AD directory as the authoritative source for corporate and organizational accounts.
* Don’t synchronize accounts to Azure AD that have high privileges in your existing Active Directory instance. By default, Azure AD Connect filters out these high privileged accounts.
* Turn on password hash synchronization. Password hash synchronization is a feature used to sync user password hashes from an on-premises Active Directory instance to a cloud-based Azure AD instance. This sync helps to protect against leaked credentials being replayed from previous sign-ins.
* Enable single sign-on (SSO).

### Azure AD Connect. Azure AD Password Hash Synchronization (Password Hash Sync)

![image](https://user-images.githubusercontent.com/4239376/162587500-0850cd64-825f-4b2f-bfff-3a478111befc.png)

Password hash synchronization is one of the sign-in methods used to accomplish hybrid identity. Azure AD Connect synchronizes a hash, of the hash, of a user's password from an on-premises Active Directory instance to a cloud-based Azure AD instance.

Password Hash Sync also enables leaked credential detection for your hybrid accounts. 

## Azure AD Access Review
* As new employees join, how do we ensure they have the access they need to be productive?  
* As users switch teams or leave the company, how do we make sure that their old access is removed?  

Answer: AD Access Review, https://docs.microsoft.com/en-us/azure/active-directory/governance/access-reviews-overview

## Azure AD B2B (Business to business)
![Azure AD Business to Business](https://user-images.githubusercontent.com/4239376/162587353-0ddc76be-f953-4018-b391-0f374fd5d949.png)

Flow:  
![flow](https://user-images.githubusercontent.com/4239376/162587364-dc2c22d3-1848-41e9-8d69-92279f6f4f66.png)

**Best Practices:**
* Designate an application owner to manage guest users. It’s a good idea to delegate guest user access to application owners. Application owners are in the best position to decide who should be given access to a particular application.

* Use conditional access policies to intelligently grant or deny access. Conditional access policies use factors that aren't credential-based. For example, you can make it mandatory for users to be on specific device platforms, such as Android or Windows. Another example, you can block users if they don't meet the required location criteria.

* Enable MFA. You can use conditional access policies to require a MFA process, before they can access applications. This action ensures that everyone who uses the application must pass an additional authentication challenge before accessing it.

* Integrate with identity providers. Azure AD supports external identity providers like Facebook, Microsoft accounts, Google, or enterprise identity providers. You can set up federation with identity providers so your external users can sign in with their existing social or enterprise accounts instead of creating a new account just for your application.

* Create a self-service sign-up user flow. With a self-service sign-up user flow, you can create a sign-up experience for external users who want to access your apps. As part of the sign-up flow, you can provide options for different social or enterprise identity providers, and collect information about the user. You can also Customize the onboarding experience for B2B guest users.

## Azure AD B2C (Business to customers)

* Azure AD B2C requires an Azure AD tenant. This tenant isn’t the same your organization’s Azure AD tenant. You use an Azure AD tenant to represent an organization. Your Azure AD B2C tenant represents the identities that are used for customer applications.

![Azure B2C](https://user-images.githubusercontent.com/4239376/162588146-7fb93c73-65e5-4edf-aec0-de8dbf432f4e.png)

**Best Practices:**

* Configure user journeys by using policies. A user journey is the path that you want people to take in your application to achieve their goal. For example, a user might want to make a new account, or update their profile. Azure AD B2C comes with preconfigured policies called user flows. You can reuse the same user flows across different applications. Reusing user flows creates a consistent user journey across all applications.

* Use identity providers to let users sign in using their social identities. There’s a long list of identity providers and more are being added. Social providers include Amazon, Azure AD, Facebook, LinkedIn, Twitter, and Microsoft accounts.

* Customize your user interface. You can customize the pages in your user flow. Write your own HTML and CSS or use built-in templates called page layout templates.

* Integrate with external user stores. Azure AD B2C provides a directory that can hold 100 custom attributes per user. However, you can also integrate with external systems. For example, use Azure AD B2C for authentication, but delegate to an external customer relationship management (CRM) or customer loyalty database as the source of truth for customer data.

* Third-party identity verification and proofing. Use Azure AD B2C to facilitate identity verification and proofing by collecting user data, then passing it to a third-party system to perform validation, trust scoring, and approval for user account creation.

## Azure B2B vs B2C

| Feature |	Azure AD B2B |	Azure AD B2C  |
| ------- | ------------ | -------------- |
| Purpose |	Collaborating with business partners from external organizations like suppliers, partners, vendors. Users appear as guest users in your directory. These users may or may not have managed IT. |	Customers of your product. These users are managed in a separate Azure AD directory / tenant. |
| Users |	Partner users acting on behalf of their company or employees of the company	| Customers acting as themselves. |
| Profiles | Managed through access reviews, email verification, or access/deny lists. |	Users manage their own profiles. 
| Discoverability	| Partner users are discoverable and can find other users from their organization. |	Customers are invisible to other users. Privacy and content are enforced. |
| Identity providers supported |	External users can collaborate using work accounts, school accounts, any email address, SAML and WS-Fed based identity providers, Gmail, and Facebook.	| Consumer users with local application accounts (any email address or user name), various supported social identities, and users with corporate and government-issued identities via SAML/WS-Fed based identity provider federation. |
| External user management |	External users are managed in the same directory as employees but are typically annotated as guest users. Guest users can be managed the same way as employees, added to the same groups, and so on. |	External users are managed in the Azure AD B2C directory. They're managed separately from the organization's employee and partner directory (if any). |
| Branding | Host/inviting organization's brand is used. |	Fully customizable branding per application or organization. |

## Azure Conditional Access, Policies
![image](https://user-images.githubusercontent.com/4239376/162588527-83116c26-8901-4d51-860a-49ff76ac5927.png)
* MFA
* Require access to services only through approved client applications. For example, only allow users to access Office 365 services from a mobile device if they use approved client apps, like the Outlook mobile app.
* Require users to access applications only from managed devices. 
* Block access from untrusted sources, such as access from unknown or unexpected locations.

**When to use:**
1. Use for enabling multifactor authentication for more granular control
2. Test by using report-only mode. Report-only mode allows administrators to evaluate the impact of Conditional Access policies before enabling them in their environment.
3. Exclude geographic areas from which you never expect a sign-in. 
4. Require managed devices. The proliferation of supported devices to access your cloud resources 
5. Require approved client applications. 
6. Respond to potentially compromised accounts.
7. Block access. Blocking access overrides all other assignments for a user and has the power to block your entire organization from signing on to your tenant.
8. Block legacy authentication protocols.
9. Use the `What If` tool. The [What If tool](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/what-if-tool) helps you plan and troubleshoot your Conditional Access policies.

## Azure Risk Policies, Identity Protection
Risk: https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks  
Risk detections in Azure AD Identity Protection include any identified suspicious actions related to user accounts in the directory.   

#### User risk policies. 
A user risk represents the probability that a given identity or account is compromised. For example, the user's valid credentials have been leaked.  

![risk policies](https://user-images.githubusercontent.com/4239376/162588667-59488621-6d43-48cc-9322-90727a101d3a.png)  
![risk policies flow](https://user-images.githubusercontent.com/4239376/162588679-bfe2e683-8f0d-4e2c-99ec-dbb5aee6adfa.png)  

## Azure AD DS Authentication & Authorization for File Shares

https://learn.microsoft.com/en-us/azure/storage/files/storage-files-identity-auth-domain-services-enable?tabs=azure-portal

![image](https://github.com/Glareone/AZ-304-305-SA-And-Architecture-Design-In-Depth/assets/4239376/3afbba8c-de2c-4876-aa7c-e6cf556d77d2)

![image](https://github.com/Glareone/AZ-304-305-SA-And-Architecture-Design-In-Depth/assets/4239376/d3136891-3527-40c4-bc85-0860cf92bd46)
