import React, {useContext, useState} from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext';
import CampFire from '../Campfire';

const TodoForm = () => {
  const [newValueTodo, setNewValueTodo] = useState('');
  const {
    addTodo,
    setOpenModal
  } = useContext(TodoContext);

  const styleCampfire = {
    position:'absolute',
    bottom: '28%',
    left: '36.7%',
    height: '100px',
    width: '100px',
  }

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
      <label>Ingresa la actividad</label>
      <textarea onChange={onChange}></textarea>
      <div className="TodoForm-buttonContainer">
        <button type='' className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
        <button type='submit' className="TodoForm-button TodoForm-button--add">Agregar</button>
      </div>
      <CampFire style={styleCampfire} />
    </form>
  );
}

export  {TodoForm};