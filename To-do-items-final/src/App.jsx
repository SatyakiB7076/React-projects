import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {
  
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    // console.log(`new item added : ${itemName} date:${itemDate}`);
    setTodoItems([...todoItems, { name: itemName, duedate: itemDate }]);
  };
const handleDeleteItem=(todoItemName)=>{
// console.log(`item that got deleted: ${todoItemName}`);
const newTodoItems=todoItems.filter(item=>item.name!== todoItemName);
setTodoItems(newTodoItems);
}


  return (
    <>
      <Header />
      <center className="container">
        <AddTodo onSubmit={handleNewItem} />
        {todoItems.length===0 && <WelcomeMessage />}
        <TodoItem todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
      </center>
    </>
  );
}

export default App;
