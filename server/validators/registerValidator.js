const {
  fieldHelper
} = require('../helpers');


module.exports = (body) => {
  // validate firstname, lastname, email, password

  const {
    first_name,
    last_name,
    email,
    password
  } = body;

  let errors = {
    hasErrors: false,
    errors: {}
  }

  // check fields.

}
