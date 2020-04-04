import React, { useState } from 'react';

import WantedItem from './WantedItem';
import WishlistInput from './WishlistInput';

function WishlistItem(props) {
  const [name, setName] = useState(props.name || 'ITEM NAME');
  const [price, setPrice] = useState(props.price || '0');

  const itemRef = React.createRef();

  const updateItem = (newName, newPrice) => {
    const sanitizedPrice = Number.isInteger(+newPrice) ? +newPrice : 0;

    const updatedItem = new WantedItem(newName, sanitizedPrice, props.id);

    setName(newName);
    setPrice(newPrice);
    props.onChange(props.position, updatedItem);
  };

  const updatePrice = newPrice => {
    updateItem(name, newPrice);
  };

  const updateName = newName => {
    updateItem(newName, price);
  };

  return (
    <div className='wishlist_item wishlist_columns' ref={itemRef}>
      <WishlistInput value={name} onChange={updateName} />
      <WishlistInput value={price} onChange={updatePrice} />
      <div
        className='wishlist_delete'
        onClick={() => props.removeItem(props.position)}
      >
        <i className='fas fa-times' />
      </div>
      <div className='wishlist_handler'>
        <i className='fas fa-grip-lines' />
      </div>
    </div>
  );
}

export default WishlistItem;
