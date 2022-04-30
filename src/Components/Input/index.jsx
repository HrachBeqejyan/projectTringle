import styles from "./styles.module.css";

export const Input = ({ handleChange }) => {

    return <input
        type="text"
        className={styles.input}
        placeholder="Write a number"
        onChange={handleChange}
    />
}
