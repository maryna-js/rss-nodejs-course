const boardRepo = require('./board.memory.repository');
const { Board, Column } = require('./board.model');

const getAll = async () => {
  const boards = await boardRepo.getAll();
  return boards.map(Board.toResponse);
};

const getBoardById = async id => {
  const board = await boardRepo.getBoardById(id);
  return Board.toResponse(board);
};

const createBoard = async data => {
  const createColumns = data.columns
    ? data.columns.map(item => {
        const { id, title, order } = item;
        const arrColumns = new Column({ id, title, order });
        return { ...arrColumns };
      })
    : [];
  const board = new Board({ title: data.title, columns: createColumns });
  const result = await boardRepo.createBoard({ ...board });
  return Board.toResponse(result);
};

module.exports = {
  getAll,
  createBoard,
  getBoardById
};
