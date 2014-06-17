var app = app || {};

var Events = Backbone.Collection.extend({
	model: app.Event,
	url: "/event"
});

app.timelineItems = new Events();