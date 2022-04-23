const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

// routes
const getChannelQuestions = require("./routes/getChannelQuestions");
const getAllChannelData = require("./routes/getAllChannelData");
const addTask = require("./routes/addTask");

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/getChannelQuestions", getChannelQuestions);
app.use("/getAllChannelData", getAllChannelData);
app.use("/addTask", addTask);

// Serve static files assets on heroku
app.use(express.static(path.join(__dirname, "client/build")));

// MongoDB connection string

const MONGO_DB_URI = process.env.MONGO_DB_URI;
const url = MONGO_DB_URI;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, connectionParams)
  .then((res) => console.log('New Connection Established'))
  .catch((err) => console.log("Something went wrong" + err));

console.log("port" + process.env.PORT);
const port = process.env.PORT || 4000;
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}...`));
