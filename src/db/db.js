const mongoose = require("mongoose");
require("dotenv").config();

const DB_str = process.env.DB_URL;
mongoose.connect(DB_str, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

module.exports = db;
