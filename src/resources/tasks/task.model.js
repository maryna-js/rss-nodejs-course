const uuid = require('uuid');

class Task {
  constructor({
    boardId,
    task: {
      id = uuid(),
      title = '',
      order = 0,
      description = '',
      userId = null,
      columnId = null
    }
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = { Task };
