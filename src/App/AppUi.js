import React, {useContext} from 'react';
import { TodoTitle } from '../TodoTitle'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButtonCreate } from '../TodoButtonCreate';
import { TodosLoading } from '../TodosLoading';
import CampFire from '../Campfire';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

const AppUi = () => {
  const styleCampfire = {
    position:'fixed',
    bottom: '24px',
    height: '100px',
    width: '100px',
  }
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
    <React.Fragment>
      <TodoTitle />
      <TodoSearch />

      <TodoList>
        {loading && 
        <>
          <TodosLoading />
          <TodosLoading />
          <TodosLoading />
        </>
        }
        {error && <p>Hubo un error</p>}
        {(!loading && searchTodo.length === 0) && <p style={{color:'white'}}>Crea un TODO!</p>}
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
      <CampFire style={styleCampfire} />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      
    </React.Fragment>
  );
}

export default AppUi;