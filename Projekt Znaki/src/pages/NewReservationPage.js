import styles from "./NewReservationPage.module.css";
import TopBar from "../components/TopBar";
import UniWindow from "../components/UniWindow";
import ChosenDoctor from "../components/ChosenDoctor";
import VisitDetails from "../components/VisitDetails";
import BackButton from "../components/BackButton";
import AcceptButton from "../components/AcceptButton";
import ChooseHour from "../components/ChooseHour";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar/Calendar";
import { useVisitActions } from "../store/visit";
import "react-calendar/dist/Calendar.css";

function NewReservationPage() {
  const { setVisitDate } = useVisitActions();

  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.background}>
        <UniWindow id={styles.doctor} label="Wybrany lekarz">
          <ChosenDoctor
            name="Andrzej Mądry"
            specialization="Pediatra"
            raiting="3.9"
          />
        </UniWindow>

        <UniWindow id={styles.visit_details} label="Cel wizyty">
          <VisitDetails />
        </UniWindow>

        <UniWindow id={styles.calendar} label="Wybierz termin wizyty">
          <div id={styles.calendar_container}>
            <Calendar
              style={{ border: "none" }}
              onChange={(value) => setVisitDate(value)}
            />
          </div>
        </UniWindow>

        <UniWindow id={styles.time} label="Wybierz godzinę wizyty">
          <ChooseHour />
        </UniWindow>

        <div id={styles.buttons}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <BackButton text="Powrót" showArrow={true}/>
          </Link>
          <Link to="/confirm" style={{ textDecoration: "none" }}>
            <AcceptButton text="Umów wizyte" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewReservationPage;
