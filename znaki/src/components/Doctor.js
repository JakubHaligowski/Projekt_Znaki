import styles from "./Doctor.module.css";
import { Link } from "react-router-dom";

import { ReactComponent as Arrow1 } from "../icons/Arrow1.svg";
import { ReactComponent as Star } from "../icons/Star.svg";
import { useVisitActions } from "../store/visit";

function Doctor(props) {
  const { img, name, date, raiting, specialization } = props.doctor;
  const { setDoctor } = useVisitActions();

  return (
    <div className={styles.container}>
      <div id={styles.image}>
        <img src={img} alt="Doctor" id={styles.picture} />
      </div>
      <div id={styles.info}>
        <span id={styles.title}>lek. {name}</span>
        <span>{specialization}</span>
        <div>
          <span>najbliższy termin: </span>
          <span id={styles.date}>{date}</span>
        </div>
      </div>
      <div>
        <div>
          <span id={styles.opinions}>przeglądaj opinie</span> <Star />{" "}
          <span id={styles.raiting}>{raiting}</span>
        </div>
        <Link to="/new" style={{ textDecoration: "none" }}>
          <div id={styles.button} onClick={() => setDoctor(props.doctor)}>
            Umów wizytę
            <Arrow1 />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Doctor;
