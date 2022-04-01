// Require http module
const http = require("http");

// Require fs module
const fs = require("fs");

const { Server } = require("http");

// Server
// ServerResponse - Writable stream - Created by the server. Not by the client
// IncomingMessage - Readable stream

// function(req,res) {}
const app = (req, res) => {
  if (req.url === "/") {
    console.log(process);
    const html = fs.createReadStream(`${__dirname}/index.html`, {
      encoding: "utf-8",
    });
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    html.on("data", (chunkData) => {
      res.end(chunkData);
    });
  }
};

// Create web server
// const server = http.createServer(app);

// My create server
const server = (app) => {
  const server = new Server();
  server.on("request", app);
  return server;
};

console.log(server);
// server.listen(1337, () => {
//   console.log("Listening on 127.0.0.1:1337");
// });

// server.listen(1337, () => {
//   console.log("Listening on 127.0.0.1:1337");
// });
