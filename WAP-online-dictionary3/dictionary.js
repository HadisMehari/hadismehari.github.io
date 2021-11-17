const express = require("express");
const Sequelize = require("sequelize");
const mysql = require("mysql2");
const path = require("path");

const port = process.env.PORT || 3000;

// Database
const db = require("./config/database");

// Test DB
db.authenticate()
  .then(() => {
    console.log("Successfully Connected to MySQL!");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));

// Home route
app.get("/", (req, res) => {
  res.redirect("dict.html");
});

const dictRoute = require("./routes/dict");
app.use("/dict", dictRoute);
 

// db.end();

app.listen(port, () => {
  console.log(`Web server listening on port ${port} ...`);
});
