const {
  User
} = require('../models');

const {
  loginValidator
} = require('../validators');

const {
  statusMessage
} = require('../config');

const {
  authHelper
} = require('../helpers');

module.exports = {

  userLogin(req, res) {
    const {
      email,
      password
    } = req.body;

    User.findOne({
      email: email
    })
      .then((userFound) => {
        if (!userFound) {
          res.json(statusMessage.USER404);
        } else {
          // check the password.
          authHelper.validatePassword(password, userFound.password)
            .then(result => {
              if (result) {
                // token generate.
                authHelper.generateToken(userFound)
                  .then(userDetails => res.json({ ...statusMessage.USER200, userDetails }))
                  .catch((err) => res.json({ ...statusMessage.SERVER500, error: err.message }));
              } else {
                res.json(statusMessage.USER401);
              }
            })
            .catch((err) => res.json({ ...statusMessage.SERVER500, error: err.message }));
        }
      })
      .catch((err) => res.json({ ...statusMessage.SERVER500, error: err.message }));
  },

  userRegistration(req, res) {

    const {
      first_name,
      last_name,
      email,
      password
    } = req.body;

    User.findOne({
      email: email
    })
      .then(userFound => {
        if (userFound) {
          res.json(statusMessage.USER400)
        } else {

          // hash password.
          authHelper.hashPassword(password)
            .then(hash => {

              let newUser = new User({
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: hash
              });

              newUser.save()
                .then(() => {

                  // generate a token
                  authHelper.generateToken(newUser)
                    .then(userData => res.json({ ...statusMessage.USER201, userData }))
                    .catch((err) => res.json({ ...statusMessage.SERVER500, error: err.message }));
                })
                .catch((err) => res.json({ ...statusMessage.SERVER500, error: err.message }));
            })
            .catch((err) => res.json({ ...statusMessage.SERVER500, error: err.message }));
        }
      })
      .catch((err) => res.json({ ...statusMessage.SERVER500, error: err.message }));

  }

};
