import { Container, LeftSide, Menu, IconContainer } from "./styles"
import HeaderButton from "./Button/index";
import clickButtonSound from "../../assets/sounds/buttonClicking.wav"

import { AboutIcon, ChatIcon, ConstructIcon } from './icons';

import {useNavigate} from "react-router-dom";


function Header() {

    const navigate = useNavigate();

    function clickSound() {
        const audio = new Audio(clickButtonSound);
        audio.play();
    };
    
    function clickTitle() {
        const audio = new Audio(clickButtonSound);
        audio.play();
        navigate("/");
    }

    return (
        <Container>
            <LeftSide>
                <HeaderButton onClick={clickTitle} 
                fontSize="clamp(1.7rem, 1.47vw, 2rem);"
                fontWeight={600}>
                    Alex de Jesus
                </HeaderButton>
            </LeftSide>
            <Menu>
                <HeaderButton className="headerButton" href="#sobre" onClick={clickSound} >Sobre{<IconContainer><AboutIcon /></IconContainer>}</HeaderButton>
                <HeaderButton className="headerButton" href="#projetos" onClick={clickSound} >Projetos{<IconContainer><ConstructIcon /></IconContainer>}</HeaderButton>
                <HeaderButton href="#fale_comigo" onClick={clickSound} >Fale comigo{<IconContainer><ChatIcon /></IconContainer>}</HeaderButton>
            </Menu>
        </Container>
    );
};

export default Header;
/* 
altIcon="Ícone circular de informação/sobre">{"Sobre"}</HeaderButton>
altIcon="Ícone de ferramentas cruzadas/projetos">{"Projetos"}</HeaderButton>
altIcon="Ícone de balão de fala/chat">{"Fale comigo"}</HeaderButton>
*/