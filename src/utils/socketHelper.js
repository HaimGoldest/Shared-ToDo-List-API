const { createTaskEvent } = require("./eventFactory");

const emitTaskEvent = (io, type, data) => {
  const event = createTaskEvent(type, data);
  io.emit("taskUpdated", event);
};

module.exports = { emitTaskEvent };
