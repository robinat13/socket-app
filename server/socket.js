const { io } = require("./index");

io.on("connection", (socket) => {
  console.log("Socket connected");

  socket.on("disconnect", () => {
    console.log("User left");
  });
});
