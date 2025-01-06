"use strict";

var express = require('express');

var app = express();

var bodyparser = require('body-parser');

var cors = require(cors);

var AuthRouter = require('./Routes/AuthRouter/');

require('dotenv').config(); // Load environment variables


require('./Models/db.js'); // Connect to MongoDB


var PORT = process.env.PORT || 3000; // Sample route

app.get("/api/products", function (req, res) {
  res.status(200).json({
    message: "Products endpoint is working!"
  });
});
app.use(bodyparser.json());
app.use(cors());
app.use('/auth', AuthR); // Fallback for undefined routes

app.use(function (req, res) {
  res.status(404).json({
    message: "Route not found"
  });
}); // Start the server

app.listen(PORT, function () {
  console.log("Server is running. Port ".concat(PORT, " is active"));
});