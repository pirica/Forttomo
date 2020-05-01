import React, { useContext } from 'react';

import { Draggable } from 'react-beautiful-dnd';

import WishlistContext from '../../context/WishlistContext';
import WishlistItemWrapper from './WishlistItemWrapper';
import DroppableWrapper from './DroppableWrapper';

function WishlistList() {
  const { wishlist, setWishlist } = useContext(WishlistContext);

  const onDragEnd = result => {
    if (!result.destination) return;

    const newOrder = reorder(
      wishlist,
      result.source.index,
      result.destination.index
    );

    setWishlist(newOrder);
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
    <DroppableWrapper onDragEnd={onDragEnd}>
      {wishlist.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {provided => (
            <WishlistItemWrapper
              item={item}
              position={index}
              provided={provided}
              onChange={updateItem}
              removeItem={removeItem}
            />
          )}
        </Draggable>
      ))}
    </DroppableWrapper>
  );
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default WishlistList;
