"use strict";

var express = require('express');

var app = express();

require('dotenv').config();

var PORT = process.env.PORT || 3000;
app.get("/api/products", function (req, res) {
  var products = [{
    id: 1,
    name: "tablewooden",
    price: 300
  }, {
    id: 2,
    name: "glass",
    price: 100
  }, {
    id: 3,
    name: "knife",
    price: 500
  }, {
    id: 4,
    name: "climb",
    price: 50
  }, {
    id: 5,
    name: "climb",
    price: 50
  }]; // Filter products based on the "search" query parameter

  if (req.query.search) {
    var search = req.query.search.toLowerCase(); // Convert search term to lowercase for case-insensitive comparison

    var filteredProducts = products.filter(function (product) {
      return product.name.toLowerCase().includes(search);
    });
    res.send(filteredProducts);
    return;
  } // Delay response by 3 seconds if no search query is provided


  setTimeout(function () {
    res.send(products);
  }, 3000);
});
app.listen(PORT, function () {
  console.log("Server is running. Port ".concat(PORT, " is active"));
});