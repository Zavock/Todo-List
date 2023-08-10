import React from 'react';
import './TodoButtonCreate.css'
const TodoButtonCreate = ({setOpenModal}) => {
  return (
    <button className='ButtonCreate' onClick={() => {
      setOpenModal(state => !state);
    }}>
      +
    </button>
  );
}

export { TodoButtonCreate };