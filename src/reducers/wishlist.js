import {Add_Wishlist, Remove_Wishlist} from '../action/actionTypes';
const initialState = {
  wishlist: ['1'],
  isLoading: false,
};
export const ADD_WISHLIST = (state = initialState, action) => {
  switch (action.type) {
    case Add_Wishlist:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
        isLoading: !state.isLoading,
      };

    case Remove_Wishlist:
      return {
        ...state,
        wishlist: state.wishlist.filter(id => id != action.payload),
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};
