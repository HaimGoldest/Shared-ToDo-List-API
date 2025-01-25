const User = require("../models/user");

const getUserByUsername = async (username) => {
  return User.findOne({ username });
};

const createUser = async (userData) => {
  const user = new User(userData);
  return user.save();
};

module.exports = {
  getUserByUsername,
  createUser,
};
