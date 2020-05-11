import { LOAD_INPUT, UPDATE_INPUT, SET_USER, LOGOUT } from './types';

import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export const loadInput = () => {
  return async dispatch => {
    const userID = Firebase.auth().currentUser.uid;
    let data = {};

    if (userID) {
      const path = 'users/' + userID + '/input';
      const response = await Firebase.database().ref(path).once('value');

      if (response) {
        data = response.val();
      }
    }

    return dispatch({ type: LOAD_INPUT, payload: data });
  };
};

export const updateInput = (value, inputName) => ({
  type: UPDATE_INPUT,
  payload: { [inputName]: value },
});

export const setUser = (userID, displayName) => ({
  type: SET_USER,
  payload: { userID, displayName },
});

export const logout = () => ({ type: LOGOUT });
