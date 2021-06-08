import styles from "../styles/weirdLetters.module.scss";

const WeirdLetters = ({ text }) =>
  text.length > 0 && (
    <div className={styles.container}>
      {text.split("").map((letter) => (
        <span className={styles.letter}>{letter}</span>
      ))}
    </div>
  );
export default WeirdLetters;
