const app = require("./app");
const socket = require("socket.io");
const http = require("http");

const server = http.createServer(app);
const io = socket(server);

const PORT = process.env.PORT || 5000;

const boot = () => {
  server.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
  });
};

boot();
