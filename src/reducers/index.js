import {combineReducers} from 'redux';

import {authReducer} from './authReducer';
import {dataFetcher} from './dataFetcher';
import {ADD_WISHLIST} from './wishlist';
const appReducer = combineReducers({
  authReducer,
  dataFetcher,
  ADD_WISHLIST,
});

export default appReducer;
