import {Container, DevIcons} from "./styles";
import icons from "../../assets/stacks-icons"


function Carousel() {
    //obtendo os valores de `icons` e duplicando.
    const iconList = [...Object.values(icons), ...Object.values(icons)];

    return (
        <Container>
            <DevIcons>
                <ul>
                    {iconList.map((icon, index) => (
                        <li key={index}>
                            <img src={icon} alt={`Icone ${index}`} />
                        </li>
                    ))}
                </ul>
            </DevIcons>
        </Container>
    );
}

export default Carousel;