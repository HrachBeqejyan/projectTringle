import styles from "./styles.module.css";

export const ReverseBtn = ({ toggleFun }) => {
    return <button
        className={styles.btn}
        onClick={() => toggleFun()}
    > Revese
    </button >
}