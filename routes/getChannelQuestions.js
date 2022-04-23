const express = require("express");
const router = express.Router();
const SavedApiResponse = require("../models/addTaskModel");

router.get("/:channelId", async (req, res) => {
  try {
    const items = await SavedApiResponse.find({
      channelId: req.params.channelId,
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
