const Task = require("../models/task");

const getAllTasks = async () => {
  return Task.find();
};

const getTaskById = async (id) => {
  return Task.findById(id);
};

const createTask = async (taskData) => {
  const task = new Task(taskData);
  return task.save();
};

const updateTaskById = async (id, updatedData) => {
  return Task.findByIdAndUpdate(id, updatedData, { new: true });
};

const deleteTaskById = async (id) => {
  return Task.findByIdAndDelete(id);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
};
