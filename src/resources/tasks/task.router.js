const router = require('express').Router();
const { Task } = require('./task.model');
const tasksService = require('./task.service');
const error = require('../logger/logger-error.js');

router.route('/:boardId/tasks/').get(
  error(async (req, res) => {
    const tasks = await tasksService.getAll();
    if (tasks) {
      res.json(tasks);
    } else {
      res.status(404).end();
    }
  })
);

router.route('/:boardId/tasks/').post(
  error(async (req, res) => {
    const task = await new Task({
      boardId: req.params.boardId,
      task: req.body
    });
    await tasksService.createTask(task);
    res.json(task);
  })
);

router.route('/:boardId/tasks/:taskId').get(
  error(async (req, res) => {
    const task = await tasksService.getTaskById(req.params.taskId);
    if (task) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  })
);

router.route('/:boardId/tasks/:taskId').put(
  error(async (req, res) => {
    const task = await tasksService.getTaskById(req.params.taskId);
    await tasksService.updateTask(req.params.taskId, req.body);
    if (task) {
      res.json(task);
    } else {
      res.status(404).end();
    }
  })
);

module.exports = router;
