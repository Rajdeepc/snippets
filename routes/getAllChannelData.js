const express = require("express");
const router = express.Router();
const GetChannelModel = require("../models/channelModel");

router.get("/", async (req, res) => {
  try {
    const items = await GetChannelModel.find({
    });
    console.log(items);
    //(items)
    if (items) {
      console.log(items);
      res.status(200).json(items);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
