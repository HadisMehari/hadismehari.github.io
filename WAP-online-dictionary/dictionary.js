const express = require("express");
const mysql = require("mysql");
const path = require("path");

const port = process.env.PORT || 3000;

// Create DB Connection
const db = mysql.createConnection({
  host: "localhost",
  database: "entries",
  user: "root",
  password: "Asadiraya@1",
});

// Connect to database
db.connect((err) => {
  if (err) {
    throw err;
  }
});

console.log("MySQL Connected!");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));

// Home route
app.get("/", (req, res) => {
  res.redirect("dict.html");
});
// Select searched word
app.post("/search", (req, res) => {
  let searchItem = req.body.word;
  let sql = `SELECT * FROM entries WHERE entries.word = "${searchItem}"`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    return res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Web server listening on port ${port} ...`);
});
