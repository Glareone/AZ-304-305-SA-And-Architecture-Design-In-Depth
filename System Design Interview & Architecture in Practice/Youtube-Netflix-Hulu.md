# Designing Youtube | Netflix | Hulu
<img width="985" alt="image" src="https://github.com/user-attachments/assets/f421d9ee-8250-4325-8bfd-8f299c7ce4d6" />

## Functiona moments and Requirements
* Video uploading flow
* Video streaming flow

## Non-Functional Requirements
* Ability to upload videos fast
* Smooth video streaming
* Ability to change video quality
* Low infrastructure cost
* High availability, scalability, and reliability requirements
* Clients supported: mobile apps, web browser, and smart TV

## DAU & Costs
* Assume the product has 5 million daily active users (DAU).
* Users watch 5 videos per day.
* 10% of users upload 1 video per day.
* Assume the average video size is 300 MB.
* Total daily storage space needed: 5 million * 10% * 300 MB = 150TB
* CDN cost.
* When cloud CDN serves a video, you are charged for data transferred out of the

### CDN. Discussing how to reduce the cost of CDN might be very important on the interview
* Let us use Amazon’s CDN CloudFront for cost estimation (Figure 14-2) [3]. Assume
100% of traffic is served from the United States. The average cost per GB is $0.02.
For simplicity, we only calculate the cost of video streaming.
* 5 million * 5 videos * 0.3GB * $0.02 = $150,000 per day.

### High Level Design
<img width="802" alt="image" src="https://github.com/user-attachments/assets/661c79d6-20c5-46da-a1b3-a9050e875b82" />
* CDN and blob storage are the cloud services we will leverage.

### Video Uploading Flow
<img width="905" alt="image" src="https://github.com/user-attachments/assets/e0ccf9e5-894f-48ff-a39d-2c88e5ec8c09" />

* Load balancer: A load balancer evenly distributes requests among API servers.
* API servers: All user requests go through API servers except video streaming.
* Metadata DB: Video metadata are stored in Metadata DB. It is sharded and replicated to
meet performance and high availability requirements.
* Metadata cache: For better performance, video metadata and user objects are cached.
* Original storage: A blob storage system is used to store original videos. A quotation in
Wikipedia regarding blob storage shows that: “A Binary Large Object (BLOB) is a
collection of binary data stored as a single entity in a database management system” [6].
* Transcoding servers: Video transcoding is also called video encoding. It is the process of
converting a video format to other formats (MPEG, HLS, etc), which provide the best
video streams possible for different devices and bandwidth capabilities.
* Transcoded storage: It is a blob storage that stores transcoded video files.
* CDN: Videos are cached in CDN. When you click the play button, a video is streamed
from the CDN.
* Completion queue: It is a message queue that stores information about video transcoding
completion events.
* Completion handler: This consists of a list of workers that pull event data from the
completion queue and update metadata cache and database.
