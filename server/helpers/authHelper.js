const {
  bcryptjs,
  jwt
} = require('../require');

const { constants } = require('../config');

const generateToken = (userObject) => {
  return new Promise((resolve, reject) => {
    let user = { ...userObject._doc, password: null };
    jwt.sign(user, constants.jwtSecret, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve({ token, user });
      }
    })
  });
}

const validatePassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcryptjs.compare(password, hash, (err, success) => {
      if (err) {
        reject(err);
      } else {
        resolve(success);
      }
    })
  });
}

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcryptjs.genSalt(10, (err, salt) => {
      console.log(salt);
      if (err) {
        reject(err);
      } else {
        bcryptjs.hash(password, salt, (err, hash) => {
          console.log(hash);
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      }
    });
  });
}

module.exports = {
  generateToken,
  validatePassword,
  hashPassword
};
