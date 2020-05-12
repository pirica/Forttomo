import { NEW_INPUT, SET_INPUT, UPDATE_INPUT } from './types';

export const newInput = value => ({ type: NEW_INPUT, payload: value });

export const setInput = value => ({ type: SET_INPUT, payload: value });

export const updateInput = (value, inputName) => ({
  type: UPDATE_INPUT,
  payload: { [inputName]: value },
});
