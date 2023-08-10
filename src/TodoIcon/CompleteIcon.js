import React from 'react';
import { TodoIcon } from '.';
const CompleteIcon = ({complete, onComplete}) => {
  return (
    <TodoIcon 
      type='check'
      color={complete ? 'green' : 'gray'}
      onClick={onComplete}
    />
  );
}
export { CompleteIcon }