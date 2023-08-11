import React,{useContext} from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

const TodoSearch = () => {
  const {
    searchValue,
    setSearchValue
  } = useContext(TodoContext);
  return (
    <div className='containerInput'>
      <input className='TodoSearch' placeholder='Search TODO' value={searchValue} onChange={(e) => {
      setSearchValue(e.target.value);
      }} />
    </div>
    
  );
}

export { TodoSearch };