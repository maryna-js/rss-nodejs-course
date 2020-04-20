const Task = require('./task.model');

const getAll = async data => {
  return await Task.find({ boardId: data.boardId });
};

const getTaskById = async data => {
  return await Task.findOne({ _id: data.id, boardId: data.boardId });
};

const createTask = async (params, data) => {
  return Task.create({ ...data, boardId: params.boardId });
};

const updateTask = async (params, data) => {
  return Task.updateOne({ _id: params.id }, data);
};

const deleteTask = async id => {
  return (await Task.deleteOne({ _id: id })).deletedCount;
};

const deleteByUser = async id => {
  return Task.updateMany({ userId: id }, { userId: null });
};

const deleteByBoardId = async id => {
  return (await Task.deleteMany({ boardId: id }).exec()).deletedCount;
};

module.exports = {
  getAll,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteByUser,
  deleteByBoardId
};
