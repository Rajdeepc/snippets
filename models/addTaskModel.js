const mongoose = require("mongoose");

/**
 * Creating the User Model
 */

const schema = new mongoose.Schema({
  channelId: {
    type: String,
    required: true,
  },
  taskTitle: {
    type: String,
  },
  taskDetails: {
    type: String,
    required: true,
  },
  solutions: {
    type: Array,
  },
});

const AddTaskModel = mongoose.model('Questions', schema);


module.exports = AddTaskModel;
