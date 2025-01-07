import { useState } from "react";
import {ReactTyped} from "react-typed";
import { ITypewriterProps } from "./types";
import { Container, TypedContainer } from "./styles";

function TypeWrite({
  prefix,
  phrases,
  typeSpeed,
  backSpeed,
  loop,
  backDelay,
  startDelay,
}: ITypewriterProps) {
  const [isFirstComplete, setIsFirstComplete] = useState(false); // Estado para controlar final do primeiro ReactTyped

  return (
    <Container>
        
    <TypedContainer>
      <ReactTyped
        strings={[prefix]} // Texto fixo como prefixo
        typeSpeed={typeSpeed} // Velocidade da digitação
        backSpeed={backSpeed} // Velocidade para apagar
        loop={false} // Apenas uma vez
        backDelay={backDelay} // Tempo antes de apagar (não usado pois loop é false)
        startDelay={startDelay} // Delay inicial
        showCursor={false} // Sem cursor no primeiro
        onComplete={() => setIsFirstComplete(true)} // Marca como completo
        className="prefix"
      />
      </TypedContainer>

      {isFirstComplete && ( // Exibe o segundo apenas quando o primeiro terminar
      <TypedContainer>
        <ReactTyped
          strings={phrases} // Frases dinâmicas passadas como props
          typeSpeed={typeSpeed} // Velocidade da digitação
          backSpeed={backSpeed} // Velocidade para apagar
          loop={loop} // Define se o texto deve ser loopado
          backDelay={backDelay} // Delay antes de apagar
          startDelay={0} // Sem delay adicional
          showCursor={true} // Cursor ativado para o segundo
        />
      </TypedContainer>
      )}
    </Container>
  );
}

export default TypeWrite;
