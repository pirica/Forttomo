import React, { useEffect, useCallback } from 'react';
import uuidv4 from 'uuidv4';

import { useSelector, useDispatch } from 'react-redux';
import { addWishlistItem } from '../../store/actions/wishlistActions';
import { setOverview } from '../../store/actions/overviewActions';

import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import WishlistList from './WishlistList';
import './WishlistView.scss';

function WishlistView() {
  const { items, total, isLoading } = useSelector(state => state.wishlist);
  const dispatch = useCallback(useDispatch(), []);
  const addItem = item => dispatch(addWishlistItem(item));

  useEffect(() => {
    // #TODO: Fix save on first load
    if (!isLoading) {
      const userID = Firebase.auth().currentUser.uid;

      if (userID) {
        const path = 'users/' + userID + '/wishlist';
        Firebase.database().ref(path).set(items);
      }
    }
  }, [items, isLoading]);

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
