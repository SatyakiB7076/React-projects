import React from 'react';
import styles from "./WelcomeMessage.module.css";

function WelcomeMessage({ todoItems }) {
  return (
    <center className={styles.message}>
      {todoItems.length === 0 && "No Tasks! Enjoy your day Sir!"}
    </center>
  );
}

export default WelcomeMessage;

