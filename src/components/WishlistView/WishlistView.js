import React, { useContext } from 'react';

import WantedItem from './WantedItem';

import WishlistContext from './../../context/WishlistContext';
import WishlistList from './WishlistList';
import uuidv4 from 'uuidv4';

import './WishlistView.scss';

function WishlistView() {
  const { wishlist, setWishlist } = useContext(WishlistContext);

  const addNewItem = () => {
    setWishlist([...wishlist, new WantedItem('ITEM NAME', '0', uuidv4())]);
  };

  return (
    <div className='wishlist_view card'>
      <h3>Wishlist</h3>
      <div className='wishtlist_labels wishlist_columns'>
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
