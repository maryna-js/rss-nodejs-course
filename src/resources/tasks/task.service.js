const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const createTask = task => tasksRepo.createTask(task);
const getTaskById = id => tasksRepo.getTaskById(id);
const updateTask = async (id, req) => tasksRepo.updateTask(id, req);

module.exports = { getAll, createTask, getTaskById, updateTask };
