import styles from "./Container.module.css";
const Container1 = ({children}) => {
  return <div className={styles.container1}>{children}</div>;
};
const Container2 = ({children}) => {
  return <div className={styles.container2}>{children}</div>;
};
export {Container1,Container2};