# Migration Planning Techniques
Phases E and F of the ADM are the migration planning phases, the two of them together.  
And these phases contain a number of tools for you to help do your migration planning:  
* artifacts
* matrices and tables
* business value assessment technique

## Implementation Factor Catalog Technique
And this is basically a way for you to document the factors that are going to impact the migration plan.  
So you come up, you sit down and you write out, this is the migration plan.

Factors which may affect your migration plan are typically include:
- Risks
- Issues
- Assumptions
- Dependencies
- Actions
- Impacts

**Example**  
So let's make a list, a catalog in the parlance of the TOGAF standard of all of these factors using the following structure:
![image](https://github.com/Glareone/AZ-304-305-SA-And-Architecture-Design-In-Depth/assets/4239376/33a229ed-b436-48a0-8975-a6ead162ef96)
- is an example where maybe you've, you've decided that one of your things you need to do is shut down the message center, basically having 700 employees replying to messages.
- it basically an email operation and this is going to save you lots of money. But one of your factors is going to be the fact that you have 700 people.
- You need to train them for the new email techniques.
- You maybe you need to reassign some of them to other jobs.
- And also one of the factors, of course, is the cost savings.
- You can come up with all of the different things that are part of your migration plan and what are the factors that you need to keep in mind when making certain decisions.

## Consolidated Gaps, Solutions and Dependencies
- Gap identified during phase B,C,D.
- The matrix can be used as a planning tool when creating work packages.
- Work packages identified during E and F (Opportunities and Migration Planning)

### Architecture Definition Increments Table
- You don't have to go from the baseline to the target in one step.
- You can have various transition architectures and so you're going to basically create a table of the different definition increments.
![image](https://github.com/Glareone/AZ-304-305-SA-And-Architecture-Design-In-Depth/assets/4239376/dc12ead9-1ee0-47cc-933c-7dcb53f1b634)

- Transition Architecture number one - each project on in transition architecture, number one, it's going to have these features.
- Transition Architecture number two - is going to have these features finally to the final transition.
- So the incremental deliverables across the transition architectures per project.

### Transition Architecture State Evolution Table
- it's basically the state of various architectures at various levels.
- It makes it easy for someone at a glance to see that in six months and nine months after the implementation of the first rollout, this is what features and functions were going to have.
- You can even use like a green yellow red color coding so that people will know the states of various services after each transition architecture.
![image](https://github.com/Glareone/AZ-304-305-SA-And-Architecture-Design-In-Depth/assets/4239376/75777e68-c6fe-4ce9-8b2d-d50553888a65)

### Business Value Assessment Technique
A Technique to assess the business value based on risks versus value.

Example:
- when you are in the implementation, you will have your projects in various states that are either on track or they're at risk of being behind or they're actually behind.
- And you have certain business values associated with each project.
- And so it's not enough just to know that one particular team is behind.
- But what is the impact that team being late to deliver their implementation is going to have on your overall business value?

![image](https://github.com/Glareone/AZ-304-305-SA-And-Architecture-Design-In-Depth/assets/4239376/70cff3a5-c5e3-44d7-9839-262d68468f1c)
- The size of the circle indicates the amount of money you're spending on the project or the value you're getting.
- And this green, orange, red or green, yellow, red to indicate the state of the project.
