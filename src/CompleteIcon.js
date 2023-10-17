import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';

function CompleteIcon({onComplete, className}) {
  
  return (
    <BsCheckCircle
      className={className}
      // color={completed}
      onClick={onComplete}   
    />
    
  )
}

export { CompleteIcon };