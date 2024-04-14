import React from "react";
import { MdDelete } from "react-icons/md";

function Todo(props) {

  return (
    <div className="row kg-row">
      <div className="col-6">{props.todoName}</div>
      <div className="col-4">{props.todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger kg-button" onClick={()=>{
          props.onDeleteClick(props.todoName)
        }}>
          <MdDelete/>
        </button>
      </div>
    </div>
  );
}


export default Todo;
