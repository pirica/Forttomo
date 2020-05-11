import { SET_USER, LOGOUT } from './../actions/types';

import Firebase from 'firebase/app';
import 'firebase/auth';

const initialState = {
  userID: null,
  displayName: null,
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        userID: action.payload.userID,
        displayName: action.payload.displayName,
        isLoading: false,
      };
    case LOGOUT:
      Firebase.auth().signOut();

      return {
        ...state,
        userID: null,
        displayName: null,
      };
    default:
      return state;
  }
};
