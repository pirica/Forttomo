import { LOAD_INPUT, SET_INPUT, UPDATE_INPUT } from './types';

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

export const setInput = value => ({ type: SET_INPUT, payload: value });

export const updateInput = (value, inputName) => ({
  type: UPDATE_INPUT,
  payload: { [inputName]: value },
});
