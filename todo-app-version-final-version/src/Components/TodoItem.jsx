import React from 'react';
import Todo from './Todo';

function TodoItem({todoItems}) {
  return (
    <div className="todo-container">
        {todoItems.map(item=><Todo todoName={item.name} todoDate={item.duedate} />)}
    </div>
  )
}

export default TodoItem
