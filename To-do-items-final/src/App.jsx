import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { TodoItemsContextProvider } from "./Store/TodoItemStore";

function App() {
  return (
    <TodoItemsContextProvider>
      <Header />
      <center className="container">
        <AddTodo />
        <WelcomeMessage />
        <TodoItem />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
