import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export const Draggable: React.FC<{id: string}> = (props) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
  } : undefined;


  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}
