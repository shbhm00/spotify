const DATA = require('../dummy_data/albumCategories');
import {
  Login,
  Login1,
  Data,
  Add_Wishlist,
  Remove_Wishlist,
} from './actionTypes';
export const doLogin = payload => {
  return dispatch => {
    dispatch({
      type: Login,
      payload: payload,
    });
  };
};
export const action = () => {
  return dispatch => {
    dispatch({
      type: Login1,
    });
  };
};

export const fetchData = data => {
  return dispatch => {
    dispatch({
      type: Data,
      payload: data,
    });
  };
};
export const Wishlist = data => {
  return dispatch => {
    dispatch({
      type: Add_Wishlist,
      payload: data,
    });
  };
};

export const Rem_Wishlist = data => {
  return dispatch => {
    dispatch({
      type: Remove_Wishlist,
      payload: data,
    });
  };
};
