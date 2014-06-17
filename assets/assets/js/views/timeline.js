var app = app || {};

var Timeline = Backbone.View.extend({	

	el: '#main-content',

	itemTemplate: _.template($('#item-template').html()),

	initialize: function(){
		console.log('init timeline');

		this.$ul = this.$el.find('#timeline');
		this.$singlePost = this.$el.find('#single-post');

		this.listenTo(app.timelineItems, 'reset', this.addEvents);
		this.listenTo(app.timelineItems, 'single', this.viewPost);
	},

	addEventView: function(item){
		var index = app.timelineItems.indexOf(item) % 2 === 0,
			eventItem = new app.EventView( { model: item } );
		eventItem.setPair(index);
		this.$ul.append(eventItem.render().el);
	},

	addEvents: function(){
		console.log('timeline: add events');
		this.$ul.removeClass('hide');
		this.$singlePost.addClass('hide');
		app.timelineItems.each(this.addEventView, this);
	},

	viewPost: function(){
		console.log('timeline: View Post');
		this.$ul.addClass('hide');
		this.$singlePost.removeClass('hide').css({ 'display': 'none'}).fadeIn();
		var post = app.timelineItems.get(this.currentPost),
			postView = new app.SingleEventView({ model: post });

		this.$singlePost.html(postView.render().el);

	},

	showAll: function(){
		this.$ul.removeClass('hide').css({'display': 'none'});
		this.$singlePost.addClass('hide');
		this.$ul.fadeIn();
	}
});

app.timeline = new Timeline();