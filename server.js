const express = require("express");
const path = require("path");

const app = express();

// 📁 фронтенд
app.use(express.static(path.join(__dirname, "webapp")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "webapp", "index.html"));
});

// 🔥 FIX PORT (ОЧЕНЬ ВАЖНО)
const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port:", PORT);
});