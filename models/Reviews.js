const mongoose = require("mongoose")

const schema = mongoose.Schema({
	id: Number,
	food: Number,
    drink: Number,
	service: Number,
	price: Number,
	noise: Number,
	atmosphere: Number,
}, {collection: "Reviews"})

module.exports = mongoose.model("Review", schema)