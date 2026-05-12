const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "webapp")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "webapp/index.html"));
});

app.listen(3001, () => {
  console.log("🌐 WebApp started on port 3001");
});