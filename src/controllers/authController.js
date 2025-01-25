const {
  getUserByUsername,
  createUser,
} = require("../repositories/userRepository");
const { generateToken } = require("../utils/jwtHelper");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await getUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken." });
    }

    await createUser({ username, password });
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await getUserByUsername(username);
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const token = generateToken({ id: user._id, username: user.username });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { register, login };
