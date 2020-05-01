import React from 'react';
import PropTypes from 'prop-types';

import WishlistItem from './WishlistItem';

const WishlistItemWrapper = props => {
  const { item, position, provided, onChange, removeItem } = props;

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <WishlistItem
        position={position}
        name={item.name}
        price={item.price}
        id={item.id}
        removeItem={removeItem}
        onChange={onChange}
      />
    </div>
  );
};

WishlistItemWrapper.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  position: PropTypes.number.isRequired,
  provided: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default WishlistItemWrapper;
