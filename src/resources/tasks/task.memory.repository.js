const tasks = [];

const getAll = async () => {
  return tasks;
};

const getTaskById = async id => {
  return tasks.find(task => task.id === id);
};

const createTask = async task => {
  tasks.push(task);
  return task;
};

const updateTask = async (id, task) => {
  tasks.map(elem => {
    if (elem.id === id) {
      elem.title = task.title;
    }
    return elem;
  });
  return task;
};

module.exports = { getAll, createTask, getTaskById, updateTask };
