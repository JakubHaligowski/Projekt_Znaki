import styles from "./TopBarButton.module.css";

function TopBarButton(props) {
  return (
    <div>
      <div className={styles.button}>
        <div className={styles.icon}>{props.icon}</div>
        <div className={styles.text}>{props.text}</div>
      </div>
    </div>
  );
}

export default TopBarButton;
