var app = app || {};

var form = Backbone.View.extend({	

	el: '#main-content',

	itemTemplate: _.template($('#item-add-event-template').html()),

	events: {
		'click #btnAdd': 'create',
	},

	initialize: function(){
    //Params form for event object
    this.$date=this.$('#date-add');
    this.$title=this.$('#title-add');
    this.$description=this.$('#description-add');
    this.$imageURL=this.$('#imageURL-add');

	},

	create:function(){
		
		//Create new object event
		var objEvent=Event.create{
		 date:date,
		 title:title,
		 description:description,
		 imageURL:imageURL	
		};

		//Save 
		objEvent.save();

		//Collections
		var collectionEvent=new Events();
		collectionEvent.add(objEvent);
	},
});

app.timeline = new Timeline();