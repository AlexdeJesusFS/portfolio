import styles from "./styles.module.css";
import type { ICardTag } from "./types";

function CardTag({ children, text }: ICardTag) {
  return (
    <div className={styles.tag}>
      {text} {children}
    </div>
  );
}

export default CardTag;
