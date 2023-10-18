import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function DeleteIcon({onDelete, className}){
  return (
    <RiDeleteBin6Line
      className={className}
      onClick={onDelete}
    />
  )
}

export { DeleteIcon }