const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const loginRouter = require('./resources/login/login.router');
const logger = require('./resources/logger/logger');
const checkToken = require('./resources/logger/checkToken');
const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', logger.requests);
app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', checkToken, userRouter);
app.use('/boards', checkToken, boardRouter);
app.use('/boards/:boardId/tasks', checkToken, taskRouter);
app.use('/login', loginRouter);

app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  res.status(500).send('Not working');
  next();
});

process.on('unhandledRejection', message => {
  logger.error(`Unhandled Rejection : ${message}`);
});

process.on('uncaughtException', err => {
  logger.error(`Uncaught Exception: ${err.message}`);
});

module.exports = app;
