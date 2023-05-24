import styles from "./MainPanel.module.css";
import SearchBar from "./SearchBar";
import Doctor from "./Doctor";

import doc1 from "../img/doc1.png";
import doc2 from "../img/doc2.png";
import doc3 from "../img/doc3.png";
import doc4 from "../img/doc4.png";

//to by się przydało wyrzucić od
//jakiegoś JSONA żeby można było z różnych miejsc zaciągać

const doctors = [
  {
    id: 1,
    img: doc1,
    name: "Jacek Soplica",
    specialization: "Pediatra",
    date: "31.12",
    raiting: "3.9",
  },
  {
    id: 2,
    img: doc2,
    name: "Andrzej Mądry",
    specialization: "Pediatra",
    date: "Jutro",
    raiting: "2.9",
  },
  {
    id: 3,
    img: doc3,
    name: "Jan Kowalski",
    specialization: "Lekarz rodzinny",
    date: "21.06",
    raiting: "4.9",
  },
  {
    id: 4,
    img: doc4,
    name: "Anna Skóra",
    specialization: "Lekarz rodzinny",
    date: "21.06",
    raiting: "4.9",
  },
];

function MainPanel() {
  return (
    <div className={styles.main_panel}>
      <SearchBar />
      <div>
        <h1 className={styles.title}>Ostatnie wyszukiwania</h1>
      </div>
      <div className={styles.doctors}>
        {doctors.map((doctor) => (
          <Doctor doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default MainPanel;
