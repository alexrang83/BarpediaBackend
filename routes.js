var barFunctions = require("./dynamicData.js");

const express = require("express");
const Bar = require("./models/Bar");
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
  console.log(req.body);
	try {
    var index = parseInt(req.params.id)
    var newCover = parseInt(req.body.data.coverCharge)
    var newLine = parseInt(req.body.data.line);

    const bar = await Bar.findOne({ id: req.params.id })
    
    if(req.body.data.coverCharge){
      bar.coverCharge = Math.round(barFunctions.newCoverAvg(newCover, index));
    }

    if(req.body.data.line != -1){
      bar.line = Math.round(barFunctions.newLineAvg(newLine, index));
    }

		await bar.save()
    res.send(bar)
    
	} catch {
		res.status(404)
		res.send({ error: "Bar doesn't exist!" })
	}
})


module.exports = router;