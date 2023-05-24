import "./Calendar.css";

function Day(props) {
  let frameClass;
  if (props.dayType === "weekend") {
    frameClass = "day_frame_weekend";
  } else {
    if (props.dayType === "selected") {
      frameClass = "day_frame_selected";
    } else {
      frameClass = "day_frame";
    }
  }

  let isSelectable = true;
  if (props.dayType === "weekend" || props.dayType === "anotherMonth") {
    isSelectable = false;
  }

  return (
    <div key={props._key} className={"day day_" + props.dayType}>
      <div className={frameClass} onClick={isSelectable ? props.onClick : ""}>
        {props.day}
      </div>
    </div>
  );
}

export default Day;
