const router = require('express').Router();
const { Task } = require('./task.model');
const tasksService = require('./task.service');

router.route('/:boardId/tasks/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/:boardId/tasks/').post(async (req, res) => {
  const task = await new Task({ boardId: req.params.boardId, task: req.body });
  await tasksService.createTask(task);
  res.json(task);
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const task = await tasksService.getTaskById(req.params.taskId);
  res.json(task);
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const task = await tasksService.getTaskById(req.params.taskId);
  await tasksService.updateTask(req.params.taskId, req.body);
  res.json(task);
});

module.exports = router;
