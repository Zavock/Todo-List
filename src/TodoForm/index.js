import React, {useContext, useState} from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext';

const TodoForm = () => {
  const [newValueTodo, setNewValueTodo] = useState('');
  const {
    addTodo,
    setOpenModal
  } = useContext(TodoContext);

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newValueTodo)
    setOpenModal(false)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (e) => {
    setNewValueTodo(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/432780e4-f104-4387-987f-8611d44dc1c4/d8bsfln-451d9d25-e8e1-4bf5-badf-06f5154dfb3f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzMjc4MGU0LWYxMDQtNDM4Ny05ODdmLTg2MTFkNDRkYzFjNFwvZDhic2Zsbi00NTFkOWQyNS1lOGUxLTRiZjUtYmFkZi0wNmY1MTU0ZGZiM2YuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lmMZBUyHiozshYUveGt0-H0sHLez4SDP8vqFsZDvZYc' alt='hollow' />
      <label>Ingresa la actividad</label>
      <input onChange={onChange}></input>
      <div className="TodoForm-buttonContainer">
        <button type='' className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancel</button>
        <button type='submit' className="TodoForm-button TodoForm-button--add">Add</button>
      </div>
    </form>
  );
}

export  {TodoForm};