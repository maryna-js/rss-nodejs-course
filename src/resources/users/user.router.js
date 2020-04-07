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

router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.params.id, req.body);
  return res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  await usersService.deleteUser(req.params.id);
  res.status(204).send('');
});

module.exports = router;
