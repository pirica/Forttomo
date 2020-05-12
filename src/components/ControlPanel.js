import React, { useEffect, useCallback } from 'react';

import Firebase from 'firebase/app';
import 'firebase/database';

import { useSelector, useDispatch } from 'react-redux';
import { newInput, setInput } from '../store/actions/inputActions';

import InputView from './InputView/InputView';
import WishlistView from './WishlistView/WishlistView';

const ControlPanel = () => {
  const input = useSelector(state => state.input);
  const { userID } = useSelector(state => state.auth);
  const dispatch = useCallback(useDispatch(), []);

  // Initial load
  useEffect(() => {
    const dataString = localStorage.getItem('input');
    const data = JSON.parse(dataString);

    if (data) dispatch(setInput(data));
  }, [dispatch]);

  // User change
  useEffect(() => {
    const fetchUserData = async () => {
      if (userID) {
        const path = `users/${userID}/input`;
        const response = await Firebase.database().ref(path).once('value');

        if (response) {
          const data = response.val();
          dispatch(newInput(data));
        }
      }
    };

    fetchUserData();
  }, [userID, dispatch]);

  // Input update
  useEffect(() => {
    const saveData = { ...input };
    delete saveData.loaded;

    if (userID && input.loaded) {
      const path = `users/${userID}/input`;

      Firebase.database().ref(path).set(saveData);
    }

    const stringified = JSON.stringify(saveData);
    localStorage.setItem('input', stringified);
  }, [userID, input]);

  return (
    <div className='control_panel section'>
      <InputView />
      <WishlistView />
    </div>
  );
};

export default ControlPanel;
