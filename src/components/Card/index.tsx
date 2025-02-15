import { Container, TagContainer } from "./styles";
import type { ICard } from "./types";

function Card({ title, children, text }: ICard) {
  return (
    <Container>
      <h5>{title}</h5>
      <TagContainer>{children}</TagContainer>
      <p>{text}</p>
    </Container>
  );
}

export default Card;
