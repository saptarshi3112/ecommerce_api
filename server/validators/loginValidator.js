const e = require('express');
const {
  fieldHelper
} = require('../helpers');

module.exports = (req, res, next) => {

  const keyNames = ['email', 'password'];

  let errors = {
    hasErrors: false,
    errors: {}
  };

  const body = req.body;

  // check email is present and valid.
  // check if password is present and greather than 3 characters.


  res.json('error');

}
