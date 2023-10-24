import React from "react";
import "./ToDosLoading.css";

function ToDosLoading() {
  return(
    <div className="loadingTodo-container">
      <span className="loadingTodo-completeIcon"></span>          
      <p className="loadingTodo-text"></p>      
      <span className="loadingTodo-deleteIcon"></span>          
    </div>
  );
}

export { ToDosLoading };