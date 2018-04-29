---
layout: post
date: 2018-03-11
title: "Mapping the Places I've Been"
---

<!--excerpt.start-->
I really enjoy reflecting on all the amazing places I've visited. I've been planning to create a "Place's I've Been Map" ever since I was inspired by [Dominik Schwarz](http://www.dominik-schwarz.net/potpourri/worldmap/). One day I will make my very own wall-size world map of places I've been. While I'm waiting for that day to come, I made a digital version.
<!--excerpt.end-->

It's really fun to think about each of the pins on the map. As much as I want to explore new places, there's so much to see everywhere you go. I feel I've only seen a tiny glimpse of so many of the places that I've visited. It's hard to choose whether to plan a trip somewhere new or return to places like Asheville, NC or Teton National Park.


<div id='map' style='width: 100%; height: 350px;'></div>
<script src="{{ site.github.url }}/public/places.js"></script>
<script>
	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 40.023754, lng: -98.858601},
			zoom: 3
		});

		var pinIcon = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|ff776b",
			null, null, null, new google.maps.Size(15, 25)); 

		for (i = 0; i < places.length; i++) {
			let place = places[i];
			var marker = new google.maps.Marker({
				position: {lat: place.lat, lng:place.lng},
				map: map,
				title: place.name,
				icon: pinIcon
			});
		}
	}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAEqG5BJWqkI5lYTqE2BBkQzXrQjUifDg&callback=initMap" async defer></script>
