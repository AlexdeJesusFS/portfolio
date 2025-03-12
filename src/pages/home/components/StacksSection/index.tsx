import Carousel from "./Carousel";
import styles from "./styles.module.scss";

function StacksSection() {
  return (
    <section className={styles.section}>
      <h4>Tecnologias.</h4>
      <Carousel />
    </section>
  );
}

export default StacksSection;
