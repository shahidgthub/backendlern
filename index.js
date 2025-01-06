const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require(cors)
const AuthRouter = require('./Routes/AuthRouter/');
require('dotenv').config(); // Load environment variables
require('./Models/db.js'); // Connect to MongoDB
const PORT = process.env.PORT || 3000;
// Sample route
app.get("/api/products", (req, res) => {
  res.status(200).json({ message: "Products endpoint is working!" });
});
app.use (bodyparser.json());
app.use(cors())
app.use('/auth',AuthR)

// Fallback for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running. Port ${PORT} is active`);
});
