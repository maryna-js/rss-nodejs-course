const usersRepo = require('./user.db.repository');
const tasksRepo = require('../tasks/task.db.repository');

const getAll = () => usersRepo.getAll();
const getUserById = id => usersRepo.getUserById(id);
const getByLogin = login => usersRepo.getByLogin(login);
const createUser = user => usersRepo.createUser(user);
const updateUser = (id, { name, login, password }) =>
  usersRepo.updateUser(id, { name, login, password });

const deleteUser = async id => {
  await tasksRepo.deleteByUser(id);
  return usersRepo.deleteUser(id);
};

module.exports = {
  getAll,
  getUserById,
  getByLogin,
  createUser,
  updateUser,
  deleteUser
};
