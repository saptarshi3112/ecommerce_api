const {
  mongoose
} = require('../require');

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profile_image: {
    type: String,
    required: false,
    default: null
  }
});

const User = mongoose.model('user', userSchema);
module.exports = User;
