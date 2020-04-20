const router = require('express').Router();
const boardsService = require('./board.service');
const error = require('../logger/logger-error.js');
const Board = require('./board.model');

router.route('/').get(
  error(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards.map(Board.toResponse));
  })
);

router.route('/:id').get(
  error(async (req, res) => {
    const board = await boardsService.getBoardById(req.params.id);
    if (board) {
      res.json(Board.toResponse(board));
    } else {
      res.status(404).end();
    }
  })
);

router.route('/').post(
  error(async (req, res) => {
    const board = await boardsService.createBoard(req.body);
    res.json(Board.toResponse(board));
  })
);

router.route('/:id').put(
  error(async (req, res) => {
    const board = await boardsService.updateBoard(req.params.id, req.body);
    if (board) {
      res.json(Board.toResponse(board));
    } else {
      res.status(404).end();
    }
  })
);

router.route('/:id').delete(
  error(async (req, res) => {
    const board = await boardsService.deleteBoard(req.params.id);
    if (board.deletedCount) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  })
);

module.exports = router;
