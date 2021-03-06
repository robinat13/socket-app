const express = require("express");
const app = express();
const cors = require("cors");
const chatRouter = require("./routes/chat.js");

app.use(cors());
app.use("/", chatRouter);

module.exports = app;
