import { Container, LeftSide, Menu, IconContainer } from "./styles"
import HeaderButton from "../HeaderButton/index";
import IconHome from "../../assets/header-icons/home";
import IconAbout from "../../assets/header-icons/about-circle-outline";
import IconConstruct from "../../assets/header-icons/construct-outline";
import IconChat from "../../assets/header-icons/chat-line";


function Header() {
    return (
        <Container>
            <LeftSide>
                <h6>Alex de Jesus</h6>
            </LeftSide>
            <Menu>
                <HeaderButton>Home{<IconContainer><IconHome /></IconContainer>}</HeaderButton>
                <HeaderButton>Sobre{<IconContainer><IconAbout /></IconContainer>}</HeaderButton>
                <HeaderButton>Projetos{<IconContainer><IconConstruct /></IconContainer>}</HeaderButton>
                <HeaderButton>Fale comigo{<IconContainer><IconChat /></IconContainer>}</HeaderButton>
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