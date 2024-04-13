import styles from "../App.module.css";
const Buttons = (props) => {
  return (
    <div className={styles.buttonsContainer}>
      {props.buttons.map((button) => (
        <button key={button} className={styles.button} onClick={props.onButtonClick}>{button}</button>
      ))}
    </div>
  );
};
export default Buttons;
