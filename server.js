const express = require("express");
const path = require("path");

const app = express();

// 🔥 правильный путь
app.use(express.static(path.join(__dirname, "webapp")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "webapp", "index.html"));
});

// 🔥 безопасный порт (ВАЖНО)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});