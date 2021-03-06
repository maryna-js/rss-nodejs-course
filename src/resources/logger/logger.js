const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: './logs.log' }),
    new winston.transports.Console()
  ]
});

const requests = (req, res, next) => {
  const { url, query, body } = req;
  logger.log({
    level: 'info',
    date: new Date(),
    url,
    query,
    body
  });
  next();
};

const error = async message => {
  await logger.log({
    level: 'error',
    date: new Date(),
    message
  });
};

module.exports = { requests, error };
