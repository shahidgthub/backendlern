
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;



app.get("/png", (req, res) => {
  res.send('pong');
});
app.get("/twitter", (req, res) => {
  res.send('<h1> this is twitter</h1>');
});
app.get("/yutube", (req, res) => {
  res.send('<h1> this is youtube</h1>');
});
 
app.listen(process.env.PORT, () => {
  console.log(`This is setwiteerver side. Port ${PORT} is active`);
});
