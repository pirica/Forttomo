import {
  NEW_WISHLIST,
  SET_WISHLIST,
  ADD_WISHLIST_ITEM,
  REMOVE_WISHLIST_ITEM,
  UPDATE_WISHLIST_ITEM,
  MOVE_WISHLIST_ITEM,
} from './types';

export const newWishlist = list => ({ type: NEW_WISHLIST, payload: list });

export const setWishlist = list => ({ type: SET_WISHLIST, payload: list });

export const updateWishlistItem = item => ({
  type: UPDATE_WISHLIST_ITEM,
  payload: item,
});

export const addWishlistItem = item => ({
  type: ADD_WISHLIST_ITEM,
  payload: item,
});

export const removeWishlistItem = id => ({
  type: REMOVE_WISHLIST_ITEM,
  payload: id,
});

export const moveWishlistItem = (startIndex, endIndex) => ({
  type: MOVE_WISHLIST_ITEM,
  payload: {
    start: startIndex,
    end: endIndex,
  },
});
