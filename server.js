const http = require("http");

const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("OK WORKING");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on", PORT);
});