const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUserById = id => usersRepo.getUserById(id);
const createUser = user => usersRepo.createUser(user);

module.exports = {
  getAll,
  getUserById,
  createUser
};
