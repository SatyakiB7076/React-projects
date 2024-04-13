import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import ListBody from "./Components/ListBody";
import ErrorMessage from "./Components/ErrorMessage";
import "./App.css";
import { Container1, Container2 } from "./Components/Container";
import InputFoodItem from "./Components/InputFoodItem";
import { useState } from "react";
import React from "react";

function App() {
  let [foodItem, setFoodItem] = useState([]);

  let onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value= "";
      //insted of pushing elements into the old array we are copying it and setting the state
      let newItems = [...foodItem, newFoodItem];
      setFoodItem(newItems);
    }
  };
  return (
    <>
      <Container1>
        <Header />
        <InputFoodItem handleKeyDown={onKeyDown} />

        <ListBody items={foodItem} />
        <ErrorMessage items={foodItem} />
      </Container1>
      <Container2>
        <p>Please follow the Above healthy food diet chart</p>
      </Container2>
    </>
  );
}

export default App;
