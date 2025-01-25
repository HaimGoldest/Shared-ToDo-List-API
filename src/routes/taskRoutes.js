const express = require("express");
const authenticate = require("../middlewares/authMiddleware");
const {
  validateInputs,
  taskValidationRules,
} = require("../middlewares/validateInputMiddleware");
const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", authenticate, getTasks);
router.post("/", authenticate, validateInputs(taskValidationRules), createTask);
router.get("/:id", authenticate, getTask);
router.put(
  "/:id",
  authenticate,
  validateInputs(taskValidationRules),
  updateTask
);
router.delete("/:id", authenticate, deleteTask);

module.exports = router;
