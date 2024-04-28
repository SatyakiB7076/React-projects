import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

export const TodoItemsContextProvider = ({ children }) => {
  const todoItemsReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if (action.type === "NEW_ITEM") {
      newTodoItems = [
        ...currTodoItems,
        { name: action.payload.itemName, dueDate: action.payload.itemDate },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newTodoItems = currTodoItems.filter(
        (item) => item.name !== action.payload.itemName
      );
    }
    return newTodoItems;
  };
  
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};
