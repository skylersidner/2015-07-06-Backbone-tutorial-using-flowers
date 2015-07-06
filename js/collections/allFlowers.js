// Namespace our flowerApp

var app = app || {};

app.FlowersCollection = Backbone.Collection.extend({

	model: app.singleFlower,

	initialize: function() {

		this.on('change', function(){
			console.log("Something in our collection has changed.");
		});

	}

});