---
layout: post
date: 2018-02-24
title: "Visualizing My Climbing Route Pyramid"
---

<!--excerpt.start-->
A few years ago my climbing partner, Chris, introduced me to the idea of climbing route pyramids. It's a way of visualizing the routes you have climbed. Each row of the pyramid corresponds to a route grade (5.9, 5.10, etc) and the width of each row is proportional to the number of routes you have ticked at that grade. Climbing route pyramids can be used as a [tool for training](http://cruxcrush.com/2013/03/06/get-ready-for-spring-with-pyramid-training/). In general, I think visualizing your ticks as route pyramid is a nice way of thinking about your climbing progress. Building a solid foundation to your climbing route pyramid by climbing lots of moderate routes will give you the experience and opportunity to develop technique and efficiency that pay off when you try hard routes at the limit of your capability. I wanted a tool to check out my climbing route pyramid, so I created a simple app.
<!--excerpt.end-->

### Background
I keep track of the routes I climb using Mountain Project. The mountain project app is really convenient and it's nice to have a record and notes of past climbs so I've been collecting ticks on mountain project for a few years now. On mountain project, users have a section of their profile called Tick Breakdown, which shows some charts and statics on your ticks. A snapshot of my tick breakdown is shown below.
{% include image.html name="my-tick-breakdown.png" alt="My tick breakdown" %}

Unfortunately there is no tick pyramid on the mountain project tick breakdown page. The "routes by grade" chart in the upper left shows the same data as a tick pyramid, but the format is a bit different and I don't find it gives the same perspective as a pyramid view. The other website people use to track climbing progress, [8a.nu](https://www.8a.nu/), gives users a really nice visualization of their route pyramid. I don't have an account on 8a, but here's what [Adam Ondra's](https://www.8a.nu/scorecard/AscentList.aspx?UserId=1476&AscentType=0&AscentClass=0&AscentListTimeInterval=1&AscentListViewType=0&GID=ea0fb3b90e4b0b655580384e07974b38) tick pyramid looks like.
{% include image.html name="ondra-pyramid.png" alt="Ondra's climbing route pyramid on 8a.nu" width="400px"%}

### The App
I decided to whip up a [simple app](https://thawing-lake-70240.herokuapp.com/) to visualize my mountain project climbing ticks as a pyramid. I figured it would be easier and a lot more fun to build an app than to create an account on 8a and adding all of my ticks there. I thought about downloading my tick data and creating my route pyramid offline, but I decided it would be nice to have a tool that I could check back with from time to time as I climbed more routes, without needing to do a lot of work. I also decided that, if I was going to go through the effort to make this tool, I wanted to make something that would work for any mountain project user. [Check out the app here](https://thawing-lake-70240.herokuapp.com/). Here's what my climbing route pyramid looks like.
{% include image.html name="my-pyramid.png" alt="My climbing route pyramid" %}

I was pleasantly surprised with how well my ticks line up into a pyramid shape! I'm going to use this app to track how my pyramid evolves as I climb over the next year.

I [posted](https://www.mountainproject.com/forum/topic/114054803/ticks-as-a-route-pyramid) about this app on the mountain project forum. People generally seem to like it. Over 100 people have used the app. Several people offered ideas for way to make the app better. I added some filters to make the data more interactive. Playing with the filters, it became pretty clear that I need to work on sending more hard 5.10s and easy 5.11s to improve my sport climbing.

### The Code
The app relies on the [Mountain Project API](https://www.mountainproject.com/data). The backend runs on [Node.js](https://nodejs.org) and served by [Heroku](https://www.heroku.com/) and [mlab](https://mlab.com). The backend is really simple with just one end point: /api/tickdata which expects a json field 'email' in the request body. After a couple of requests to the mountain project API, the user's tick data is returned to the front end.

The visualization happens on the front end using [svg.js](http://svgjs.com/). This was my first exposure to creating SVG images using javascript. Both D3.js and svg.js make the process of creating visualizations simple. I opted to use svg.js since I didn't need the all of the additional functionality of D3.js.

### Summary
I'm really happy with how the app turned out. I've used Node.js in the past and it came back quickly. It was really fun to learn more about the SVG format. I'm looking forward to creating more visualizations and using SVGs in my research work and publications. There are always a few to-dos that I don't get a chance to work on. In this case, there is almost an endless list of additional features I could add, but that will have to wait - I'm going climbing!
