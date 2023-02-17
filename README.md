# Architecture patterns

![image](https://user-images.githubusercontent.com/4239376/193664508-ce5aebaf-4212-4473-a924-def6d0d00620.png)


# Architecture Influence Cycle

![image](https://user-images.githubusercontent.com/4239376/216790069-a05f07e9-1130-44b3-8103-cc35a8e9e5e6.png)

# Architecture Materials. General Materials

## Materials
* DDD, Hexagonal, Onion, Clean, CQRS: https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/  
* Anemic model (Fowler): https://martinfowler.com/bliki/AnemicDomainModel.html
* Anemic model vs Full Domain Model (Fowler): https://martinfowler.com/bliki/AnemicDomainModel.html

## Jeffrey Richter's Course. Slides
[?aaS Cloud course from Jeffrey Richter](https://www.youtube.com/watch?v=LkJr0Ld85AE&list=PL9XzOCngAkqs0Q8ZRdafnSYExKQurZrBY&index=4)   
[Jeffry Richter Presentation, Why cloud apps, Embracing Failures, Orchestrators, Virtualization.pptx](https://github.com/Glareone/AZ-304-SA-Azure-Architect-Design/files/8095517/Jeffrey.Richter.Part1.pptx)  
[Jeffrey Richter Presentation, Regions and Microservices.pptx](https://github.com/Glareone/AZ-304-SA-Azure-Architect-Design/files/8173857/Jeffrey.Richter.Part2.pptx)  
[Jeffrey Richter, Scaling, 12-Factor, Containers.pptx](https://github.com/Glareone/AZ-304-SA-Azure-Architect-Design/files/8193156/Jeffrey.Richter.Part3.pptx)  
[Jeffrey Richter, Docker, Hyper-V containers, Containerd runtime, CI and CD.pptx](https://github.com/Glareone/AZ-304-SA-Azure-Architect-Design/files/8205732/Jeffrey.Richter.Part.4.pptx)  
[Jeffrey Richter, API Versioning, Troubleshooting, Steps towards Microservices(what need to take into account).pptx](https://github.com/Glareone/AZ-304-SA-Azure-Architect-Design/files/8446143/Jeffrey.Richter.Part.5.pptx)  
[Jeffrey Richter, Idempotency, Retry Policy, Exactly Once Strategy.pptx](https://github.com/Glareone/AZ-304-SA-Azure-Architect-Design/files/8492428/Richter.s.Club.Part.6.pptx)

<details>
<summary>8 Fallacies of Distributed Computing Explained</summary>
  [8_Fallacies_of_Distributed_Computing_Explained.pdf](https://arnon.me/wp-content/uploads/Files/fallacies.pdf)  
  ![image](https://user-images.githubusercontent.com/4239376/160911869-107d5917-fbaa-4a1f-87c9-9c30d953b607.png)
</details>

<details>
<summary>4 Reasons to split monolith onto microservices. Richter's slide</summary>

![4 reasons to split the monolith onto microservices](https://user-images.githubusercontent.com/4239376/156473112-b224feef-fec9-4184-8d58-b5a40ee6005a.png)
</details>

<details>
<summary>twelve factor application (12 factor explained)</summary>

[The twelve factor application (12-factor)](https://12factor.net/)  
</details>

# Carnegie Mellon Univercity
## Attribute-Driven Design (ADD)
<details>
<summary>Attribute-Driven Design in details</summary>

![image](https://user-images.githubusercontent.com/4239376/219737318-33fdf14c-4016-4b84-aa1f-1fd1d98d69fa.png)
![image](https://user-images.githubusercontent.com/4239376/219737873-0937a52a-1cff-45d6-9f9e-7641bc8a0812.png)
![image](https://user-images.githubusercontent.com/4239376/219737976-69233f3c-1892-485c-a3f8-b0622fbdb769.png)
![image](https://user-images.githubusercontent.com/4239376/219738102-f4737655-fa84-449b-9e7f-c004eaf815b3.png)
![image](https://user-images.githubusercontent.com/4239376/219738215-f930b053-57e1-4c80-b4a2-8137cafb60e8.png)
![image](https://user-images.githubusercontent.com/4239376/219738320-b984478d-3469-4b6d-ad35-6ac1638b58d4.png)
</details>

## Quality Attributes. Tactics to achieve Quality Attributes
<details>
<summary>Quality attributes. How better bescribe them. Concrete examples.</summary>

Instead of just saying that performance is important for you - you need to create scenarios.  
Each scenario should have 6 points starting from **what's happening**, **from where this stimulus comes**, **in which circumstances**, and until **how to react**
![image](https://user-images.githubusercontent.com/4239376/216836571-6a032251-b01c-4c98-8d17-37be0e318ef2.png)

![image](https://user-images.githubusercontent.com/4239376/216837073-309a98a0-1646-427e-a5dd-459d5a9d56ac.png)
  
![image](https://user-images.githubusercontent.com/4239376/216837142-53749ba5-7047-407d-9552-2113b9ea93de.png)

# Scenario for Availability. First slide - all spectre what's covered. The second and third - what we exactly handle and what we expect
![image](https://user-images.githubusercontent.com/4239376/216837612-503affeb-d665-4e16-8c5b-61c0c3ccba99.png)
![image](https://user-images.githubusercontent.com/4239376/216837663-e859d2d2-2b06-4fe9-aba5-2af9381015c2.png)
![image](https://user-images.githubusercontent.com/4239376/216837739-a9fd6d0e-6640-4764-b49c-65e0869e08f0.png)

</details>

<details>
<summary>Tactics to achieve Quality Attributes. Examples for Availability. Recovery From Faults</summary>

![image](https://user-images.githubusercontent.com/4239376/219443466-cafefd3a-c0e4-4b13-a899-85c3fefedbe3.png)

* as example: for Availability you need to care about
  - Passive redundancy - copy your data\state to extra instances and make hot replacement when needed
  - Condition Monitoring - control when failure occured in your instance and react on this event - restart instance, isolate, etc.

# Example of Tactics. Detect Faults
![image](https://user-images.githubusercontent.com/4239376/219454833-6dcd413d-4c1c-431e-a486-ae217ae1e25b.png)
![image](https://user-images.githubusercontent.com/4239376/219454878-86e76828-e622-45a5-8a70-fee5a637df05.png)

* Voting is used in airplanes where several processes make same calculations in parallel and majority wins. 
  - Usually system element as Monitor is looking at the output of each process. If one of processes shows wrong results - it's deemed to be faulty. 

## Recovery from Faults
![image](https://user-images.githubusercontent.com/4239376/219455672-4168787e-0661-4fb9-a8a0-09d82a73a32d.png)
![image](https://user-images.githubusercontent.com/4239376/219457315-12f9a0ce-23e0-43ca-880b-545e6f7955f0.png)
![image](https://user-images.githubusercontent.com/4239376/219457198-9453516c-c94b-4f78-b674-36ee65cafc5f.png)

## Prevent Faults
![image](https://user-images.githubusercontent.com/4239376/219458116-d4b56387-3cea-45b1-a12e-261c91b38ab3.png)
</details>

## Carnegie Mellon Univercity Slides. Solution Architecture Principles in Practice
[Solution Architecture Principles in Practice.pdf](https://github.com/Glareone/AZ-304-SA-Azure-Architect-Design/files/10609704/SAPP.V13.-.2021.pdf)  
[Solution Architecture Principles in Practice,_Student_Workbook_2020.pdf](https://github.com/Glareone/AZ-304-SA-Azure-Architect-Design/files/10609706/SAPP_Student_Workbook_2020.pdf)  


# Architecture Materials. AZ-304 SA Azure Architecture Design Exam materials

## Powershell intro
[powershell materials coming from Skylines Academy](https://slstudentpublic.blob.core.windows.net/operations/PowerShell%20Guide_AZ__Skylines%20Academy-v3-Student.pdf)

<details>
<summary>SLA, SLO, SLI</summary>
Difference: https://www.atlassian.com/incident-management/kpis/sla-vs-slo-vs-sli   
* SLI Explained in details:  
http://cs.brown.edu/courses/csci2952-f/slides/Class9.pdf  
SLI Of The Platform  
- Critical Replica Threshold = CRT  
- Available replicas = min(total available pods, CRT)  
- Replica availability = (available replicas / CRT) * 100  
- Critical Replica Availability = mean(replica availability of each service)  
</details>

## AZ-300 AZ-301 AZ-304 AZ-305 Exam tips
[AZ+301 SKYLINES ACADEMY Slides_Student_Version.pdf](https://github.com/Glareone/AZ-304-SA-Azure-Architect-Design/files/8092664/AZ%2B301%2BSlides_Student%2BVersion_Skylines%2BAcademy.pdf)

### SKYLINES ACADEMY MATERIALS:
[SECTION-1 Workload requirements](https://www.skylinesacademy.com/az301-section-1)  
[SECTION-2 Identity and Security](https://www.skylinesacademy.com/az301-section-2)  
[SECTION-3 Data Platform Solutions](https://www.skylinesacademy.com/az301-section-3)  
[SECTION-4 Business Continuity](https://www.skylinesacademy.com/az301-section-4)  
[SECTION-5 Deployment, Migration, Integration](https://www.skylinesacademy.com/az301-section-5)  
[SECTION-6 Infrastructure Strategy](https://www.skylinesacademy.com/az301-section-6)  

# [Logging. Monitoring. Design solutions for them](Logging,Monitoring.md) 
Insights and everything related to that.
* All information related to logging and monitoring are grouped here: [Logging and Monitoring Information](Logging,Monitoring.md)

# Cost Optimizations materials

# Security materials
## [Design Authorization & Authentication, Azure AD, Key Vault, Managed Identities, SAS](authentication%20authorization.md)
* Azure AD, Azure AD Connect, Azure AD Connect sync, Azure AD B2B, Azure AD B2C, Azure AD Conditional Policies
* Managed Identities, User-defined, System-defined
* Azure Key Vault, when to use  
* SAS Token, when to use  
 
All information related to Authorization and Authentication is here: [Authentication, Authorization, Azure AD and features](authentication%20authorization.md)
## [Managed Identities, Authentication Vault](service%20principals%2Cmanaged%20Identities%2Cvault%20authentication.md)

## Design Security

RBAC:  
![RBAC](https://user-images.githubusercontent.com/4239376/161835404-f9acb169-f5ed-422e-95a4-b9d86b7294ea.png)  
Policy:  
![policy](https://user-images.githubusercontent.com/4239376/161835520-9f0175eb-34e9-49fb-b560-c5243f85b8cc.png)

**Consider how Azure policy is different from role-based access control (RBAC).**  
**It’s important not to confuse Azure Policy and Azure RBAC. Azure RBAC and Azure Policy should be used together to achieve full scope control.**

1.  You use Azure Policy to ensure that the resource state is compliant to your organization’s business rules. Compliance doesn’t depend on who made the change or who has permission to make changes. Azure Policy will evaluate the state of a resource, and act to ensure the resource stays compliant.

2.  You use Azure RBAC to focus on user actions at different scopes. Azure RBAC manages who has access to Azure resources, what they can do with those resources, and what areas they can access. If actions need to be controlled, then use Azure RBAC. If an individual has access to complete an action, but the result is a non-compliant resource, Azure Policy still blocks the action.

| Area	           |  Azure Policy                                       |	Role-based Access Control                                    |
| ---------------- | --------------------------------------------------- | ------------------------------------------------------------- |
| Description      | Ensure resources are compliant with a set of rules. | Authorization system to provide fine-grained access controls. |
| Focus            | Focused on the properties of resources.             | Focused on what resources the users can access.               |
| Implementation   | Specify a set of rules.                             | Assign roles and scopes.                                      |
| Default access   | By default, rules are set to allow.                 | By default, all access is denied.                             |

<details>
<summary>Trust Center, Compliance Manager, Data Protection, Azure Security and Compliance, Blueprints</summary>

[Microsoft Trust Center](https://www.microsoft.com/en-ww/trust-center/product-overview)  
* In-depth information access tp FedRAMP, ISO, SOC audit reports, data protection white papers and different assessment reports
* Centralized resources around security, compliance and privacy

[Compliance Manager](https://compliance.microsoft.com/compliancemanager)   
* Manage compliance from a central location
* Proactive risk assessment
* Insights and recommended actions
* Prepare compliance reports for audit

[Data Protection Resources](https://servicetrust.microsoft.com/viewpage/trustdocuments)  
* Trust documents, GDPR, Compliance guides, Pen test and Security Assessment tests

[Azure Security and Compliance, Blueprints](https://servicetrust.microsoft.com/ViewPage/BlueprintOverview)
* Industry-specific overview and guidance
* Customer responsibilities matrix
* References architectures with threat models

</details>

# Governance and Compliance materials
## Design Governance 
Lab:   
https://docs.microsoft.com/en-us/learn/paths/design-identity-governance-monitor-solutions/  

Microsoft docs:  
https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/govern/guides/  
https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/govern/guides/standard/

### Azure blueprints

With Azure Blueprints, the relationship between the blueprint definition (what should be deployed) and the blueprint assignment (what was deployed) is preserved.   
  
In other words, Azure creates a record that associates a resource with the blueprint that defines it. This connection helps you track and audit your deployments. Azure Blueprints orchestrates the deployment of various resource templates and other artifacts.

![Blueprint](https://user-images.githubusercontent.com/4239376/161837081-9e32533c-0294-40fb-b711-54ff5c7d339f.png)

**How are Azure Blueprints different from Azure Policy**  
1.  A policy is a default allow and explicit deny system focused on resource properties during deployment and for already existing resources. It supports cloud governance by validating those resources within a subscription adhere to requirements and standards.

2.  A policy can be included as one of many artifacts in a blueprint definition. Including a policy in a blueprint enables the creation of the right pattern or design during assignment of the blueprint. The policy inclusion makes sure that only approved or expected changes can be made to the environment to protect ongoing compliance to the intent of the blueprint.

### Additional Materials
[Build a cloud governance strategy on Azure](https://docs.microsoft.com/en-us/learn/modules/build-cloud-governance-strategy-azure/)  
[Describe core Azure architectural components](https://docs.microsoft.com/en-us/learn/modules/azure-architecture-fundamentals/)  
[Microsoft Cloud Adoption Framework for Azure](https://docs.microsoft.com/en-us/learn/modules/microsoft-cloud-adoption-framework-for-azure/)  
[Intro to Azure blueprints](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-blueprints/)  

# Data materials
## Design for Data Storage

* Azure SQL Server vs Azure SQL Managed Instance, difference: [CHECK THIS LINK](https://medium.com/awesome-azure/azure-difference-between-azure-sql-database-and-azure-sql-managed-instance-sql-mi-2e61e4485a65)  

In Case of AKS:  

**Infrastructure-based asynchronous replication**  
* Your apps might require persistent storage. In Kubernetes, you can use persistent volumes to persist data storage. These persistent volumes are mounted to a node VM and then exposed to the pods. Typically, you provide a common storage point where apps write their data. This data is then replicated across regions and accessed locally, as displayed in the following graphic.  
![image](https://user-images.githubusercontent.com/4239376/162592090-a7dcaf19-4520-43a5-92a4-c432ced9e304.png)

**Application-based asynchronous replication**  
* Kubernetes currently provides no native implementation for application-based asynchronous replication. However, because containers and Kubernetes are loosely coupled, you should be able to use any traditional app or language approach to replicate storage.  
![image](https://user-images.githubusercontent.com/4239376/162592096-c469aebf-51ec-4b41-965e-36210c5c3f0a.png)

**Consider Azure Backup or Velero**  
As with any app, it's important you back up the data related to your AKS clusters and their apps. When your apps consume and store data which is persisted on disks or in files, you should schedule frequent backups or take regular snapshots of that data. You can use several tools for these backup operations, including:  

* Azure Disks: Azure Disks can use built-in snapshot technologies. However, your apps might need to flush writes-to-disk before the snapshot operation.

* Velero: Velero can back up persistent volumes along with additional cluster resources and configurations.

## Design for Relational Data Storage
* [General Purpose:](https://docs.microsoft.com/en-us/learn/modules/design-for-high-availability/6-recommend-solution-for-relational-data-storage)  
![image](https://user-images.githubusercontent.com/4239376/162592247-1a1165a2-bb1c-4b18-ab2b-ba5a70853f95.png)

* [Business Critical Tier:](https://docs.microsoft.com/en-us/learn/modules/design-for-high-availability/6-recommend-solution-for-relational-data-storage)  
The next service tier to consider is Business Critical, which can generally achieve the highest performance and availability of all Azure SQL service tiers (General Purpose, Hyperscale, Business Critical). Business Critical is meant for mission-critical applications that need low latency and minimal downtime.

![image](https://user-images.githubusercontent.com/4239376/162592250-d8011db7-7076-4b5d-8bf6-8f0cff7691fa.png)


* [Hyperscale](https://docs.microsoft.com/en-us/learn/modules/design-for-high-availability/6-recommend-solution-for-relational-data-storage)
The Hyperscale service tier is currently available for Azure SQL Database, and not Azure SQL Managed Instance. This service tier has a unique architecture because it uses a tiered layer of caches and page servers to expand the ability to quickly access database pages without having to access the data file directly.

![image](https://user-images.githubusercontent.com/4239376/162592288-e356d6d2-ce51-43c3-b242-3da051f5c880.png)

### Active Geo-Replication
![image](https://user-images.githubusercontent.com/4239376/162592346-69027042-6b4c-4b2d-a5a5-4bc054f9394a.png)
Active geo-replication is available for:    
* Azure SQL Database: You can configure active geo-replication for any database in any elastic database pool.   
You can use active geo-replication to:   
* Create a readable secondary replica in a different region.  
* Fail over to a secondary database if your primary database fails or needs to be taken offline.  

## Design for Storage Accounts
## Design for Backups and Recovery
## Design Networking

### Traffic Manager
![traffic manager](https://user-images.githubusercontent.com/4239376/162591418-4fbb911b-b8b7-4e92-b125-f5ce75e0514a.png)

**Failover scenarios:**  

![image](https://user-images.githubusercontent.com/4239376/162591580-754d5eb3-e634-4baa-8373-3af2109558a1.png)

* Manually, by using Azure DNS, this failover solution uses the standard DNS mechanism to fail over to your backup site. This option works best when used in conjunction with the cold standby or the pilot light approaches.

* Automatically, by using Traffic Manager, with more complex architectures and multiple sets of resources capable of performing the same function, you can configure Azure Traffic Manager (based on DNS). Traffic Manager checks the health of your resources and routes the traffic from the non-healthy resource to the healthy resource automatically.

High Availability with Traffic Manager:
| Approach |	Description |
| -------- | ------------ |
| Active/Passive with cold standby	| Your VMs (and other appliances) that are running in the standby region aren't active until needed. However, your production environment is replicated to a different region. This approach is cost-effective but takes longer to undertake a complete failover. |
| Active/Passive with pilot light	| You establish the standby environment with a minimal configuration; it has only the necessary services running to support a minimal and critical set of apps. In its default form, this approach can only execute minimal functionality. However, it can scale up and spawn more services, as needed, to take more of the production load during a failover. |
| Active/Passive with warm standby | Your standby region is pre-warmed and is ready to take the base load. Auto scaling is on, and all the instances are up and running. This approach isn't scaled to take the full production load but is functional, and all services are up and running. |


<details>
<summary>Forward & Reverse Proxies</summary>

  When people talk about proxy they usually mean forward proxy.  
  Forward proxy - kind of proxy when you have a several services which reach one resource in the internet. And you may create a service which adds some information (headers) to such request and\or transform them somehow before forwarding (change the address of destination).  
  Good forward proxy example: Fiddler;  
    
    
  Good reverse proxy examples: Nginx, IIS, API Gateway, Load Balancer, etc.  
You may need them for:    
  1. Manage calls coming to your services (Being a facade of your services)
  2. Check whether coming calls which have basic authentication - are able to interact with the service
  3. Load Balancing (on OSI level4 for TCP and UDP traffic and for OSI level7 for HTTP\HTTPS traffic)
  4. SSL termination - request coming to reverse proxy (Nginx for example) may be HTTPS, but forwarded request will be http
  5. Caching mechanisms
  6. Throttling - to control the input, e.g. amount of requests per seconds 
  7. Billing - to control the amount of requests and to help making a bill for them  
  8. DDos mitigation  
  9. Retry Policy. It may automatically make a retry to another service instance behind it if the certain one is unreachable    
![image](https://user-images.githubusercontent.com/4239376/160917251-4cdcd9b5-f2cb-449f-89b3-38ce42d11def.png)  
  
  Reverse proxy example. RP-I is Reverse proxy and it plays a load balancer role here.  

> **_NOTE:_** It's impossible to keep endpoints in sync as service instances come\go. Client code must be robust against this  

![image](https://user-images.githubusercontent.com/4239376/160920117-1ac1ab2b-7131-40b8-a56e-79c9314e98d9.png)  

  Another example of reverse proxy with load balancer + healthcheck role  
![image](https://user-images.githubusercontent.com/4239376/160923562-490c43b1-efe8-4ea0-86e0-ce2b47b49f90.png)


</details>


