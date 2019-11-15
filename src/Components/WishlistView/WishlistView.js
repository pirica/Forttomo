import React, { useState, useEffect } from 'react';

import WishlistContext from './../../context/WishlistContext';
import uuid from 'uuidv4';

import WishlistItem from './WishlistItem/WishlistItem';
import WantedItem from './WantedItem';
import './WishlistView.scss';

function WishlistView() {
  const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
  const [wishlist, setWishlist] = useState(storedWishlist || []);
  const [wishlistTotal, setWishlistTotal] = useState(0);
  const [completionDate, setCompletionDate] = useState('June 11, 1992');

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

    const newTotal = wishlist
      .map(el => +el.price)
      .reduce((sum, current) => sum + current);
    setWishlistTotal(newTotal);
  }, [wishlist]);

  return (
    <div className='section'>
      <h1>Wishlist</h1>
      <WishlistContext.Provider
        value={{ wishlist, wishlistTotal, setCompletionDate }}
      >
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
      </WishlistContext.Provider>
    </div>
  );
}

export default WishlistView;
