const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", `${socket.id.substr(0,2)} said ${message}`);
  });
});

http.listen(12106, "http://85.215.159.4", () => console.log("listening on http://85.215.159.4:12106"));