import React, { useContext } from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import WishlistContext from '../../context/WishlistContext';
import WishlistItem from './WishlistItem/WishlistItem';

function WishlistList() {
  const { wishlist, setWishlist } = useContext(WishlistContext);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

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
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable'>
        {provided => {
          return (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {wishlist.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {provided => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <WishlistItem
                            position={index}
                            name={item.name}
                            category={item.category}
                            price={item.price}
                            id={item.id}
                            removeItem={removeItem}
                            onChange={updateItem}
                          />
                        </div>
                      );
                    }}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}

export default WishlistList;
