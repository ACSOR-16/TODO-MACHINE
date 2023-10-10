import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  console.log("users find all " + searchValue);
  return( 
    <input 
      placeholder='write your ToDo'
      className="TodoSearch"
      value={searchValue}
      onChange={
        (event) => {
          setSearchValue(event.target.value);
        }
      }
     />
  );
}

export { TodoSearch };