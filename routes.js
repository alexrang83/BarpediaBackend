var barFunctions = require("./dynamicData.js");

const express = require("express");
const Bar = require("./models/Bar");
const Review = require("./models/Reviews");
const Everyday = require("./models/Everyday");
const Entertainment = require("./models/Entertainment");
const Happyhour = require("./models/Happyhour");
const Specials = require("./models/Specials");
const Messages = require("./models/Messages.js");
const router = express.Router();



router.get("/bars", async (req, res) => {
  const bars = await Bar.find();
  res.send(bars);
});

router.post("/bars", async (req, res) => {
  const bar = new Bar({
    id: req.body.id,
    name: req.body.name,

  });
  await bar.save();
  res.send(bar);
});

router.get("/bars/:id", async (req, res) => {
  try {
    const bar = await Bar.findOne({ id: req.params.id });
    res.send(bar);
  } catch {
    res.status(404);
    res.send({ error: "Bar doesn't exist!" });
  }
});

router.post("/bars/:id", async (req, res) => {
  try {
    var index = parseInt(req.params.id);
    var newCover = parseInt(req.body.data.coverCharge);
    var newLine = parseInt(req.body.data.line);

    const bar = await Bar.findOne({ id: req.params.id });

    if (req.body.data.coverCharge) {
      bar.coverCharge = Math.round(barFunctions.newCoverAvg(bar, newCover));
    }

    if (req.body.data.line != -1) {
      bar.line = Math.round(barFunctions.newLineAvg(bar, newLine));
    }

    await bar.save();
    res.send(bar);

  } catch {
    res.status(404);
    res.send({ error: "Bar doesn't exist!" });
  }
})

router.get("/reviews", async (req, res) => {
  const reviews = await Review.find();
  res.send(reviews);
});

router.post("/reviews", async (req, res) => {
  const reviews = new Review({
    id: req.body.id,
    name: req.body.name,

  });
  await reviews.save();
  res.send(reviews);
});

router.get("/reviews/:id", async (req, res) => {
  try {
    const reviews = await Review.findOne({ id: req.params.id });
    res.send(reviews);
  } catch {
    res.status(404);
    res.send({ error: "Bar doesn't exist!" });
  }
});

router.post("/reviews/:id", async (req, res) => {
  try {
    var food = parseInt(req.body.data.food);
    var drink = parseInt(req.body.data.drink);
    var service = parseInt(req.body.data.service);
    var price = parseInt(req.body.data.price);
    var noise = parseInt(req.body.data.noise);
    var atmosphere = parseInt(req.body.data.atmosphere);

    const reviews = await Review.findOne({ id: req.params.id });

    if (req.body.data.food) {
      reviews.food = Math.round(barFunctions.newFoodAvg(reviews, food) * 100) / 100;
    }

    if (req.body.data.drink) {
      reviews.drink = Math.round(barFunctions.newDrinkAvg(reviews, drink) * 100) / 100;
    }

    if (req.body.data.service) {
      reviews.service = Math.round(barFunctions.newServiceAvg(reviews, service) * 100) / 100;
    }

    if (req.body.data.price) {
      reviews.price = Math.round(barFunctions.newPriceAvg(reviews, price) * 100) / 100;
    }

    if (req.body.data.noise) {
      reviews.noise = Math.round(barFunctions.newNoiseAvg(reviews, noise) * 100) / 100;
    }

    if (req.body.data.atmosphere) {
      reviews.atmosphere = Math.round(barFunctions.newAtmosphereAvg(reviews, atmosphere) * 100) / 100;
    }

    await reviews.save();
    res.send(reviews);

  } catch {
    res.status(404);
    res.send({ error: "Bar doesn't exist!" });
  }
})

router.get("/everyday", async (req, res) => {
  const everyday = await Everyday.find();
  res.send(everyday);
});

router.get("/entertainment", async (req, res) => {
  const entertainment = await Entertainment.find();
  res.send(entertainment);
});

router.get("/happyhour", async (req, res) => {
  const happyhour = await Happyhour.find();
  res.send(happyhour);
});

router.get("/specials", async (req, res) => {
  const specials = await Specials.find();
  res.send(specials);
});

router.get("/messages", async (req, res) => {
  const messages = await Messages.find();
  res.send(messages);
});

router.post("/reset", async (req, res) => {
  console.log(req.body)
  if (req.body.resetKey == "a1b2c3d4") {
    await Bar.updateMany({}, { coverCharge: 0, line: 0, lineEntries: 0, lineTotal: 0, coverEntries: 0, coverTotal: 0 })
    res.send("Reset successful");
  }
  else {
    res.send("Wrong password");
  }
})


module.exports = router;