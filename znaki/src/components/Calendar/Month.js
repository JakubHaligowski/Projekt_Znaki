import React from "react";
import Day from "./Day";
import { useContext, useState } from "react";
import MonthContext from "./MonthContext";
import { useVisitActions, VisitContext } from "../../store/visit/index.js";

function Month() {
  const { monthNumber, setMonthNumber } = useContext(MonthContext);

  const { setVisitDate } = useVisitActions();

  const [selectedDay, setSelectedDay] = useState();

  function onSelectHandler(dayNumber,id) {
    setSelectedDay(id);
    const d = new Date(2022,monthNumber,dayNumber);
    console.log(d);
    setVisitDate(d);
  }

  
  //Utility functions

  //Returns of a days in a given month
  function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  //Returns a day of the weekk of the first day of a given month
  function firtstDayOfMonth(month, year) {
    return new Date(year, month, 1).getDay();
  }

  //Checks is the day should be marked as weekend
  function isWeekend(i) {
    return i % 7 === 0 || i % 7 === 6;
  }

  //setSelectedDay(1);

  //number of days that we add in the first row from previous month
  let addedDays;

  //day of the week of the first day of month
  let firstDay = firtstDayOfMonth(monthNumber, 2022);
  //console.log("First day: ", firstDay);

  //calulate how many days from previous month we add in first row
  if (firstDay !== 0) {
    addedDays = firstDay - 1;
  } else {
    addedDays = 6;
  }

  const daysInPerviousMonth = daysInMonth(monthNumber - 1, 2022);

  //array with all days in a month
  const days = [];

  //adding days from the previous month
  for (let i = 1; i <= addedDays; i++) {
    const setDayType = "anotherMonth";

    days.push({
      number: daysInPerviousMonth - addedDays + i,
      dayType: setDayType,
    });
  }

  //adding day of the acutual month
  let numberOfDays = daysInMonth(monthNumber, 2022);
  for (let i = 1; i <= numberOfDays; i++) {
    let setDayType;

    if (isWeekend(days.length + 1)) {
      setDayType = "weekend";
    } else {
      setDayType = "normal";
    }

    days.push({ number: i, dayType: setDayType });
  }

  //calculate max lenght (5 or 6 rows)
  let maxlenght;
  if (
    (firstDay === 6 && numberOfDays === 31) ||
    (firstDay === 0 && (numberOfDays === 30 || numberOfDays === 31))
  ) {
    maxlenght = 42;
  } else {
    maxlenght = 35;
  }

  //adding days from next month to fill the last row
  for (let i = 1; days.length < maxlenght; i++) {
    days.push({ number: i, dayType: "anotherMonth" });
  }

  //difrent styling for selected month
  if (selectedDay < maxlenght) {
    days[selectedDay].dayType = "selected";
  }

  return (
    <div id="calendar_month">
      {days.map((day, i) => (
        <Day
          onClick={() => onSelectHandler(day.number,i)}
          day={day.number}
          dayType={day.dayType}
        />
      ))}
    </div>
  );
}

export default Month;
