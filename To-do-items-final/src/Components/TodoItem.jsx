import React, { useContext } from "react";
import Todo from "./Todo";
import "./TodoItem.css";
import {TodoItemsContext} from '../Store/TodoItemStore'


function TodoItem() {
  const {todoItems}=useContext(TodoItemsContext);
 
  return (
    <div>
      {todoItems.map((item) => (
        <Todo
          todoName={item.name}
          key={item.name}
          todoDate={item.dueDate}
          
        />
      ))}
    </div>
  );
}

export default TodoItem;
