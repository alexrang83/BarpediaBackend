const mongoose = require("mongoose")

const schema = mongoose.Schema({
	id: Number,
	name: String,
	description: String,
	pic_name: String,
	closed: Number,
	hours: {
		Sunday: String,
		Monday: String,
		Tuesday: String, 
		Wednesday: String,
		Thursday: String,
		Friday: String,
		Saturday: String
	},
	phone: String,
	address: String,
	coverCharge: Number,
	line: Number
}, {collection: "Bars"})

module.exports = mongoose.model("Bar", schema)