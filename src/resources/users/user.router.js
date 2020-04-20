const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const error = require('../logger/logger-error.js');

router.route('/').get(
  error(async (req, res) => {
    const users = await usersService.getAll();
    return res.json(users.map(User.toResponse));
  })
);

router.route('/:id').get(
  error(async (req, res) => {
    const id = await usersService.getUserById(req.params.id);
    if (id) {
      return res.json(User.toResponse(id));
    }
    return res.status(404).end();
  })
);

router.route('/').post(
  error(async (req, res) => {
    const body = await usersService.createUser(req.body);
    return res.json(User.toResponse(body));
  })
);

router.route('/:id').put(
  error(async (req, res) => {
    const user = await usersService.updateUser(req.params.id, req.body);
    if (user) {
      return res.json(User.toResponse(user));
    }
    return res.status(404).end();
  })
);

router.route('/:id').delete(
  error(async (req, res) => {
    const user = await usersService.deleteUser(req.params.id);
    if (user) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  })
);

module.exports = router;
