import styles from "./MainPage.module.css";
import TopBar from "../components/TopBar";
import OptionsPanel from "../components/OptionsPanel";
import MainPanel from "../components/MainPanel";
import SmallWindow from "../components/SmallWindow";
import UpcomingVisit from "../components/UpcomingVisit";
import Socials from "../components/Socials";


function MainPage() {
  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.background}>
        <div id={styles.main_window}>
          <OptionsPanel />
          <MainPanel />
        </div>

        <div id={styles.small_windows}>
          <SmallWindow className={styles.window_upcoming} title="Nadchodzące wizyty">
            <UpcomingVisit
              name="Jacek Soplica"
              date="Pojutrze"
              purpose="Szczepienie"
            />
          </SmallWindow>
          <SmallWindow id={styles.window_socials} title="O nas" >
            <Socials/>
          </SmallWindow>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
