// Namespace our flowerApp
var app = app || {};

// The view for a single model view, which is one flower
app.singleFlowerView = Backbone.View.extend({
	//this sets up the tag you're going to reference and the class to associate with it
	tagName: "article",
	className: "flowerListItem",
	//this defines the template for the view; passing jquery and the correct class, with .html, to define the block that operates as the template
	template: _.template( $("#flowerElement").html() ),
	//this tells Backbone what to render for this view
	render: function() {
		//this is identifying the template to be associated with the render; it's defining the variable as a template, and passing an argument that tells it to look for a model that has been parsed to a JSON object; it is referencing the template assignment on line 10 ("template: ")
		var flowerTemplate = this.template(this.model.toJSON());
		//here, "this" is defining a backbone element based on the attributes established on lines 7 and 8 ("tagName: ", etc); it's doing this by passing the variable (pointing to the template definition) from the previous line to the .html part of the jquery reference; again, this variable points to a template based on a model, but using JSON data to construct it
		this.$el.html(flowerTemplate);
		return this;
	}, 


	//events are created as a JS object where the key is the listener and the value is the function called
	events: {
		'mouseover': 'addBgColor',
		'mouseout': 'removeBgColor'
	},
	//these are the functions defined for the events above
	addBgColor: function() {
		this.$el.addClass("bgColorImage");
	},
	removeBgColor: function() {
		this.$el.removeClass("bgColorImage");
	}

});