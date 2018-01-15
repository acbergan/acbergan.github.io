---
layout: page
title: Reading
---

One of my favorite pastimes is reading a great book. Here's what I've been reading recently along with a few of my thoughts from each book.<br><br>

{% for book in site.data.books %}
<div class="book">
	<div class="book-cover">
		<img src="{{ book.cover }}">
	</div>
	<div class="book-content">
		<a class="book-title" href="{{ book.amazon }}">{{ book.title }}</a><br>
		by <b>{{ book.author }}</b><br>
		{{ book.notes }} <i>{{ book.finished }}.</i>
	</div>
</div>
<br>
{% endfor %}

