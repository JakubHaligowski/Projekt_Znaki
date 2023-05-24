import { useContext, useEffect, useState } from "react";
import { useVisitActions, VisitContext } from "../store/visit";
import styles from "./VisitDetails.module.css";
import VisitDetailsButton from "./VisitDetailsButton";

const buttons = [
  { id: 1, purpose: "Wizyta kontrolna", price: "80zł" },
  { id: 2, purpose: "Choroba", price: "120zł" },
  { id: 3, purpose: "Wypisanie recepty", price: "30zł" },
  { id: 4, purpose: "Konsulatacje", price: "80zł" },
  { id: 5, purpose: "Szczepienie", price: "100zł" },
];

function VisitDetails() {
  const { setVisitType } = useVisitActions();
  const {
    visitState: { type },
  } = useContext(VisitContext);

  useEffect(() => {
    setVisitType(buttons[0]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      {buttons.map((button) => (
        <VisitDetailsButton
          selected={button.id === type.id}
          purpose={button.purpose}
          price={button.price}
          onClick={() => {
          setVisitType(button);
          }}
        />
      ))}
    </div>
  );
}

export default VisitDetails;
