import React, { useEffect, useCallback } from 'react';
import uuidv4 from 'uuidv4';

import { useSelector, useDispatch } from 'react-redux';
import {
  setWishlist,
  newWishlist,
  addWishlistItem,
} from '../../store/actions/wishlistActions';
import { setOverview } from '../../store/actions/overviewActions';

import Firebase from 'firebase/app';
import 'firebase/database';

import WishlistList from './WishlistList';
import './WishlistView.scss';

function WishlistView() {
  const { items, total, shouldSave } = useSelector(state => state.wishlist);
  const { userID } = useSelector(state => state.auth);

  const dispatch = useCallback(useDispatch(), []);
  const addItem = item => dispatch(addWishlistItem(item));

  // Initial load
  useEffect(() => {
    const dataString = localStorage.getItem('wishlist');
    const data = JSON.parse(dataString);

    if (data) dispatch(setWishlist(data));
  }, [dispatch]);

  // User change
  useEffect(() => {
    const fetchUserData = async () => {
      if (userID) {
        const path = `users/${userID}/wishlist`;
        const response = await Firebase.database().ref(path).once('value');

        if (response) {
          const data = response.val();
          dispatch(newWishlist(data));
        }
      }
    };

    fetchUserData();
  }, [userID, dispatch]);

  // Wishlist update
  useEffect(() => {
    if (userID && shouldSave) {
      const path = 'users/' + userID + '/wishlist';
      Firebase.database().ref(path).set(items);
    }

    const stringified = JSON.stringify(items);
    localStorage.setItem('wishlist', stringified);
  }, [items, userID, shouldSave]);

  useEffect(() => {
    dispatch(setOverview({ wishlistTotal: total }));
  }, [total, dispatch]);

  const addNewItem = () => {
    addItem({ name: 'ITEM NAME', price: 0, id: uuidv4() });
  };

  return (
    <div className='wishlist_view card'>
      <h3>Wishlist</h3>
      <div className='wishlist_labels wishlist_columns'>
        <h4>Name</h4>
        <h4>Vbucks</h4>
        <div></div>
      </div>
      <WishlistList />
      <button className='wishlist_add_button' onClick={addNewItem}>
        <i className='fas fa-plus'></i>
      </button>
    </div>
  );
}

export default WishlistView;
