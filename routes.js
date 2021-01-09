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
	try {
    var index = parseInt(req.params.id)
    var newCover = parseInt(req.body.data.coverCharge)
    var newLine = parseInt(req.body.data.line);

    const bar = await Bar.findOne({ id: req.params.id })
    
    if(req.body.data.coverCharge){
      bar.coverCharge = Math.round(barFunctions.newCoverAvg(bar, newCover));
    }

    if(req.body.data.line != -1){
      bar.line = Math.round(barFunctions.newLineAvg(bar, newLine));
    } 

		await bar.save()
    res.send(bar)
    
	} catch {
		res.status(404)
		res.send({ error: "Bar doesn't exist!" })
  }
})

router.post("/reset", async (req, res) =>{
  console.log(req.body)
  if(req.body.resetKey == "a1b2c3d4"){
    await Bar.updateMany({}, {coverCharge: 0,  line: 0, lineEntries: 0, lineTotal: 0, coverEntries: 0, coverTotal: 0})
    res.send("Reset successful");
  }
  else{
    res.send("Wrong password");
  }
})


module.exports = router;