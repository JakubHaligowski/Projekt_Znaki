import React from "react";
import { useContext } from "react";
import MonthContext from "./MonthContext";
import { ReactComponent as Arrow } from "../../icons/Arrow3.svg";
import "./Calendar.css";

function MonthSelect() {
  const { monthNumber, setMonthNumber } = useContext(MonthContext);

  const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

  function previousMonthHandler() {
    if (monthNumber > 0) {
      setMonthNumber(monthNumber - 1);
    }
  }

  function nextMonthHandler() {
    if (monthNumber < 11) {
      setMonthNumber(monthNumber + 1);
    }
  }

  return (
    <div id="month_select">
      <div>
        <button className={monthNumber < 1 ? "button_disabled button" : "button"} onClick={() => previousMonthHandler()}>
          <Arrow
            stroke={monthNumber < 1 ? "#ECF1FF" : "#676868"}
            className="arrow1"
          />
        </button>
      </div>
      <div id="month_header">{months[monthNumber]}</div>
      <div>
        <button className={monthNumber > 10 ? "button_disabled button" : "button"} onClick={() => nextMonthHandler()}>
          <Arrow
            stroke={monthNumber > 10 ? "#ECF1FF" : "#676868"}
            className="arrow2"
          />
        </button>
      </div>
    </div>
  );
}

export default MonthSelect;
