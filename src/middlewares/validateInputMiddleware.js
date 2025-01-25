const { body, validationResult } = require("express-validator");

const validateInputs = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  };
};

const authValidationRules = [
  body("username").trim().notEmpty().withMessage("Username is required."),
  body("password")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters long."),
];

const taskValidationRules = [
  body("title").trim().notEmpty().withMessage("Task title is required."),
];

module.exports = { validateInputs, authValidationRules, taskValidationRules };
