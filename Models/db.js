const mongoose = require('mongoose'); // Correctly importing mongoose
const mongoUrl ="mongodb+srv://azamshahid052:Xc0I4v4tabPMEpmj@cluster0.mmwp9.mongodb.net//forms";

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));


