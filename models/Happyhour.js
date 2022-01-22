const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    available: Boolean,
    Happyhour: [
        { Drink: String, Price: String },
        { Drink: String, Price: String },
        { Drink: String, Price: String },
        { Drink: String, Price: String },
        { Drink: String, Price: String },
        { Drink: String, Price: String }
    ]
}, { collection: "Happyhour" })

module.exports = mongoose.model("Happyhour", schema)