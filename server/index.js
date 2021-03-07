const app = require("./app");
const options = require("./options");

const { addUser, getUser, getUsersInRoom, removeUser } = require("./users");

const server = require("http").createServer(app);
const io = require("socket.io")(server, options);

io.on("connect", (socket) => {
  console.log("Socket connected");

  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) {
      return callback(error);
    }
    socket.emit("message", {
      user: "admin",
      text: `Hi ${user.name}, Welcome to room ${user.room}`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined` });
    socket.join(user.room);

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: message });
    callback();
  });

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
