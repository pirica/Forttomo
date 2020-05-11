import {
  LOAD_WISHLIST,
  ADD_WISHLIST_ITEM,
  REMOVE_WISHLIST_ITEM,
  UPDATE_WISHLIST_ITEM,
  MOVE_WISHLIST_ITEM,
} from './types';

import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export const loadWishlist = () => {
  return async dispatch => {
    const userID = Firebase.auth().currentUser.uid;
    let data = {};

    if (userID) {
      const path = 'users/' + userID + '/wishlist';

      const response = await Firebase.database().ref(path).once('value');

      if (response) {
        data = response.val();
      }
    }

    return dispatch({ type: LOAD_WISHLIST, payload: data });
  };
};

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
