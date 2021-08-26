const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    available: Boolean,
    days: [
        {
            id: String,
            day: String,
            info: {
                DrinkSpecials: { 
                    Event1: 
                        {Description: String, Time: String},
                    Event2: 
                        {Description: String, Time: String}
                },
                FoodSpecials: {
                    Description: String, Time: String
                }
            }
        },
        {
            id: String,
            day: String,
            info: {
                DrinkSpecials: { 
                    Event1: 
                        {Description: String, Time: String},
                    Event2: 
                        {Description: String, Time: String}
                },
                FoodSpecials: {
                    Description: String, Time: String
                }
            }
        },
        {
            id: String,
            day: String,
            info: {
                DrinkSpecials: { 
                    Event1: 
                        {Description: String, Time: String},
                    Event2: 
                        {Description: String, Time: String}
                },
                FoodSpecials: {
                    Description: String, Time: String
                }
            }
        },
        {
            id: String,
            day: String,
            info: {
                DrinkSpecials: { 
                    Event1: 
                        {Description: String, Time: String},
                    Event2: 
                        {Description: String, Time: String}
                },
                FoodSpecials: {
                    Description: String, Time: String
                }
            }
        },
        {
            id: String,
            day: String,
            info: {
                DrinkSpecials: { 
                    Event1: 
                        {Description: String, Time: String},
                    Event2: 
                        {Description: String, Time: String}
                },
                FoodSpecials: {
                    Description: String, Time: String
                }
            }
        },
        {
            id: String,
            day: String,
            info: {
                DrinkSpecials: { 
                    Event1: 
                        {Description: String, Time: String},
                    Event2: 
                        {Description: String, Time: String}
                },
                FoodSpecials: {
                    Description: String, Time: String
                }
            }
        },
        {
            id: String,
            day: String,
            info: {
                DrinkSpecials: { 
                    Event1: 
                        {Description: String, Time: String},
                    Event2: 
                        {Description: String, Time: String}
                },
                FoodSpecials: {
                    Description: String, Time: String
                }
            }
        }
    ]
}, { collection: "Specials" })

module.exports = mongoose.model("Specials", schema)