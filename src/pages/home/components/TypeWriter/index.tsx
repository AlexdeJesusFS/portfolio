import { ReactTyped } from "react-typed";
import { Container, TypedContainer } from "./styles";
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
    <Container>
      <span>{prefix}</span>

      <TypedContainer>
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
      </TypedContainer>
    </Container>
  );
}

export default TypeWrite;
