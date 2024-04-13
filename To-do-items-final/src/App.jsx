import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [
    {
      name: "Coding",
      dueDate: "04/04/2023",
    },
    {
      name: "Watch Anime",
      dueDate: "04/04/2023",
    },
    {
      name: "Grocery",
      dueDate: "04/04/2023",
    },
  ];
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDate) => {
    // console.log(`new item added : ${itemName} date:${itemDate}`);
    setTodoItems([...todoItems, { name: itemName, duedate: itemDate }]);
  };
  return (
    <>
      <Header />
      <center className="container">
        <AddTodo onSubmit={handleNewItem} />
        <WelcomeMessage />
        <TodoItem todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
