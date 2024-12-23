# Designing Web Crawler in Practice

## From functional perspective
<img width="1035" alt="image" src="https://github.com/user-attachments/assets/1393e53c-c0cd-4380-aabc-e4e5f28455ab" />

- Seed URLs  
A web crawler uses seed URLs as a starting point for the crawl process. For example, to
crawl all web pages from a university’s website, an intuitive way to select seed URLs is to
use the university’s domain name.
To crawl the entire web, we need to be creative in selecting seed URLs. A good seed URL
serves as a good starting point that a crawler can utilize to traverse as many links as possible.
The general strategy is to divide the entire URL space into smaller ones. The first proposed
approach is based on locality as different countries may have different popular websites.
Another way is to choose seed URLs based on topics; for example, we can divide URL space
into shopping, sports, healthcare, etc. Seed URL selection is an open-ended question. You are
not expected to give the perfect answer. Just think out loud.

- URL Frontier  
Most modern web crawlers split the crawl state into two: to be downloaded and already
downloaded. The component that stores URLs to be downloaded is called the URL Frontier.
You can refer to this as a First-in-First-out (FIFO) queue. For detailed information about the
URL Frontier, refer to the deep dive.

- HTML Downloader  
The HTML downloader downloads web pages from the internet. Those URLs are provided
by the URL Frontier.

- DNS Resolver  
To download a web page, a URL must be translated into an IP address. The HTML
Downloader calls the DNS Resolver to get the corresponding IP address for the URL. For
instance, URL www.wikipedia.org is converted to IP address 198.35.26.96 as of 3/5/2019.

- Content Parser  
After a web page is downloaded, it must be parsed and validated because malformed web
pages could provoke problems and waste storage space. Implementing a content parser in a
crawl server will slow down the crawling process. Thus, the content parser is a separate
component.

- Content Seen?  
Online research [6] reveals that 29% of the web pages are duplicated contents, which may
cause the same content to be stored multiple times. We introduce the “Content Seen?” data
structure to eliminate data redundancy and shorten processing time. It helps to detect new
content previously stored in the system. To compare two HTML documents, we can compare
them character by character. However, this method is slow and time-consuming, especially
when billions of web pages are involved. An efficient way to accomplish this task is to
compare the hash values of the two web pages [7].

- Content Storage  
It is a storage system for storing HTML content. The choice of storage system depends on
factors such as data type, data size, access frequency, life span, etc. Both disk and memory
are used.
• Most of the content is stored on disk because the data set is too big to fit in memory.
• Popular content is kept in memory to reduce latency.

- URL Extractor  
URL Extractor parses and extracts links from HTML pages. Figure 9-3 shows an example of
a link extraction process. Relative paths are converted to absolute URLs by adding the
“https://en.wikipedia.org” prefix.

## Key Points to Consider (Non-functional requirements, Limitations)
• Depth-first search (DFS) vs Breadth-first search (BFS)
• URL frontier
• HTML Downloader
• Robustness
• Extensibility
• Detect and avoid problematic content

<img width="990" alt="image" src="https://github.com/user-attachments/assets/395fa595-7d09-4276-ba65-2d2ea4adb545" />

### URL Frontier taking web crawler politeness and priorities into consideration  
<img width="884" alt="image" src="https://github.com/user-attachments/assets/b27cbcb4-f14a-4fd1-bf25-542d307172a0" />

