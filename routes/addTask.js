const AddTaskModel = require("../models/addTaskModel");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.body.channelId) {
    res.send(400).json({ error: "channelId is mandatory" });
  }

  saveAPI = new AddTaskModel({
    channelId: req.body.channelId,
    taskTitle:req.body.taskTitle,
    taskDetails:req.body.taskDetails,
    solutions:req.body.solutions
  });
  await saveAPI.save();
  res.status(200).send({ allTasks: saveAPI, message: "Task Saved" });
});

module.exports = router;
