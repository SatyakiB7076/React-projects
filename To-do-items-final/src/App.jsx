import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useReducer} from "react";
import {TodoItemsContext} from './Store/TodoItemStore'

const todoItemsReducer=(currTodoItems,action)=>{
  let newTodoItems=currTodoItems;
if(action.type==="NEW_ITEM"){
  newTodoItems=[...currTodoItems, {name: action.payload.itemName, dueDate: action.payload.itemDate}];
}else if(action.type==="DELETE_ITEM"){
  newTodoItems=currTodoItems.filter((item)=>item.name!== action.payload.itemName);
  
}
return newTodoItems;
}
function App() {
  
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems]=useReducer(todoItemsReducer,[]);

  const addNewItem = (itemName, itemDate) => {
    const newItemAction={
      type:"NEW_ITEM",
      payload:{
        itemName,itemDate
      }
    };
    dispatchTodoItems(newItemAction);   
  };

  const deleteItem = (itemName) => {
    const deleteItemAction={
      type:"DELETE_ITEM",
      payload:{
        itemName
      }
    };
    dispatchTodoItems(deleteItemAction);   
  };



  return (
    
    <TodoItemsContext.Provider value={{todoItems,addNewItem,deleteItem}}>
    
      <Header />
      <center className="container">
        <AddTodo />
        <WelcomeMessage/>
        <TodoItem />
      </center>
    
    </TodoItemsContext.Provider>
  );
}

export default App;
