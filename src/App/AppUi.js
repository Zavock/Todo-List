import React, {useContext} from 'react';
import { TodoTitle } from '../TodoTitle'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButtonCreate } from '../TodoButtonCreate';
import { TodosLoading } from '../TodosLoading';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

const AppUi = () => {
  const {
    loading,
    error,
    searchTodo,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal
  } = useContext(TodoContext);

  return (
    <div className='container'>
      <TodoTitle />
      <TodoSearch />

      <TodoList>
        {loading && 
        <>
          <TodosLoading />
          <TodosLoading />
        </>
        }
        {error && <p>Hubo un error</p>}
        {(!loading && searchTodo.length === 0) && <p style={{color:'rgba(216,150,84,1)', textAlign:'center', fontSize:'20px', fontWeight:'bold'}}>Create a new TODO!</p>}
        {searchTodo.map(todo => 
          <TodoItem 
            key={todo.text}
            text={todo.text}
            complete={ todo.complete }
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        )}
      </TodoList>
      <TodoButtonCreate setOpenModal={setOpenModal} />
      <img src='https://i.pinimg.com/originals/80/21/74/8021744fc275101ed9a4b75ace41f168.gif' className='CampFire' alt='campfire'/>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      
    </div>
  );
}

export default AppUi;