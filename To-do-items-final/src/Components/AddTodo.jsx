import React, { useRef } from "react";
import { MdAddTask } from "react-icons/md";
function AddTodo({ onSubmit }) {
  const todoNameElement=useRef();
  const dueDateElement=useRef();


  const handleButtonClicked = (event) => {
   
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDates=dueDateElement.current.value;
     if (!todoName || !dueDates) { 
      alert("Please fill out all fields"); 
      return; 
    }
    onSubmit(todoName, dueDates);
    todoNameElement.current.value="";
    dueDateElement.current.value="";
  };
  
  return (
    <div>
      <form className="row kg-row" onSubmit={handleButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-button"
            
          >
            <MdAddTask />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
