import React from 'react';
import './TodoItem.css'
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

const TodoItem = ({ text, complete, onComplete, onDelete }) => {
  return (
    <li className='TodoItem'>
      <CompleteIcon complete={complete} onComplete={onComplete} />
      <p className={`TodoItem-p ${complete && "TodoItem-p--complete"}`}>{ text }</p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}

export { TodoItem };