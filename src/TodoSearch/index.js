import React,{useContext} from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

const TodoSearch = () => {
  const {
    searchValue,
    setSearchValue
  } = useContext(TodoContext);
  return (
    <input className='TodoSearch' placeholder='Search TODO' value={searchValue} onChange={(e) => {
      setSearchValue(e.target.value);
    }} />
  );
}

export { TodoSearch };