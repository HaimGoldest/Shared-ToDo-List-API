const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  editMode: { type: Boolean, default: false },
  completed: { type: Boolean, default: false },
  isLocked: { type: Boolean, default: false },
  lockedBy: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, default: null },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String, default: null },
});

taskSchema.pre("save", function (next) {
  next();
});

module.exports = mongoose.model("Task", taskSchema);
