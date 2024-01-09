const express = require("express");
const bodyParser = require("body-parser");
// const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const db = require("./src/db/db");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// app.use(expressLayouts); // Enable EJS layouts

// view engine config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));

// Add this line to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route usage
const habitRoutes = require("./src/routes/habitRoutes");
app.use("/", habitRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
