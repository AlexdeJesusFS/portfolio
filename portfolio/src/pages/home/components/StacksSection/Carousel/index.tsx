import icons from "../../../../../assets/stacks-icons";
import { Container, DevIcons } from "./styles";

function Carousel() {
	//obtendo os valores de `icons` e duplicando.
	const iconList = [...Object.values(icons), ...Object.values(icons)];

	return (
		<Container>
			<DevIcons>
				<ul>
					{iconList.map((icon, index) => (
						//uso de um valor único diferente de index para um valor que não pode ser alterado dinamicamente
						<li key={icon}>
							<img src={icon} alt={`Icone ${index}`} />
						</li>
					))}
				</ul>
			</DevIcons>
		</Container>
	);
}

export default Carousel;
