import React, { useContext } from "react";
import Todo from "./Todo";
import "./TodoItem.css";
import {TodoItemsContext} from '../Store/TodoItemStore'


function TodoItem() {
  const {todoItems,deleteItem}=useContext(TodoItemsContext);
 
  return (
    <div>
      {todoItems.map((item) => (
        <Todo
          todoName={item.name}
          key={item.name}
          todoDate={item.dueDate}
          onDeleteClick={deleteItem}
        />
      ))}
    </div>
  );
}

export default TodoItem;
