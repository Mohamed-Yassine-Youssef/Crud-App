var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//const { default: mongoose } = require('mongoose');
var mongoose = require("mongoose");
require("dotenv").config();

const routerUsers = require("./routes/users.route");
const { dirname } = require("path");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//connection to data base
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err.message));
app.use("/", routerUsers);

// serve static assets if in production
if (process.env.Node_Env === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
module.exports = app;
