const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getBoardById(req.params.id);
  res.json(board);
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.createBoard(req.body);
  res.json(board);
});

module.exports = router;
