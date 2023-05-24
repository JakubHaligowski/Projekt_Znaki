import styles from "./UpcomingVisit.module.css";
import doc1 from "../img/doc1.png";


function UpcomingVisit(props) {
  return (
    <div className={styles.container}>
      <div id={styles.image}>
        <img src={doc1} alt="Doctor" id={styles.picture} />
      </div>
      <div id={styles.info}>
        <span id={styles.title}>lek. {props.name}</span>
        <span>{props.specialization}</span>
        <div>
          <span>Termin: </span>
          <span id={styles.date}>{props.date}</span>
        </div>
        <div>
          <span>Cel: </span>
          <span id={styles.date}>{props.purpose}</span>
        </div>
      </div>
    </div>
  );
}

export default UpcomingVisit;
