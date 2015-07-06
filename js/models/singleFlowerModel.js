// Namespace our app

//not entirely clear on what this does yet.
var app = app || {};

//backbone model extension for every instance
app.singleFlower = Backbone.Model.extend({

//not required, but sets default attributes for any instance, if none are specified during creation
	defaults: {
		color: "pink",
		img: "images/placeholder.jpg"
	},

//--------exercises below here have been commented to clarify successive ones----------

// //these go off when the model in instantiated
// 	initialize: function() {
// 		//announce creation
// 		console.log("A model instance named " + this.get("name") + " has been created and it costs " + this.get("price"));
// 		//announce changes of any kind
// 		this.on('change', function(){
// 			console.log("Something in our model has changed");
// 		});
// 		//announce price changes ONLY
// 		this.on('change:price', function(){
// 			console.log("The price for the " + this.get("name") + " model just changed to $" + this.get("price") + " dollars");
// 		});
// 	}

});