var app = app || {};

app.Event = Backbone.Model.extend({
	defaults: {
		date: new Date(),
		title: 'Evento sin título',
		description: 'Evento sin descripción',
		imageURL: ''
	},
	hasImage: function(){
		return imageURL !== '';
	}
});