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
    res.send({ error: "Post doesn't exist!" });
  }
});



module.exports = router;