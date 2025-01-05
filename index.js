const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "tablewooden",
      price: 300
    },
    {
      id: 2,
      name: "glass",
      price: 100
    },
    {
      id: 3,
      name: "knife",
      price: 500
    },
    {
      id: 4,
      name: "climb",
      price: 50
    },
    {
      id: 5,
      name: "climb",
      price: 50
    }
  ];

  // Filter products based on the "search" query parameter
  if (req.query.search) {
    const search = req.query.search.toLowerCase(); // Convert search term to lowercase for case-insensitive comparison
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(search)
    );
    res.send(filteredProducts);
    return;
  }

  // Delay response by 3 seconds if no search query is provided
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(PORT, () => {
  console.log(`Server is running. Port ${PORT} is active`);
});
