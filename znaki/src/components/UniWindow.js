import styles from "./UniWindow.module.css";

function UniWindow(props) {
  return (
    <div id={props.id} className={styles.window}>
      <div className={styles.label}>
        <span className={styles.label_text}>{props.label}</span>
      </div>
      <div className={styles.content}>
        {props.children}
        </div>
    </div>
  );
}

export default UniWindow;
