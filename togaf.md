# ToGAF
## Table of Content
1. [Basics](#basics)
2. [Togaf 9.x vs 10](#togaf-9x-vs-10-changes)
3. [Togaf Level 1 Certification](#togaf-level-1-certification)
4. [Togaf Level 2 Certification](#togaf-level-2-certification)
5. [7 Core Concepts](#7-core-concepts)

## Recommended courses:
https://www.udemy.com/course/togaf10-part1  


## Basics
**Architecture** by ToGAF:  
"It is the structure of components, their interrelationships and the principles and guidelines governing their design and evolution over time."
So, Architecture is:
* components of the system and their relations between each other
* AND the principles governing their design and evolution over time

**Architecture framework** answers on another question: "How do we do architecture?"  

Abbreviatures:
ADM - Architecture Development Method
Architecture Content - Artifacts, Documents, Lists, and all stuff comes to your repository
Enterprise Architecture Capability & Governance - the ability of an organization to execute its strategy effectively with the help of its architecture

### Why do I need Enterprise Architecture. Advantaged of using ToGAF and Enterprise Architecture
![image](https://github.com/Glareone/AZ-304-305-SA-And-Architecture-Design-In-Depth/assets/4239376/94262c28-5c90-4ed5-a49f-51e8c138d2de)

![image](https://github.com/Glareone/AZ-304-305-SA-And-Architecture-Design-In-Depth/assets/4239376/bf589bcb-3b64-4481-8235-ded8f91f9cbf)


## ToGAF 9.x vs 10. Changes
1. Standard Information Base -> Standards Library
2. Governance Log -> Governance Repository
3. Version number deliverables: 0.1 -> draft, 1.0 -> approved
4. (new) Architecture Alternatives
5. Architecture Building Blocks -> "ABBs" abbreviation is used
6. Solution Building Blocks -> "SBBs" abbreviation is used

## ToGAF Level 1 Certification
1. 40 questions over 60 minutes
2. multiple answers, only one correct answer
3. need to pass 55%, 22 answers out of 40 should be correct
4. each correct answer is worth 1 point

## ToGAF Level 2 Certification
1. A test how you apply the ToGAF Standard
2. Must have passed Level 1. 
3. A scenario based test, gradient scoring
4. Open Book Exam
5. 8 questions over 90 minutes
6. need 60% to pass

## The Open Group Architecture Foundation. Principles
![image](https://github.com/Glareone/AZ-304-305-SA-And-Architecture-Design-In-Depth/assets/4239376/b802ae96-b7ff-4796-a765-53d7515cd33a)

## 7 Core Concepts
* The definition of enterprise
    - Highest level of description for an organization
    - The main goal - is to find your Scope, to get where the scope is before you start. The worst - do the job for departments which never ever will read your documents
* BDAT. The Architecture Domains
    - BDAT acronym means: Business, Data, Application, Technology.
        * Business - how you accepts customers, how do you create products. Processes about how do you conduct your business.
        * Data - is about data and databases, content in these databases
        * Application - is all about software. Out of shelf software or custom designed software you use to run in your organization
        * Technology - the lowest level. Your IT infrastructure, servers, cables
* ADM. The Architecture Development Method. Phases from A -> H
    - ADM is the process you can follow to define the Enterprise architecture.
    - It consists of several phases, from A -> H in a circle:
        * Preliminary Phase - it's just setting the stage to get started and check you have all you need to get started creating enterprise architecture
        * Phase A: Vision - is about articulating the business objectives and the broader vision for your organization. It involves defining how you'll structure each architectural domain to align with and achieve these business goals.
        * Phases B, C, D: Phases related to BDAT. Putting them together you get the Enterprise Architecture. At the end of phase D you have a draft version of Enterprise Architecture.
        * Phases E, F: Planning. Address your business' readiness to transformation
        * Phase G: Implementation. You communicate with the teams and departments and say here is the plan we are going to go over next months. It should not be a shock to them.
        * Phase H: Change Management. Monitoring and making minor changes. Monitoring that your vision is being met. On this stage you can make small changes to your architecture if you see that something does not exacly working as expected without having to go through the whole cycle (A->H) again.
* Deliverables, Artifacts, and Building blocks - outputs fall under broad category named Architecture Content Framework
    - Artifacts - architectural work product which describes an aspect of the architecture. It's not a full document, it's not a draft architecture.
        * (List, Matrix, Grid, Diagram) Typically it's list or matrix that show the relationship between things. These things may go into different documents.
    - Deliverables - architectural work product that was created. It's formally reviewed, approved, and signed off by stakeholders.  
      For deliverables you should make their copies and version them to be able to get back to one of previous versions created a long ago.
        * The result of ADM process is the set of key deliverables.
        * They might be Architectural Specifications for DBAT
        * Migration Plans
        * Implementation Plans
        * They specify the output of the entire process.
    - ABBs. Architecture Building Blocks - potentially reusable components and designs. You could reuse your diagrams on other iterations. For example if you have an architecture for a call center you may reuse it if you need another call center for another purposes.
    - SBBs. Solution Building Blocks - this is how the required capability is implemented. Talking about call center from ABB, the solution will be the software, the people, the building, the floor. Those are building blocks for solutions.
* The Enterprise Continuum
* The Architecture Repository
* Defining Architecture Capability 
