const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    available: Boolean,
    days: [
        { id: String, day: String, entertainment: [
            {Band: String, Time: String}
            ] 
        },
        { id: String, day: String, entertainment: [
            {Band: String, Time: String}
            ] 
        },
        { id: String, day: String, entertainment: [
            {Band: String, Time: String}
            ] 
        },
        { id: String, day: String, entertainment: [
            {Band: String, Time: String}
            ] 
        },
        { id: String, day: String, entertainment: [
            {Band: String, Time: String}
            ] 
        },
        { id: String, day: String, entertainment: [
            {Band: String, Time: String}
            ] 
        },
        { id: String, day: String, entertainment: [
            {Band: String, Time: String}
            ] 
        }
    ]
}, { collection: "Entertainment" })

module.exports = mongoose.model("Entertainment", schema)