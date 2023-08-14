# Logging. Monitoring.
All information related to monitoring is here.
###
![image](https://user-images.githubusercontent.com/4239376/156941551-f31607c3-3f0b-4f80-882e-fbe80553b3f1.png)

**Here is a list to consider ensuring you are monitoring your workloads with performance and scalability in mind:**
* Enable and capture telemetry throughout your application to build and visualize end-to-end transaction flows for the application.
* Explore metrics from Azure services such as CPU and memory utilization, bandwidth information, current storage utilization, and more.
* Use resource and platform logs to get information about what events occur and under which conditions.
* For scalability, examine the metrics to determine how to provision resources dynamically and scale with demand.
* In the collected logs and metrics identify signs that make a system or its components suddenly become unavailable.
* Use log aggregation technology to gather information across all application components.
* Store logs and key metrics of critical components for statistical evaluation and predicting trends.
* Identify antipatterns in the code.
* Follow these questions to assess the workload at a deeper level.

# Azure Monitor
Azure Monitor: provides native capabilities for IT asset monitoring, dashboarding, and alerting so you can ingest logs from VMs, services, and so on.  
Azure Monitor stores log data in a Log Analytics workspace, which is an Azure resource and a container where data is collected, aggregated, and serves as an administrative boundary.  

* Consider several workplaces if you need:
1. separate access to different logs
2. you have applications in different regions (outbound traffic)
3. different departments and groups

**Workflow deployment models:**
* Centralized(also known as "hub and spoke"): All logs are stored in a central workspace and administered by a single team, with Azure Monitor providing differentiated access per-team. In this scenario, it is easy to manage, search across resources, and cross-correlate logs.

* Decentralized: Each team has their own workspace created in a resource group they own and manage, and log data is segregated per resource. In this scenario, the workspace can be kept secure and access control is consistent with resource access, but it's difficult to cross-correlate logs. Users who need a broad view of many resources cannot analyze the data in a meaningful way.

* Hybrid: Security audit compliance requirements further complicate this scenario because many organizations implement both deployment models in parallel. This commonly results in a complex, expensive, and hard-to-maintain configuration with gaps in logs coverage.

![image](https://github.com/Glareone/AZ-304-SA-And-Architecture-Design-In-Depth/assets/4239376/0fa3a0fa-0c3b-4ec9-b6c2-8f868775a3ca)


## Azure Workspace:
It's a separate place where you can put your logs for Azure Monitor. Could be located in different region (from your application).
**Could be bound together with Azure RBAC**

**Users have two options for accessing the data:**
* Workspace-context: You can review all logs in the workspace you have permission to. Queries in this mode are scoped to all data in all tables in the workspace. This is the access mode used when logs are accessed with the workspace as the scope, such as when you select Logs from the Azure Monitor menu in the Azure portal.
* Resource-context: When you access the workspace for a particular resource, resource group, or subscription, such as when you select Logs from a resource menu in the Azure portal, you can view logs for only resources in all tables that you have access to. Queries in this mode are scoped to only data associated with that resource. This mode also enables granular Azure RBAC.

# Azure Sentinel
# Azure Insights
# Azure Workbook
Workbooks: it's a canvas for data analysis with rich abilities to create visual reports within the Azure portal.

# Azure Data Explorer
![Azure Data Explorer](https://user-images.githubusercontent.com/4239376/162288147-fd6c7d34-5c39-4fd1-a5b6-d208f06c976b.png)
* Azure Data Explorer is a fast and highly scalable data exploration service for log and telemetry data. 
* Handle the many data streams emitted by modern software, so you can collect, store, and analyze data. 
* Is ideal for analyzing large volumes of diverse data from any data source, such as websites, applications, IoT devices, and more. This data is used for diagnostics, monitoring, reporting, machine learning, and additional analytics capabilities.

**Combine features provided by Microsoft Sentinel and Azure Monitor with Azure Data Explorer to build a flexible and cost-optimized end-to-end monitoring solution**
* Use Azure Data Explorer for full flexibility and control in all aspects for all types of logs in the following scenarios:

###
# LABS AND ADDITIONAL MATERIALS
## LABS
[log lab](https://docs.microsoft.com/en-us/learn/modules/monitor-diagnose-and-troubleshoot-azure-storage/)
[incident response, alerts in Azure](https://docs.microsoft.com/en-us/learn/modules/incident-response-with-alerting-on-azure/)
## ADDITIONAL MATERIALS 
[Data Explorer materials, when to use](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-data-explorer/)
[Full Stack monitoring option, material](https://docs.microsoft.com/en-us/learn/modules/design-monitoring-strategy-on-azure/)
