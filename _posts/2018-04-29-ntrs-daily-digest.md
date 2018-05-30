---
layout: post
date: 2018-04-29
title: "NTRS Daily Digest"
---

<!--excerpt.start-->
NASA publishes thousands of technical documents each year. In the past year, 6,240 documents were added to the [NASA Technical Reports Server (NTRS)](https://ntrs.nasa.gov/), which is the main repository where all publicly released NASA technical documents are made available. That's a lot of reports, papers, and technical documents! As a researcher at NASA, one thing I've found challenging is keeping up with all the great work that my colleagues do in my field. There's no existing system or software that lets me (or anyone else) know when someone else in the agency publishes a paper on a topic I'm interested in.<!--excerpt.end--> In fact, if a colleague who sits two offices down from me publishes a paper, I probably won't know that she published a new paper much less the title of the document until she actively reaches out to me to tell me about the new document or I stumble upon it in a [Google Scholar](https://scholar.google.com/) search. Lack of notification of new publications is a problem for me since I find a sense of belonging and connection through keeping up with my organization's progress. I refused to live like this, so I looked for a software solution.

## The Quick Fix
I'm a big fan of Google Scholar. A few years ago I learned that Google Scholar could help me keep up to date with new publications in my field in a few ways. First, by learning the keywords and names I search for, Google will recommend new papers that I might interesting. Second, I can choose to follow anyone else who has a Google Scholar profile. This latter feature was my quick fix. Many of my NASA colleagues have Google Scholar profiles, so I followed several of them and so I get an email when Google finds they have authored a new paper.

Google Scholar alerts get me about 75% of my goal. Email notifications are a perfect way to stay in the loop on new publications from my co-workers. I can scan the few email notifications that I receive each week and decide quickly if I want to read the documents. The best part about Google Scholar is that it's a great way to find out about research by folks outside NASA.

My setup with Google Scholar was simple and relatively effective. But it was incomplete and naggingly unsatisfying - why should I use an outside search service to find out about new NASA documents? Many of my colleagues at NASA do not have Google Scholar profiles, so I could not set up notifications for their publications (I suppose I set up Google Alerts for the names of colleagues without Google Scholar profiles, but that feels too creepy). If only NTRS had a similar notification system to Google Scholar.

## NTRS RSS
I dug into all the different options on the NRTS homepage. Right away I saw an RSS feed. Perfect! I don't have an RSS reader that I use regularly, but I do pipe a few RSS feeds to my inbox via [IFTTT](https://ifttt.com/applets/147561p-rss-feed-to-email). I checked out the RSS feed to see what is included. For each new publication, the feed includes the title, a snippet of the abstract, and a link to the full NTRS listing. No author information. The lack of author information is a big draw-back since one of my main interests is following publications by certain people. I decided that I could live without the authors - an RSS based solution was too easy to pass up even if it was not perfect. However, a bit more investigation revealed that the feed was last updated in June 2017, almost a year ago! Most RSS feeds are updated daily or even more frequently. Updating an RSS very infrequently defeats the purpose. I don't know for sure, but I guess the feed is down. So, I gave up on the RSS feed and looked for other alternatives.

## NTRS Daily Digest
I scoured the possibilities to generate notifications from NTRS until I came across an advanced search option that allows for searching for documents by acquisition date. Searching for documents acquired since yesterday gives a listing of all the new documents added in the past day! With this information I could create an automated daily digest email that summarized all of the new publications added to NTRS in the past 24 hours. Thus the NTRS Daily Digest idea was born.

### The Process
I've got an example of the NTRS Daily Digest email below. But first, let's take a look under the hood. I built the NTRS Daily Digest in a couple days using Node.js. The process to generate the NTRS Daily Digest email is straightforward. The app loads the publications added to NTRS in the past 24 hours using the advanced search option mentioned above. The app requests the data as XML and parses it with [cheerio](https://github.com/cheeriojs/cheerio). Then, by looping through each record, the app collects the title, abstract, and authors for each new article.

After collecting the new records, the app creates a slick looking HTML email and fires it off to me. It turns out creating HTML emails that look good on all email clients (Gmail, mobile, outlook, ...) is super hard. I used a package called [mjml](https://mjml.io/) that does the heavy lifting. For templating, the app makes use of [handlebars](http://handlebarsjs.com/). I played around with the templating capabilities of mjml, but they were too limited. So the email is generated as follows. First, the app reads in a template (mjml) file. Running the file through handlebars introduces the articles and other context-specific information. Then, the file is converted from mjml to HTML. Finally, the app sends the email using [nodemailer](https://nodemailer.com/about/). The app is running on Heroku and gets kicked off once a day using the [Heroku Scheduler](https://devcenter.heroku.com/articles/scheduler) add-on.

### An Example
Here is an example of the final product. I've linked the article titles to the listing and the author names to an author name search on NTRS.
{% include image.html name="example-email2.png" alt="Example NTRS Daily Digest email." %}
<br>
<br>
This example is pretty typical of what I see each day, with the one exception that this example has a lot of patents!

In case you are curious I used a command line tool called [wkhtmltoimage](https://wkhtmltopdf.org/) to convert the HTML email to an image file for the example shown above.

## Next Steps
The NTRS Daily Digest email has been illuminating in that every day I'm amazed by the diversity and depth of the work that NASA is conducting. Some days the email has over 50 new publications. I can skim through the list quickly, but it's like drinking from a firehose. I think grouping the publications by type would help make the email a bit easier to skim.

My first priority in building on this app is to create a version that allows me to follow publications by specific authors, just like Google Scholar. I'm planning to make a generic filtering capability so that I can filter by keyword or author name.

I think many of my NASA colleagues would find this app useful, so I'm also thinking about adding the ability for new users to sign up. For now, it's all mine!
