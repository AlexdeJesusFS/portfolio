import styles from "./styles.module.css";
import type { ICard } from "./types";

function Card({ title, children, text }: ICard) {
  return (
    <div className={styles.container}>
      <h5>{title}</h5>
      <div className={styles.tagContainer}>{children}</div>
      <p>{text}</p>
    </div>
  );
}

export default Card;
