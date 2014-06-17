var app = app || {};


var AppRouter = Backbone.Router.extend({
	routes: {
		'': 			'viewAll',
		'post/:id': 	'viewPost'
	},

	initialize: function(){
		console.log('router initialized 1');
		app.timelineItems.fetch({
			reset: true,
			success: function(){
				Backbone.history.start();
			}
		});
		console.log('router initialized 2');
	},

	viewAll: function(){
		console.log('reouter: viewAll 1');
		app.timeline.showAll();
		console.log('reouter: viewAll 2');
	},

	viewPost: function(id){
		console.log('router: viewPost 1');
		app.timeline.currentPost = id;
		app.timelineItems.trigger('single');
		console.log('router: viewPost 2');
	}
});

app.router = new AppRouter();