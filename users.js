// Imports small array of users
// Pretend it's an API request
const users = require("./data");

const getUserById = (id) => {
  return users.find((user) => user.id === id);
};

const getUserByUsername = (username) => {
  return users.find((user) => user.username === username);
};

const validatePassword = (userId, password) => {
  const user = getUserById(userId);
  return user ? user.password === password : false;
};

module.exports = { getUserById, getUserByUsername, validatePassword };
