import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import Todo1 from "./Components/Todo1";
import Todo2 from "./Components/Todo2";

function App() {
  return (
    <center className="todo-container">
      <Header />
      <div className="container text-center">
        <AddTodo />
        <Todo1 />
        <Todo2 />
      </div>
    </center>
  );
}

export default App;
