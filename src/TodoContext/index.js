import React,{createContext, useState} from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext()
const TodoProvider = ({children}) => {
  const {item:todo, saveItems, loading, error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const todoCompleted = todo.filter(todo => 
    todo.complete
  ).length;

  const searchTodo = todo.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )

  const totalTodos = todo.length;
  
  const completeTodos = (text) => {
    const newTodos = [...todo];
    const indexTodo = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[indexTodo].complete = true;
    saveItems(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todo];
    newTodos.push({
      text,
      complete:false
    })
    saveItems(newTodos)
  }

  const deleteTodos = (text) => {
    const newTodos = [...todo];
    const indexTodo = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(indexTodo,1)
    saveItems(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      todoCompleted,
      totalTodos,
      searchValue,
      setSearchValue,
      searchTodo,
      completeTodos,
      addTodo,
      deleteTodos,
      openModal,
      setOpenModal
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };