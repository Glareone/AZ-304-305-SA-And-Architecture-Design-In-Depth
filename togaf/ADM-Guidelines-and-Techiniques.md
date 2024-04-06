# ADM Guidelines and Techniques

## Architecture Principles
   - enduring set of general rules and guidelines about how and how we do architecture.
   - not intended to change very often.  
Consist of:
       - business principles
       - architecture principles
       - application principles
       - technology principles
    
Five Elements of a Good Principle:
* Understandability
    - it should be easy to understand what the principle is talking about and easy to understand whether you're violating the principle or not.
* Robustness
    - each principle should be definitive and precise to support consistent decision making in complicated, controversial situations.
    - your principle should basically enable good quality decisions.
* Completeness
    - every important principle should cover every potential situation.
* Consistency
    - this element should help you to mitigate conflicts between principles.
    - for example you need to say that privacy is your paramount principle and if it is conflicting with another principle which says to "buy 3rd party software over building your own" - privacy should be your main principle.
* Stability
    - You do not want principles that change every time you go through the cycle that change every few months.
    - Principles may require clarification or refinement, but shouldnt require review very often.

**Example**: So if you make the an architecture principle that you're preferring to acquire software through third parties and only develop software, if there's no good alternatives, then when you're going through and making decisions on what's your solution for a particular problem, the solution building blocks, then you're going to look at third party software first and you're really going to need a good reason.

### Data Architecture Principles
1. "Data Trustee" - each data element has a trustee accountable for data quality.
   - This principle, if you adopt it, would say that every piece of data has a team or individual who is the owner of that, and they're responsible for keeping the data clean.  
   - So instead of having a group of databases with a bunch of data in it, and no one is the owner of that, if it's just a community ownership, then that's probably something that's going to degrade over time and no one's going to be responsible for keeping that clean. 

* Stakeholders Management
* Architecture Patterns
* Gap Analysis
* Migration Planning Techniques
* Interoperability Requirements
* Business Transformation Readiness Assessment
* Risk Management
* Architecture Alternatives and Trade-offs
