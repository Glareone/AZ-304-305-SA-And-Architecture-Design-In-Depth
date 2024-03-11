# Information Systems Architecture. Data and Application Archiectures
<img width="358" alt="image" src="https://github.com/Glareone/AZ-304-305-SA-And-Architecture-Design-In-Depth/assets/4239376/4be53384-4457-4537-8068-6de547448b3b">

The strangest one.  
It almost has 2 phases in 1:  
1) Define Data Architecture
2) Deine Application Architecture

Objectives, Inputs, Steps, Outputs are almost the same for both.  

## Purpose
1) Develop the Target Information Systems Architectures
2) Develop Architecture Roadmap items based on gaps.

In other words it's the same purpose as the business phase, but now you are dealing with Data and Application (instead of Business, obviously).

## Data Architecture. Objectives
1) Data Understanding: One of the main objectives of Data Architecture is to create a unified understanding of data among all stakeholders. This includes defining key data-related terms, their meanings, and relationships.
2) Data Governance: Establishing rules for data management and usage is another goal of Data Architecture. This helps ensure data is appropriately controlled, protected, and accurate.
3) Data Integration: Data Architecture aims to facilitate smooth data integration. It ensures that data from multiple sources can be easily combined and used effectively in a unified manner.
4) Data Quality Management: Ensuring high data quality is another critical objective. By defining data standards and employing quality control measures, data architecture strives to maintain accurate, reliable, and consistent data.
5) Data Compliance: In many industries, there are regulations that govern the use and handling of information. Data Architecture needs to comply with these regulations.
6) Scalability and Performance: Data Architecture also needs to plan for the future. It must ensure that data systems can scale as volume grows and that they can deliver high performance, including fast query response times.

## Data Architectures. Inputs. 
1) External Reference Materials
2) TOGAF Series Guide: Information Architecture - Customer Master Data Management
   - Now, the data architecture does have a TOGAF series guide, and so you can recommend looking at someof the documentation around data management.
3) Request for Architecture Work (optional,from Preliminary phase)
4) Organization Capability Assessment (Phase A, same in B)
5) Communication Plan (Phase A, same in B)
6) Organization Model for Enterprise Architecture (Preliminary Phase, same in B)
7) Tailored Architecture Framework (Preliminary Phase, same in B)
8) Data Principles (The TOGAF Standard: ADM Techniques)
    - data principles and you can read about that in the specification
9) Approved Statement of Architecture Work (Phase A)
10) Architecture Vision (Phase A)
11) Architecture Repository (Preliminary Phase)
12) Draft Architecture Documents and Draft Requirements (came from Phase B)
13) Business Related Architecture Roadmap (came from Phase B)

## Data Architectures. Steps
1) Select Reference Models, Viewpoints, and Tools
2) Develop Baseline Data Architecture Description
   - We'll have to develop both the baseline, the current way that our data is architected and the target
3) Develop Target Data Architecture Description
   - We'll have to develop both the baseline, the current way that our data is architected and the target
   - data architecture involves:
      * where is the data stored?
      * what systems are the originators of the data?
      * the owners of the data?
      * How does data get distributed through your organization?
      * Do you have central data repository?
         * a SQL database or some other database that's living?
         * Is it distributed?
      * How does reporting get done?
   - All of the things that touch your data flow from office to office, person to person?
      * How does it get to where it needs to go?
      * if customer wants to update their address - how it could be done?
4) Perform Gap Analysis
   - Once you have your baseline and target architectures, you perform the gap analysis
   - then you can identify which work needs to get done
5) Define Candidate Roadmap components (components = items, they base on gap analysis)
   - How to implement the new data storage and management technologies
   - Introduction of new data governance policies
   - Initiatives for data cleansing or data migration
   - Development of a data dictionary or catalog
   - Measures to improve data security, privacy, or compliance
6) Resolve Impacts across the architecture Landscape 
7) Conduct Formal Stakeholder Review
   - you can review that design with your formal stakeholders,
   - get their sign off on that,
   - get their feedback.
8) Finalize Data Architecture
   - get everyone to say, okay, to go ahead, and then you get your architecture definition document when it comes to data.
     
## Data Architecture. Outputs
1) Refined Phase A Deliverables
2) Draft Architecture Definition Document
   - Baseline Data Architecture, Approved Version
   - Target Data Architecture, Approved Version
3) Draft Architecture Requirements Specification - gap analysis
4) Data Architecture components of an architecture roadmap:
   - How to implement the new data storage and management technologies
   - Introduction of new data governance policies
   - Initiatives for data cleansing or data migration
   - Development of a data dictionary or catalog
   - Measures to improve data security, privacy, or compliance

## Data Architecture. Artifacts Produced
1) Cataogs:
   * Data Entity / Data Component catalog
2) Matrices:
   * Data Entity / Data Function Matrix, Application/Data Matrix
3) Diagrams: Conceptual data diagram, logical data diagram, data dissemination diagram, data security diagram, data migration diagram, data lifecycle diagram

