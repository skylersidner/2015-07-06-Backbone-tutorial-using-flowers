// Namespace our flowerApp
var app = app || {};

// The view for all the flowers
app.allFlowersView = Backbone.View.extend({
	//again, this just sets up the tag you're going to use for this collection;
	//it's still just assigning attributes to an object
	tagName: "section",
	//again, this defines how the collection will render
	render: function() {
		//tells it to perform a function to every value in the collection array: "this.addFlower", and it tells the function the context is based on "this" (as the second argument)
		this.collection.each(this.addFlower, this);
		//ensures that what is eventually returned is something that can be harnessed in the future, rather than just a function being executed
		return this;

	},
	//"flower" picks up the current model in the .each from the collection render function
	addFlower: function(flower) {
		//identifies a variable to represent the view for the model
		var flowerView = new app.singleFlowerView ({ model: flower });
		//grabs the MODEL'S render and adds it to the collection's el object
		this.$el.append(flowerView.render().el);

	}

});