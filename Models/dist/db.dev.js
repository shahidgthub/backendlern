"use strict";

var mongoose = require('mongoose'); // Correctly importing mongoose


var mongoUrl = "mongodb+srv://azamshahid052:Xc0I4v4tabPMEpmj@cluster0.mmwp9.mongodb.net//forms";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("MongoDB connected successfully");
})["catch"](function (err) {
  return console.error("MongoDB connection error:", err);
});