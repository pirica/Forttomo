import React, { useEffect, useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions/authActions';
import { fetchData } from '../store/actions/dataActions';

import Firebase from 'firebase/app';
import 'firebase/auth';

const DataLoader = ({ children }) => {
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

  return <>{children}</>;
};

export default DataLoader;
