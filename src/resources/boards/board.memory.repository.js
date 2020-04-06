const boards = [];

const getAll = async () => {
  return boards;
};

const getBoardById = async id => {
  return boards.find(board => board.id === id);
};

const createBoard = async board => {
  boards.push(board);
  return board;
};

module.exports = { getAll, getBoardById, createBoard };
