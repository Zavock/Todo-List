import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti'
import { FaCheck } from 'react-icons/fa'
import './TodoIcon.css'

const iconsType = {
  'check': (color) => <FaCheck className='Icon-library' fill={color} />,
  'delete': (color) => <TiDeleteOutline className='Icon-library' fill={color} />
}
const TodoIcon = ({type, color, onClick}) => {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconsType[type](color)}
    </span>
  );
}

export {TodoIcon} ;