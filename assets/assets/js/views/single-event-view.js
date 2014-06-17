var app = app || {};

app.SingleEventView = Backbone.View.extend({

	template: _.template($('#item-page-template').html()),

	className: 'blog-result',

	render: function(){
		console.log(this.model.toJSON());
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});