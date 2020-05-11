import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

import WishlistItemWrapper from './WishlistItemWrapper';
import DroppableWrapper from './DroppableWrapper';

import { useSelector, useDispatch } from 'react-redux';
import {
  updateWishlistItem,
  removeWishlistItem,
  moveWishlistItem,
} from '../../store/actions/wishlistActions';

function WishlistList() {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();
  const updateItem = item => dispatch(updateWishlistItem(item));
  const removeItem = id => dispatch(removeWishlistItem(id));
  const moveItem = (start, end) => dispatch(moveWishlistItem(start, end));

  const onDragEnd = result => {
    if (!result.destination) return;

    moveItem(result.source.index, result.destination.index);
  };

  return (
    <DroppableWrapper onDragEnd={onDragEnd}>
      {wishlist.items.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {provided => (
            <WishlistItemWrapper
              item={item}
              provided={provided}
              onChange={item => updateItem(item)}
              removeItem={id => removeItem(id)}
            />
          )}
        </Draggable>
      ))}
    </DroppableWrapper>
  );
}

export default WishlistList;
