const User = require('./user.model.js');

const users = [
  {
    id: '1',
    name: 'Name1',
    login: 'Login1'
  },
  {
    id: '2',
    name: 'Name2',
    login: 'Login2'
  }
];

const getAll = async () => {
  return users;
};

const getUserById = async id => {
  return users.find(user => user.id === id);
};

const createUser = async data => {
  const user = new User(data);
  users.push(user);
  return user;
};

module.exports = {
  getAll,
  getUserById,
  createUser
};
