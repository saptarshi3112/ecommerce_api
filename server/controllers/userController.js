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

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns {Promise}
 */
const userLogin = (req, res) => {
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
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns {Promise}
 */
const userRegistration = (req, res) => {
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
};

const editUserDetails = (req, res) => {

  const {
    _id,
    first_name,
    last_name,
    email,
    password,
    profile_pic
  } = req.body;

  // get all the params that can be edited.
  User.findOne(_id)
    .then(userFound => {
      if (!userFound) {
        res.json('no user found');
      } else { 

        // make changes to the user model.

      }
    })
    .catch(err => res.json({ ...statusMessage.SERVER500, error: err.message }))

}

module.exports = {
  userLogin,
  userRegistration,
  editUserDetails
};
