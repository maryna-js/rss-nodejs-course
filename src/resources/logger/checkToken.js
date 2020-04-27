const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../../common/config');

const checkToken = (req, res, next) => {
  const tokenAuth = req.header('Authorization');
  if (tokenAuth) {
    const token = tokenAuth.replace('Bearer ', '');
    jwt.verify(token, JWT_SECRET_KEY, err => {
      if (err) {
        return res
          .status(401)
          .json({ success: false, message: 'Failed to authenticate token' });
      }
      return next();
    });
  } else {
    return res
      .status(401)
      .json({ success: false, message: 'Failed to authenticate token' });
  }
};

module.exports = checkToken;
