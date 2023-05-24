import styles from './VisitDetailsButton.module.css'


function VisitDetailsButton(props) {
    return (
        <div onClick={props.onClick} className={props.selected ? styles.button_selected : styles.button}>
            <span className={styles.purpose_text}>{props.purpose}</span>
            <span className={styles.price_text}>{props.price}</span>
        </div>

    );
}

export default VisitDetailsButton;