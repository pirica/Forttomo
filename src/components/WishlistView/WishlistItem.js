import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import WantedItem from './WantedItem';
import WishlistInput from './WishlistInput';

const WishlistItem = props => {
  const { id, position, removeItem, onChange } = props;
  const [name, setName] = useState(props.name || 'ITEM NAME');
  const [price, setPrice] = useState(props.price || '0');
  const itemRef = useRef();

  const updateItem = (newName, newPrice) => {
    const sanitizedPrice = Number.isInteger(+newPrice) ? +newPrice : 0;

    const updatedItem = new WantedItem(newName, sanitizedPrice, id);

    setName(newName);
    setPrice(newPrice);
    onChange(position, updatedItem);
  };

  const updatePrice = newPrice => {
    updateItem(name, newPrice);
  };

  const updateName = newName => {
    updateItem(newName, price);
  };

  const handleRemove = () => {
    removeItem(position);
  };

  return (
    <div className='wishlist_item wishlist_columns' ref={itemRef}>
      <WishlistInput value={name} onChange={updateName} />
      <WishlistInput value={price} onChange={updatePrice} />
      <div className='wishlist_delete' onClick={handleRemove}>
        <i className='fas fa-times' />
      </div>
      <div className='wishlist_handler'>
        <i className='fas fa-grip-lines' />
      </div>
    </div>
  );
};

WishlistItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WishlistItem;
