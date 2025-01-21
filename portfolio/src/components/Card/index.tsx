import { Container, TagContainer, Title } from "./styles";
import type { ICard } from "./types";

function Card({ title, children, text }: ICard) {
	return (
		<Container>
			<Title>{title}</Title>
			<TagContainer>{children}</TagContainer>
			<p>{text}</p>
		</Container>
	);
}

export default Card;
