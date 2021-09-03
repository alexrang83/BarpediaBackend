const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: String,
	available: Boolean,
	message: String
}, {collection: "Messages"})

module.exports = mongoose.model("Messages", schema)