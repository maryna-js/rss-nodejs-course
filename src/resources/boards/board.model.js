const uuid = require('uuid');
const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuid
    },
    title: String,
    columns: [
      {
        _id: {
          type: String,
          default: uuid
        },
        title: String,
        order: Number
      }
    ]
  },
  { versionKey: false }
);

boardSchema.statics.toResponse = board => {
  const { _id, title, columns } = board;
  return { id: _id, title, columns };
};

const Board = mongoose.model('Board', boardSchema);
// class Board {
//   constructor({ id = uuid(), title = 'title', columns = [] } = {}) {
//     this.id = id;
//     this.title = title;
//     this.columns = columns;
//   }

//   static toResponse(board) {
//     return board;
//   }
// }

// class Column {
//   constructor({ id = uuid(), title = 'title', order = 'order' } = {}) {
//     this.id = id;
//     this.title = title;
//     this.order = order;
//   }
// }

module.exports = Board;
