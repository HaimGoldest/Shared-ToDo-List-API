const express = require("express");
const {
  validateInputs,
  authValidationRules,
} = require("../middlewares/validateInputMiddleware");
const { register, login } = require("../controllers/authController");

const router = express.Router();

router.post("/register", validateInputs(authValidationRules), register);
router.post("/login", validateInputs(authValidationRules), login);

module.exports = router;
