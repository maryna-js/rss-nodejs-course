const router = require('express').Router();
const boardsService = require('./board.service');
const error = require('../logger/logger-error.js');

router.route('/').get(
  error(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
  })
);

router.route('/:id').get(
  error(async (req, res) => {
    const board = await boardsService.getBoardById(req.params.id);
    if (board) {
      res.json(board);
    } else {
      res.status(404).end();
    }
  })
);

router.route('/').post(
  error(async (req, res) => {
    const board = await boardsService.createBoard(req.body);
    res.json(board);
  })
);

module.exports = router;
