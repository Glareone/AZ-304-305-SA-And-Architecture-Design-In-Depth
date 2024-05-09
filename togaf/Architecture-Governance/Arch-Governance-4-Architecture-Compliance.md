# Architecture Governance. Architecture Compliance

Compliance is basically the way that you judge whether an implementation matches the requirements that have been outlined.  
It's a formal process of making sure that what's been implemented matches.

![image](https://github.com/Glareone/AZ-304-305-SA-And-Architecture-Design-In-Depth/assets/4239376/ff867caf-c854-4fa2-9f27-ec1ff821479b)


Architecture Governance metrics:
1. Irrelevant
   - It's that what development team is implemented does not include the requirement at all.
2. Consistent
   -  it means that the implementation has some features in common with the architecture specification, and the features that were implemented are actually in conformance with the specification.
   -  that also means that some features that were in the specification were not implemented.
   -  So everything that was implemented matches the specification, but not everything was implemented.
   -  You may need to go back and implement more things later.
3. Compliant
   - The opposite of this is Conformant.
   - compliant is that some features of the specification are not implemented, but all of the features implemented were in the specification.
   - if they implemented five features and all five of them were in the specification, then that's compliant.
   - then there's obviously more stuff in the architecture specification that was not implemented. 
4. Conformant
   - The opposite of Compliant
   - it's when you did more than was asked for
   - So conformant is that all the features in the specification were implemented and are good
   - but more features were implemented that are not covered by the specification.
5. Fully Conformant
    - Fully Conformant means that there's a 100% match between what was implemented and what was asked in terms of the architecture specification.
    - There's no features that were not implemented and every feature that was implemented is exactly what was asked for.
6. Non-conformant
    -  there are some features that were implemented that were implemented not according to specification.
    -  So the specification mentions features X, but when the feature X got implemented, it doesn't match the requirements.
    -  That's obviously the bad result.
    -  Bad result is that they implemented it non according to the requirement.
