const mongoose = require("mongoose")

const schema = mongoose.Schema({
	id: Number,
	food: Number,
	foodCount: Number,
    drink: Number,
	drinkCount: Number,
	service: Number,
	serviceCount: Number,
	price: Number,
	priceCount: Number,
	noise: Number,
	noiseCount: Number,
	atmosphere: Number,
	atmosphereCount: Number,
}, {collection: "Reviews"})

module.exports = mongoose.model("Review", schema)