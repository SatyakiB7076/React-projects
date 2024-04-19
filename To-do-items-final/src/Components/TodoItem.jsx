import React, { useContext } from "react";
import Todo from "./Todo";
import "./TodoItem.css";
import {TodoItemsContext} from '../Store/TodoItemStore'
function TodoItem(props) {
  const todoItemsFromContext=useContext(TodoItemsContext);
 
  return (
    <div>
      {props.todoItems.map((item) => (
        <Todo
          todoName={item.name}
          key={item.name}
          todoDate={item.duedate}
          onDeleteClick={props.onDeleteClick}
        />
      ))}
    </div>
  );
}

export default TodoItem;
