import React from 'react';

import WishlistItem from './WishlistItem/WishlistItem';
import uuid from 'uuidv4';

function WishlistList({ wishlist, onDelete, onChange }) {
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
            removeItem={position => onDelete(position)}
            onChange={(position, item) => onChange(position, item)}
          />
        );
      })}
    </>
  );
}

export default WishlistList;
