"use strict";

var express = require('express');

var app = express();

require('dotenv').config();

var PORT = process.env.PORT || 3000;
app.get("/png", function (req, res) {
  res.send('pong');
});
app.get("/twitter", function (req, res) {
  res.send('<h1> this is twitter</h1>');
});
app.get("/yutube", function (req, res) {
  res.send('<h1> this is youtube</h1>');
});
app.listen(process.env.PORT, function () {
  console.log("This is setwiteerver side. Port ".concat(PORT, " is active"));
});