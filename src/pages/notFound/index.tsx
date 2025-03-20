import styles from "./styles.module.css";

function NotFound() {
  return (
    <div className={styles.background}>
      <h1 className={styles.title}>404 Error</h1>
      <h6 className={styles.subTitle}>Para onde você vai? Página não encontrada.</h6>
    </div>
  );
}

export default NotFound;
