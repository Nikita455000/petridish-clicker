const express = require("express");
const app = express();

app.use(express.static("webapp"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/webapp/index.html");
});

// 🔥 ВАЖНО ДЛЯ RENDER
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});