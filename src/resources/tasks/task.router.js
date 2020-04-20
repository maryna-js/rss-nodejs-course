const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');
const error = require('../logger/logger-error.js');

router.route('/').get(
  error(async (req, res) => {
    const tasks = await tasksService.getAll(req.params);
    res.status(200).json(tasks.map(Task.toResponse));
    // if (tasks) {
    //   res.json(tasks);
    // } else {
    //   res.status(404).end();
    // }
  })
);

router.route('/:id').get(
  error(async (req, res) => {
    const task = await tasksService.getTaskById(req.params);

    if (task) {
      res.json(Task.toResponse(task));
    } else {
      res.status(404).end();
    }
  })
);

router.route('/').post(
  error(async (req, res) => {
    const task = await tasksService.createTask(req.params, req.body);
    res.json(Task.toResponse(task));
  })
);

router.route('/:id').put(
  error(async (req, res) => {
    const task = await tasksService.updateTask(req.params, req.body);
    if (task) {
      res.json(Task.toResponse({ task }));
    } else {
      res.status(404).end();
    }
  })
);

router.route('/:id').delete(
  error(async (req, res) => {
    const task = await tasksService.deleteTask(req.params);
    if (task) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  })
);

module.exports = router;
