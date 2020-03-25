import React, { useContext } from 'react';

import WishlistData from './WishlistData';
import WantedItem from './WantedItem';

import WishlistContext from './../../context/WishlistContext';
import InputContext from './../../context/InputContext';
import './WishlistView.scss';
import WishlistList from './WishlistList';
import uuidv4 from 'uuidv4';

function WishlistView() {
  const { wishlist, wishlistTotal, completionDate, setWishlist } = useContext(
    WishlistContext
  );
  const { vbucks, alerts, dailies } = useContext(InputContext);
  const vbucksTotal = vbucks + alerts + dailies;

  const addNewItem = () => {
    setWishlist([...wishlist, new WantedItem('ITEM NAME', '0', uuidv4())]);
  };

  return (
    <div className='wishlist_view card'>
      <WishlistList />
      <button className='wishlist_add_button' onClick={addNewItem}>
        <i className='fas fa-plus'></i>
      </button>
      <WishlistData
        completionDate={completionDate}
        wishlistTotal={wishlistTotal}
        vbucksTotal={vbucksTotal}
      />
    </div>
  );
}

export default WishlistView;
