const mongoose = require("mongoose");

/**
 * Creating the User Model
 */

const schema = new mongoose.Schema({
  channelId: {
    type: String,
    required: true,
  },
  channelName: {
    type: String,
    required: true,
  },
});

const GetChannelModel = mongoose.model('Channels', schema);


module.exports = GetChannelModel;
