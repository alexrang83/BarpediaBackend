const express = require("express")
const mongoose = require("mongoose") 
const routes = require("./routes")

const port = process.env.port || 3000;

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

		app.listen(port, () => {
			console.log("Server has started!")
		})
	})