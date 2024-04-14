import React, { useState } from "react";
import { MdAddTask } from "react-icons/md";
function AddTodo({ onSubmit }) {
  let [todoName, setTodoName] = useState("");
  let [dueDates, setdueDates] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setdueDates(event.target.value);
  };
  const handleButtonClicked = () => {
    if (!todoName || !dueDates) { 
      alert("Please fill out all fields"); 
      return; 
    }
    onSubmit(todoName, dueDates);
    setTodoName("");
    setdueDates("");
  };
  
  return (
    <div>
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDates} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleButtonClicked}
          >
            <MdAddTask />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
