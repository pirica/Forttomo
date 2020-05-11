import React, { useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setUser, loadInput } from '../store/actions/actions';
import { fetchData } from '../store/actions/dataActions';
import { loadWishlist } from '../store/actions/wishlistActions';

import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const DataLoader = ({ children }) => {
  const { userID } = useSelector(state => state.auth);
  const dispatch = useCallback(useDispatch(), []);

  useEffect(() => {
    const updateUser = (userID, displayName) =>
      dispatch(setUser(userID, displayName));

    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        updateUser(user.uid, user.displayName);
      }
    });

    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (userID) {
      dispatch(loadInput());
      dispatch(loadWishlist());
    }
  }, [userID, dispatch]);

  return <>{children}</>;
};

export default DataLoader;
