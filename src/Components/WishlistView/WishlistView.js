import React, { useContext } from 'react';

import uuid from 'uuidv4';

import WishlistItem from './WishlistItem/WishlistItem';
import WantedItem from './WantedItem';

import WishlistContext from './../../context/WishlistContext';
import './WishlistView.scss';

function WishlistView() {
  const { wishlist, wishlistTotal, completionDate, setWishlist } = useContext(
    WishlistContext
  );

  const addNewItem = () => {
    setWishlist([
      ...wishlist,
      new WantedItem('ITEM NAME', 'Uncommon Outfit', '800')
    ]);
  };

  const removeItem = position => {
    const updatedWishlist = [...wishlist];
    updatedWishlist.splice(position, 1);

    setWishlist(updatedWishlist);
  };

  const updateItem = (position, item) => {
    const newWishlist = [...wishlist];
    newWishlist[position] = item;

    setWishlist(newWishlist);
  };

  return (
    <div className='section'>
      <h1>Wishlist</h1>
      <div className='wishlist_view card'>
        {wishlist.map((item, index) => {
          return (
            <WishlistItem
              key={uuid()}
              position={index}
              name={item.name}
              category={item.category}
              price={item.price}
              removeItem={removeItem}
              onChange={updateItem}
            />
          );
        })}
        <div className='wishlist_data'>
          <div className='completion_date'>{completionDate}</div>
          <div className='wishlist_total'>{`Total: ${wishlistTotal}`}</div>
        </div>
        <button onClick={addNewItem}>Add Item</button>
      </div>
    </div>
  );
}

export default WishlistView;
