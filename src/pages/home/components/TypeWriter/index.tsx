import { ReactTyped } from "react-typed";
import styles from "./styles.module.css";
import type { ITypewriterProps } from "./types";

function TypeWrite({
  prefix,
  phrases,
  typeSpeed,
  backSpeed,
  loop,
  backDelay,
  startDelay,
}: ITypewriterProps) {
  return (
    <div className={styles.container}>
      <span>{prefix}</span>

      <div className={styles.typedContainer}>
        <ReactTyped
          className="typed"
          strings={phrases} // Frases dinâmicas passadas como props
          typeSpeed={typeSpeed} // Velocidade da digitação
          backSpeed={backSpeed} // Velocidade para apagar
          loop={loop} // Define se o texto deve ser loopado
          backDelay={backDelay} // Delay antes de apagar
          startDelay={startDelay} // Sem delay adicional
          showCursor={true} // Cursor ativado para o segundo
        />
      </div>
    </div>
  );
}

export default TypeWrite;
