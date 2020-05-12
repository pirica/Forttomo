import { SET_USER, LOGOUT } from './types';

export const setUser = (userID, displayName) => ({
  type: SET_USER,
  payload: { userID, displayName },
});

export const logout = () => ({ type: LOGOUT });
