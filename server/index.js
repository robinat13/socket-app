const app = require("./app");
const options = require("./options");

const server = require("http").createServer(app);
const io = require("socket.io")(server, options);

io.on("connection", (socket) => {
  console.log("Socket connected");

  socket.on("disconnect", () => {
    console.log("User left");
  });
});

const PORT = process.env.PORT || 5000;

const boot = () => {
  try {
    server.listen(PORT, () => {
      console.log(`SERVER STARTED ON PORT ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

boot();
