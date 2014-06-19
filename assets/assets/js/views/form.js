var app = app || {};

app.EventView = Backbone.View.extend({

	events: {
		'click #btnAdd': 	'remove',
	},

	template: _.template($('evet/create').html()),

	initialize: function(){

	},

	setPair: function(pair){
		this.pair = pair;
	},

	render: function(){

		if(this.model.changed.id !== undefined) return;

		this.$el.html(this.template(this.model.toJSON()));

		this.$info = this.$el.find('.timeline-heading-info');
		this.$share = this.$el.find('.timeline-heading-share');

		if(!this.pair){
			this.$el.addClass('timeline-inverted');
			this.$el.find('.timeline-info').removeClass('inverted');
		}

		return this;
	},

	remove: function(){
		this.$el.remove();
	},

	share: function(a){
		a.preventDefault();
		this.$info.animate({
			'top': '-100%'
		}, 500, function(){
			$(this).addClass('hide').attr({'style': ''})
		});
		this.$share.removeClass('hide').css({ 'top': '100%'}).animate({
			'top': '0'
		}, 500, function(){
			$(this).addClass('hold').attr({'style': ''})
		});
	}
});