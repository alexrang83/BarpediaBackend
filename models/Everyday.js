const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    available: Boolean,
    everyday: [
        { Drink: String, Price: String },
        { Drink: String, Price: String },
        { Drink: String, Price: String },
        { Drink: String, Price: String },
        { Drink: String, Price: String },
        { Drink: String, Price: String }
    ]
}, { collection: "Everyday" })

module.exports = mongoose.model("Review", schema)