import { ReactComponent as FacebookIcon } from "../icons/facebook_icon.svg";
import { ReactComponent as YouTubeIcon } from "../icons/youtube_icon.svg";
import { ReactComponent as InstagramIcon } from "../icons/instagram_icon.svg";
import { ReactComponent as NfzIcon } from "../icons/NFZ_icon.svg";

import styles from "./Socials.module.css";

function Socials() {
  return (
    <div id={styles.container}>
      <span className={styles.text}>Zajdź na nas na:</span>
      <div id={styles.socials_icons}>
        <a href="https://www.facebook.com/CentrumMedycznePolmed/" target='_blank'>
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/" target='_blank'>
          <InstagramIcon />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <YouTubeIcon />
        </a>      
      </div>
      <span className={styles.text}> </span>
      <a href="https://www.nfz.gov.pl/" target="_blank">
        <NfzIcon id={styles.nfz} />
      </a>      
    </div>
  );
}

export default Socials;
