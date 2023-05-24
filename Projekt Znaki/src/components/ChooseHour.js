import { useState, useEffect, useContext } from "react";
import { data } from "../utility/data.js";

import { ReactComponent as Arrow } from "../icons/Arrow3.svg";
import styles from "./ChooseHour.module.css";
import { useVisitActions, VisitContext } from "../store/visit/index.js";

function ChooseHour() {
  const { setVisitHour } = useVisitActions();
  const {visitState:{hour}} = useContext(VisitContext);
  const [page, setPage] = useState(1);

  const [pageRange, setPageRange] = useState({ start: 0, end: 9 });

  useEffect(() => {
    const start = page * 12 - 12;
    const end = page * 12;

    setPageRange({ start, end });
  }, [page]);

  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <button
          className={styles.arrow}
          disabled={page < 2}
          onClick={() => setPage(page - 1)}
        >
          <Arrow
            stroke={page < 2 ? "#ECF1FF" : "#676868"}
            className={styles.arrow1}
          />
        </button>
        <div className={styles.main}>
          {data.map((t, index) => {
            return index >= pageRange.start && index < pageRange.end ? (
              <button
                className={hour===t.time ? styles.button_general_set :styles.button_general}
                disabled={t.taken}
                key={index}
                onClick={() => setVisitHour(t.time)}
              >
                {t.time}
              </button>
            ) : null;
          })}
        </div>
        <button
          className={styles.arrow}
          disabled={page * 12 >= data.length}
          onClick={() => setPage(page + 1)}
        >
          <Arrow
            stroke={page * 12 >= data.length ? "#ECF1FF" : "#676868"}
            className={styles.arrow2}
          />
        </button>
      </div>
    </div>
  );
}

export default ChooseHour;
