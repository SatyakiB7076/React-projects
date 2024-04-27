import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../Store/TodoItemStore";

function Todo(props) {
  const {deleteItem}=useContext(TodoItemsContext)
  return (
    <div className="row kg-row">
      <div className="col-6">{props.todoName}</div>
      <div className="col-4">{props.todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger kg-button" onClick={()=>{
          deleteItem(props.todoName)
        }}>
          <MdDelete/> 
        </button>
      </div>
    </div>
  );
}


export default Todo;
