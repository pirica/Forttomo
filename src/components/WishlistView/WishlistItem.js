import React, { useState } from 'react';

import WantedItem from './WantedItem';
import DoubleClickInput from './DoubleClickInput';

function WishlistItem(props) {
  const [name, setName] = useState(props.name || 'ITEM NAME');
  const [price, setPrice] = useState(props.price || '0');

  const itemRef = React.createRef();

  const updateItem = (newName, newPrice) => {
    const updatedItem = new WantedItem(newName, newPrice, props.id);

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
      <DoubleClickInput value={name} onChange={updateName} />
      <DoubleClickInput value={price} onChange={updatePrice} />
      <div
        className='wishlist_delete'
        onClick={() => props.removeItem(props.position)}
      >
        <i className='fas fa-times'></i>
      </div>
    </div>
  );
}

export default WishlistItem;
