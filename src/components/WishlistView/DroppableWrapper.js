import React from 'react';
import PropTypes from 'prop-types';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function DroppableWrapper({ children, onDragEnd }) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable'>
        {provided => {
          return (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {children}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}

DroppableWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  onDragEnd: PropTypes.func.isRequired,
};

export default DroppableWrapper;
