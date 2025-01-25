const createTaskEvent = (type, data) => {
  return { type, ...data };
};

module.exports = { createTaskEvent };
