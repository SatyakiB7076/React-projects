import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import {TodoItemsContext} from './Store/TodoItemStore'
function App() {
  
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
   //using a method in setmethod so react will always pass the current updated value 
    setTodoItems((currValue)=>[
      ...currValue, {name: itemName, dueDate: itemDate}]);
  };
const handleDeleteItem=(todoItemName)=>{
// console.log(`item that got deleted: ${todoItemName}`);
const newTodoItems=todoItems.filter(item=>item.name!== todoItemName);
setTodoItems(newTodoItems);
}


  return (
    
    <TodoItemsContext.Provider value={todoItems}>
    
      <Header />
      <center className="container">
        <AddTodo onSubmit={handleNewItem} />
        <WelcomeMessage/>
        <TodoItem onDeleteClick={handleDeleteItem}/>
      </center>
    
    </TodoItemsContext.Provider>
  );
}

export default App;
