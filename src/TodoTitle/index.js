import React, {useContext} from 'react';
import {TodoContext} from '../TodoContext/index'
import './TodoTitle.css'

const TodoTitle = () => {
  const {
    todoCompleted,
    totalTodos
  } = useContext(TodoContext);
  return (
    <div className='containerTitle'>
      <img src='https://cdna.artstation.com/p/assets/images/images/052/141/832/original/johan-cediel-rodriguez-pixel-art-take-008.gif?1659036879' alt='solaire-astora'/>
      <h1 className='TodoTitle'>
        Has completado <span>{todoCompleted}</span> de <span>{totalTodos}</span> TODOs
      </h1>
    </div>
    
  );
}

export { TodoTitle };