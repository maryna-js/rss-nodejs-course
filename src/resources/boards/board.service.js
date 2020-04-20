const boardRepo = require('./board.db.repository');
const taskRepo = require('../tasks/task.db.repository');

const getAll = () => boardRepo.getAll();

const getBoardById = id => boardRepo.getBoardById(id);

const createBoard = data => boardRepo.createBoard(data);

const updateBoard = (id, data) => boardRepo.updateBoard(id, data);

const deleteBoard = async id => {
  await taskRepo.deleteByBoardId(id);
  return boardRepo.deleteBoard(id);
};

module.exports = {
  getAll,
  createBoard,
  getBoardById,
  updateBoard,
  deleteBoard
};
