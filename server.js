const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static("webapp"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/webapp/index.html");
});

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});