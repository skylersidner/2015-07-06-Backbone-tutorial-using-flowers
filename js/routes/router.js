// Namespace our flowerApp
var app = app || {};

app.Router = Backbone.Router.extend({

	//routes are created as a JS object where the key is the the route in the browser and the value is the function called; notice also that the keys relate to the link attribute of your flower objects, as created in flowerApp.js

	routes:{
		"": "noCopy",
		"heirloomRose" : "heirloomRoseMessage",
		"rainbowRose" : "rainbowRoseMessage",
		"redRose" : "redRoseMessage",
		"sunflower" : "sunflowerMessage"
	},

	
	noCopy: function() {
		$("#copy").html("");
	},

	heirloomRoseMessage: function() {
		$("#copy").html("Heirloom Roses are great Mother's Day flowers");
	},

	rainbowRoseMessage: function() {
		$("#copy").html("Choose Rainbow Roses for your wedding");
	},

	redRoseMessage: function() {
		$("#copy").html("On Valentine's Day, give that special someone Red Roses");
	},

	sunflowerMessage: function() {
		$("#copy").html("Sunflowers brighten up any occasion");
	}
	
});