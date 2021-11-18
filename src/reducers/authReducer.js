import {Login, Login1} from '../action/actionTypes';
const initialState = {
  name: 'Shubham Mishra',
  email: 'Shbhm00@gmail.com',
  password: 'shbhmmshr',
  loggedIn: false,
};

console.log(initialState.item, 'itemsssss');
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Login:
      return {...state, ...action.payload};
    case Login1:
      return {...state, loggedIn: !state.loggedIn};
    default:
      return state;
  }
};
