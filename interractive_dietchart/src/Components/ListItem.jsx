import styles from "./ListItem.module.css";
const ListItem = ({ foodItem,handleBuyButton,bought }) => {
  //using Array destructuring
  
  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item ${bought && 'active'}`}>
        <span className={`${styles["kg-span"]}`}>{foodItem}</span>
        <button
          className={styles.button}
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default ListItem;
