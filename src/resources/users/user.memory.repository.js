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

module.exports = {
  getAll,
  getUserById,
  createUser,
  updateUser
};
