import { Tag } from "./styles";
import type { ICardTag } from "./types";

function CardTag({ children, text }: ICardTag) {
	return (
		<Tag>
			{text} {children}
		</Tag>
	);
}

export default CardTag;
