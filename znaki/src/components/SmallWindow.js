import styles from './SmallWindow.module.css'

function SmallWindow(props) {
    return (
        <div id={styles.window}>
           <div id={styles.title}><span id={styles.text_title}>{props.title}</span></div>
           <div id={styles.content}>{props.children}</div> 
        </div>
    );
}

export default SmallWindow;