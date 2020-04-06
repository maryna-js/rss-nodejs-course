const uuid = require('uuid');

class Board {
  constructor({ id = uuid(), title = 'title', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    return board;
  }
}

class Column {
  constructor({ id = uuid(), title = 'title', order = 'order' } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = {
  Board,
  Column
};
