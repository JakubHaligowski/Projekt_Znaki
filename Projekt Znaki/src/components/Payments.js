import { useContext } from "react";
import { VisitContext } from "../store/visit";
import styles from "./Payments.module.css";

function Payments() {
  const {
    visitState: {
      type: {price}
    },
  } = useContext(VisitContext);

  return (
    <div className={styles.container}>
      <div className={styles.visit_info}>
        <span className={styles.title}>Razem:</span>
        <span className={styles.text}>{price}</span>
      </div>
      <div className={styles.visit_info}>
        <span className={styles.title}>Sposób płatność:</span>
        <span className={styles.text}>Płatne w przychodni</span>
      </div>
    </div>
  );
}

export default Payments;
