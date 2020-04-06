const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUserById = id => usersRepo.getUserById(id);
const createUser = user => usersRepo.createUser(user);
const updateUser = (id, { name, login, password }) =>
  usersRepo.updateUser(id, { name, login, password });

module.exports = {
  getAll,
  getUserById,
  createUser,
  updateUser
};
