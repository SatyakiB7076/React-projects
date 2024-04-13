import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import { useState } from "react";

export default function App() {
  let [display, setDisplay] = useState("");
  const onButtonClick = (event) => {
    let buttonText = event.target.innerText;
    if(buttonText === "C"){
      setDisplay("");
    }else if(buttonText === "="){
      setDisplay(eval(display));
    }else{
      const newDisplay=display+buttonText;
      setDisplay(newDisplay);
    }
  };

  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={styles.calculator}>
      <Display displayValue={display} />
      <Buttons buttons={buttons} onButtonClick={onButtonClick} />
    </div>
  );
}
