import {Data} from '../action/actionTypes';
const DATA = require('../dummy_data/albumCategories');
const AlbumDetails = require('../dummy_data/albumDetails');
const initialState = {
  item: DATA.default,
  albumDetails: AlbumDetails,
};
// console.log('DATA------', DATA.default);
// console.log(AlbumDetails, '------------');
export const dataFetcher = (state = initialState, action) => {
  switch (action.type) {
    case Data:
      return initialState;
    default:
      return state;
  }
};
