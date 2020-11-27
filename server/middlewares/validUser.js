const { jwt } = require('../require');
const { User } = require('../models');
const {
  constants,
  statusMessage
} = require('../config');

module.exports = (req, res, next) => {
  if (req.headers && req.headers.token) {
    try {
      const token = req.headers.token;
      const decode = jwt.verify(token, constants.jwtSecret);
      const { _id } = (decode);
      User.findOne({ _id: _id })
        .then(userFound => {
          if (!userFound) {
            res.json('user not found');
          } else {
            next();
          }
        })
        .catch(err => res.json({ ...statusMessage.SERVER500, error: err.message }));
    }
    catch (ex) {
      res.json({ ...statusMessage.SERVER500, error: ex.message });
    }
  } else {
    res.json('no token');
  }
};
