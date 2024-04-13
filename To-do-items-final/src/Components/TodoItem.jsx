 import React from 'react';
import Todo from './Todo';

function TodoItem(props) {
  return (
    <div className="todo-container">
        {props.todoItems.map(item=><Todo todoName={item.name} key={item.name} todoDate={item.duedate} onDeleteClick={props.onDeleteClick}/>)}
    </div>
  )
}

export default TodoItem
