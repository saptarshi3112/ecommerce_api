import {
  types
} from '../actions';


const initialState = {
  isLoggedIn: false,
  token: localStorage.getItem('token'),
  user: localStorage.getItem('user')
};


export const authReducer = (state=initialState, action) => {
  switch(action.type) {
    default: 
      return state;
  }
};
