import styles from "./InputFoodItem.module.css";
import React from "react";

const InputFoodItem = ({handleKeyDown}) => {
  
  return (
    <input
      type="text"
      className={styles.searchBox}
      placeholder="Press Enter to add item to the list..."
      onKeyDown={handleKeyDown}
    ></input>
  );
};

export default InputFoodItem;
