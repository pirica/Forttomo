import React, { useContext } from 'react';

import WishlistContext from '../../context/WishlistContext';
import WishlistItem from './WishlistItem/WishlistItem';
import uuid from 'uuidv4';

function WishlistList() {
  const { wishlist, setWishlist } = useContext(WishlistContext);

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
    <>
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
    </>
  );
}

export default WishlistList;
