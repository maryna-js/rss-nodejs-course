const Board = require('./board.model');

const getAll = async () => {
  return Board.find({});
  // return boards;
};

const getBoardById = async id => {
  return Board.findById({ _id: id });
  //  throw new Error();
  // return boards.find(board => board.id === id);
};

const createBoard = async data => {
  return Board.create(data);
  //    throw new Error();
  //   boards.push(board);
  //   return board;
};

const updateBoard = async (id, data) => {
  return Board.updateOne({ _id: id }, data);
};

const deleteBoard = async id => {
  return Board.deleteOne({ _id: id });
};

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
