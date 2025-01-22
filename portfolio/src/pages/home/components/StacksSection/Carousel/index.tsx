import { v4 as uuidv4 } from "uuid";
import icons from "../../../../../assets/stacks-icons";
import { Container, DevIcons } from "./styles";

function Carousel() {
	// Criando uma lista de ícones com IDs únicos
	const iconList = [
		//uuid evita duplicação de valor para key devido ao componente precisar de valores duplicados para as imagens
		...Object.values(icons).map((icon) => ({ id: uuidv4(), src: icon })),
		...Object.values(icons).map((icon) => ({ id: uuidv4(), src: icon })),
	];

	return (
		<Container>
			<DevIcons>
				<ul>
					{iconList.map((icon) => (
						<li key={icon.id}>
							<img src={icon.src} alt="Ícone" />
						</li>
					))}
				</ul>
			</DevIcons>
		</Container>
	);
}

export default Carousel;
