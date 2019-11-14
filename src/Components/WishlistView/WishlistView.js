import React, { useState, useEffect } from 'react';

import uuid from 'uuidv4';

import WishlistItem from './WishlistItem/WishlistItem';
import WantedItem from './WantedItem';
import './WishlistView.scss';

function WishlistView() {
  const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
  const [wishlist, setWishlist] = useState(storedWishlist || []);

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

  useEffect(() => {
    const wishlistString = JSON.stringify(wishlist);

    localStorage.setItem('wishlist', wishlistString);
  }, [wishlist]);

  return (
    <div className='section'>
      <h1>Wishlist</h1>
      <div className='timeline_view card'>
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
        <button onClick={addNewItem}>Add Item</button>
      </div>
    </div>
  );
}

export default WishlistView;
