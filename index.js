const express = require("express")
const mongoose = require("mongoose") 
const routes = require("./routes")

// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://barpedia:pennstate@cluster0.9ngoo.mongodb.net/Barpedia?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
	const app = express()
	const bodyParser = require("body-parser");

	app.use(bodyParser.urlencoded({
  		extended: true
	}));
    app.use(express.json())
    app.use("/api", routes)

		app.listen(3000, () => {
			console.log("Server has started!")
		})
	})