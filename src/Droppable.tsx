import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export const Droppable: React.FC<{id: string}> = (props) => {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    backgroundColor: isOver ? 'green' : undefined,
    width: '500px',
    height: '500px',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
