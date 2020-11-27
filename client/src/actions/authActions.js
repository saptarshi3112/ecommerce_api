import axios from 'axios';


const loginUser = (email, password) => dispatch => {
  axios.post('/user/login', { email, password }, {
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
};

const registerUser = (userObject) => dispatch => {

};

const logoutUser = () => dispatch => {

};

const editUser = (userObject) => dispatch => {

};

const deleteUser = (userId) => dispatch => {

}

export const authAction =  {
  loginUser,
  registerUser,
  logoutUser,
  editUser,
  deleteUser
};
