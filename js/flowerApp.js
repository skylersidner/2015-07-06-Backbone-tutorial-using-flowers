
//creates instances of these three objects; some rely on default attributes set in singleFlowerModel.js
var redRoses = new app.singleFlower({
	name: "Red Roses",
	price: 39.95,
	color: "Red",
	img: "images/redRoses.jpg",
	link: "redRose"
});

var rainbowRoses = new app.singleFlower({
	name: "Rainbow Roses",
	price: 29.95,
	color: "orange",
	link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
	name: "Heirloom roses",
	price: 19.95,
	img: "images/heirloomRoses.jpg",
	link: "heirloomRose"
});

var sunflowers = new app.singleFlower({
	name: "Sunflowers",
	price: 15.95,
	link: "sunflower",
	color: "yellow"
});

var flowerGroup = new app.FlowersCollection([
	
	redRoses, 
	rainbowRoses,
	heirloomRoses,
	sunflowers

	]);

var flowerGroupView = new app.allFlowersView({ collection: flowerGroup});

$("#allFlowers").html(flowerGroupView.render().el);

var flowerRouter = new app.Router();

Backbone.history.start();

//--------exercises below here have been commented to clarify successive ones----------

// //add an object to the "collection" array via the "add" method, then print to console.
// flowerGroup.add(heirloomRoses);
// console.log(flowerGroup.toJSON());
// //remove an object from the collection by using "remove".
// flowerGroup.remove(heirloomRoses);
// console.log(flowerGroup.toJSON());


// //change the price of an object to trigger announcement via console
// rainbowRoses.set('price', 20);


// /*
// Challenge Part 1!
// Create two new model instances;
// Base them on app.singleFlower model;
// "Tantalizing Tulips" & "Fleur-de-lis";
// Give them a price and color;
// Add them to "EuropeanFlower" collection;
// */

// var tantalizingTulips = new app.singleFlower({
// 	name: "Tantalizing Tulips",
// 	price: 22.95,
// 	color: "blue",
// 	link: "tantalizingTulips"
// });

// var fleurDeLis = new app.singleFlower({
// 	name: "Fleur-De-Lis",
// 	price: 39.50,
// 	color: "lavender",
// 	link: "fleurDeLis"
// });


// var europeanFlower = new app.FlowersCollection([
	
// 	tantalizingTulips, 
// 	fleurDeLis

// 	]);

// /*
// Challenge Part 2!
// Change instance properties of Fleur-De-Lis:
// Create a key: "originCountry"
// Create a value: "Holland"

// Create two console messages:
// One that appears on instance changes
// One that displays the collection structure
// */

// fleurDeLis.set("originCountry", "Holland");
// // (I added some code to allFlowers.js that causes an announcement to console when the collection changes, too)
// console.log(europeanFlower.toJSON());


// console.log(heirloomRoses.toJSON());
// console.log(rainbowRoses.toJSON());
// console.log(redRoses.toJSON());