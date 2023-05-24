import styles from "./ChosenDoctor.module.css";

import { ReactComponent as Star } from "../icons/Star.svg";
import { useContext } from "react";
import { VisitContext } from "../store/visit";

function ChosenDoctor(props) {
  const {
    visitState: {
      doctor: { name, specialization, raiting, img },
    },
  } = useContext(VisitContext);

  return (
    <div className={styles.container}>
      <div id={styles.image}>
        <img src={img} alt="Doctor" id={styles.picture} />
      </div>
      <div id={styles.info}>
        <span id={styles.title}>lek. {name}</span>
        <span>{specialization}</span>

        <div>
          <span id={styles.opinions}>przeglądaj opinie</span> <Star />{" "}
          <span id={styles.raiting}>{raiting}</span>
        </div>
      </div>
    </div>
  );
}

export default ChosenDoctor;
