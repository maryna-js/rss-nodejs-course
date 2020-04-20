const tasksRepo = require('./task.db.repository');

const getAll = boardId => tasksRepo.getAll(boardId);
const createTask = (boardId, task) => tasksRepo.createTask(boardId, task);
const getTaskById = id => tasksRepo.getTaskById(id);
const updateTask = (params, data) => tasksRepo.updateTask(params, data);
const deleteTask = data => tasksRepo.deleteTask(data.id);

module.exports = { getAll, createTask, getTaskById, updateTask, deleteTask };
