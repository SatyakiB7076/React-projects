import React, { useContext } from 'react';
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from '../Store/TodoItemStore';

function WelcomeMessage() {
  const {todoItems}= useContext(TodoItemsContext)
  return (
    <center className={styles.message}>
      {todoItems.length === 0 && "No Tasks! Enjoy your day Sir!"}
    </center>
  );
}

export default WelcomeMessage;

