import { useState } from "react";
import styles from "./OptionsPanel.module.css";
import OptionButton from "./OptionButton";

//svg icons
import { ReactComponent as HomeIcon } from "../icons/home_icon.svg";
import { ReactComponent as ReservationIcon } from "../icons/reservation_icon.svg";
import { ReactComponent as ProfileIcon } from "../icons/profile_icon.svg";
import { ReactComponent as SearchIcon } from "../icons/search_icon.svg";

function OptionsPanel() {
  const [selected, setSeletced] = useState(4);

  function onSelectHaldler(id) {
    setSeletced(id);
    console.log(selected);
  }

  const buttons = [
    {
      id: 1,
      icon: <HomeIcon stroke={1 === selected ? "#0957DE" : "#676868"} />,
      text: "Pulpit",
    },
    {
      id: 2,
      icon: <ReservationIcon fill={2 === selected ? "#0957DE" : "#676868"} />,
      text: "Terminarz",
    },
    {
      id: 3,
      icon: <ProfileIcon stroke={3 === selected ? "#0957DE" : "#676868"} />,
      text: "Profil",
    },
    {
      id: 4,
      icon: <SearchIcon fill={4 === selected ? "#0957DE" : "#676868"} />,
      text: "Wyszukaj lekarza",
    },
  ];

  return (
    <div id={styles.panel}>
      {buttons.map((button) => (
        <OptionButton
          key={button.id}
          selected={button.id === selected}
          icon={button.icon}
          text={button.text}
          onClick={() => onSelectHaldler(button.id)}
        />
      ))}
    </div>
  );
}

export default OptionsPanel;
