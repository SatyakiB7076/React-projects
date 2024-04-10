import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import { Todo1, Todo2 } from "./Components/Todo";
import "./App.css";

function App() {
  return (
    <center className="container">
      <Header />
      <AddTodo />
      <div className="todo-container">
        <Todo1 />
        <Todo2 />
      </div>
    </center>
  );
}

export default App;
