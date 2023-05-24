import styles from './BackButton.module.css'
import { ReactComponent as Arrow2} from '../icons/Arrow2.svg'

function BackButton(props) {
    return (
        <div className={styles.button}>
        {props.showArrow ? <Arrow2 /> : ""}
        <span className={styles.button_text}>{props.text}</span>
        </div>
    );

}

export default BackButton;