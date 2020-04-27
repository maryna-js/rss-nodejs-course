const User = require('./user.model.js');

const users = [];

const getAll = async () => {
  return users;
};

const getUserById = async id => {
  return await users.find(user => user.id === id);
};

const createUser = async data => {
  const user = new User(data);
  users.push(user);
  return user;
};

const updateUser = async (id, user) => {
  users.map(elem => {
    if (elem.id === id) {
      elem.name = user.name;
      elem.login = user.login;
      elem.password = user.password;
    }
    return elem;
  });
  return user;
};

const deleteUser = async id => {
  const index = users.indexOf(users.find(item => item.id === id));
  users.splice(index, 1);
};

module.exports = {
  getAll,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
