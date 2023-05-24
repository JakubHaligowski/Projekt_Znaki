function DaysOfWeek() {
  const days = ["pon", "wto", "śro", "czw", "pią", "sob", "nie"];

  return (
    <div id="days_of_week">
      {days.map((day, i) => (
        <div key={i}>{day}</div>
      ))}
    </div>
  );
}

export default DaysOfWeek;
