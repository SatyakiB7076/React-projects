 import React from 'react';
import Todo from './Todo';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <div>
        {props.todoItems.map(item=><Todo todoName={item.name} key={item.name} todoDate={item.duedate} onDeleteClick={props.onDeleteClick}/>)}
    </div>
  )
}

export default TodoItem
