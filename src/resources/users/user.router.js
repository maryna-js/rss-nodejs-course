const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  return res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const id = await usersService.getUserById(req.params.id);
  return res.json(User.toResponse(id));
});

router.route('/').post(async (req, res) => {
  const body = await usersService.createUser(req.body);
  return res.json(User.toResponse(body));
});

module.exports = router;
