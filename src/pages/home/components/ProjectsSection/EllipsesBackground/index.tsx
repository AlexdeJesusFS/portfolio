import styles from "./styles.module.css";

function EllipesesBackground({ className }: { className?: string }) {
  return (
    <div className={`${styles.container} ${className || ""}`.trim()}>
      <div className={`${styles.ellipse} ${styles.ellipse1}`} />
      <div className={`${styles.ellipse} ${styles.ellipse2}`} />
    </div>
  );
}

export default EllipesesBackground;
