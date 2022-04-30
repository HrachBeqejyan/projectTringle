import styles from "./styles.module.css";

export const Canvas = ({ canvas }) => {
    return <>
        <div className={styles.canvas}>
            {canvas}
        </div>
    </>
};