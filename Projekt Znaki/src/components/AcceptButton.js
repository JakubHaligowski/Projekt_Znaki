import styles from './AcceptButton.module.css'

function AcceptButton(props) {
    return (
        <div className={styles.button}>
            {props.text}
        </div>
    );
}

export default AcceptButton;