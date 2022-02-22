const mongoose = require("mongoose");

/**
 * Creating the User Model
 */

const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  channelId: {
    type: String,
    required: true,
  },
  questionTitle: {
    type: String,
  },
  questionDescription: {
    type: String,
    required: false,
  },
  solutions: {
    type: Array,
  },
});

const SavedApiResponse = mongoose.model('Questions', schema);


module.exports = SavedApiResponse;
