const { Server } = require("socket.io");

let ioInstance = null;

const initializeSocketIO = (server) => {
  if (!ioInstance) {
    ioInstance = new Server(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
      },
    });

    ioInstance.on("connection", (socket) => {
      console.log("A client connected:", socket.id);

      socket.on("taskUpdated", (data) => {
        ioInstance.emit("taskUpdated", data);
      });

      socket.on("disconnect", () => {
        console.log("A client disconnected:", socket.id);
      });
    });
  }
  return ioInstance;
};

module.exports = initializeSocketIO;
