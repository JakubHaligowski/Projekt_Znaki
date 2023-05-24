import styles from "./OptionButton.module.css";


function OptionButton(props) {
    
  return (
    <div key={props.key} className={props.selected ? styles.button_selected : styles.button} onClick={props.onClick}>
      <div className={styles.button_icon}>
        {props.icon}
      </div>
      <div className={styles.button_text}>{props.text}</div>
    </div>
  );
}

export default OptionButton;
