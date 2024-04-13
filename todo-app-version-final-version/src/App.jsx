import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Coding",
      dueDate: "04/04/2023",
    },
    {
      name: "Watch Anime",
      dueDate: "06/04/2023",
    },
    {
      name: "Grocery",
      dueDate: "07/04/2023",
    },
  ];
  return (
    <>
      <Header />
      <center className="container">
        <AddTodo />
        <TodoItem todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
