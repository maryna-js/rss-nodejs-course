const User = require('./user.model.js');

const getAll = async () => {
  return User.find({});
};

const getUserById = async id => {
  return User.findOne({ _id: id });
};

const createUser = async user => {
  return User.create(user);
  //   const user = new User(data);
  //   users.push(user);
  //   return user;
};

const updateUser = async (id, data) => {
  return User.updateOne({ _id: id }, data);
  // throw new Error();
  //   users.map(elem => {
  //     if (elem.id === id) {
  //       elem.name = user.name;
  //       elem.login = user.login;
  //       elem.password = user.password;
  //     }
  //     return elem;
  //   });
  //   return user;
};

const deleteUser = async id => {
  return (await User.deleteOne({ _id: id }).exec()).deletedCount;
};

module.exports = {
  getAll,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
