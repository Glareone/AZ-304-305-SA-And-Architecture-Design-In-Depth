
# Authentication & Authorization

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

## Azure AD B2B
![Azure AD Business to Business](https://user-images.githubusercontent.com/4239376/162587353-0ddc76be-f953-4018-b391-0f374fd5d949.png)

Flow:  
![flow](https://user-images.githubusercontent.com/4239376/162587364-dc2c22d3-1848-41e9-8d69-92279f6f4f66.png)

**Best Practices:**
* Designate an application owner to manage guest users. It’s a good idea to delegate guest user access to application owners. Application owners are in the best position to decide who should be given access to a particular application.

* Use conditional access policies to intelligently grant or deny access. Conditional access policies use factors that aren't credential-based. For example, you can make it mandatory for users to be on specific device platforms, such as Android or Windows. Another example, you can block users if they don't meet the required location criteria.

* Enable MFA. You can use conditional access policies to require a MFA process, before they can access applications. This action ensures that everyone who uses the application must pass an additional authentication challenge before accessing it.

* Integrate with identity providers. Azure AD supports external identity providers like Facebook, Microsoft accounts, Google, or enterprise identity providers. You can set up federation with identity providers so your external users can sign in with their existing social or enterprise accounts instead of creating a new account just for your application.

* Create a self-service sign-up user flow. With a self-service sign-up user flow, you can create a sign-up experience for external users who want to access your apps. As part of the sign-up flow, you can provide options for different social or enterprise identity providers, and collect information about the user. You can also Customize the onboarding experience for B2B guest users.
