import { Container, LeftSide, Menu, IconContainer } from "./styles"
import LinkButton from "../LinkButton/index";
import IconHome from "../../assets/utils/home";
import IconAbout from "../../assets/utils/about-circle-outline";
import IconConstruct from "../../assets/utils/construct-outline";
import IconChat from "../../assets/utils/chat-line";


function Header() {
    return (
        <Container>
            <LeftSide>
                <h6>Alex de Jesus</h6>
            </LeftSide>
            <Menu>
                <LinkButton>Home{<IconContainer><IconHome /></IconContainer>}</LinkButton>
                <LinkButton>Sobre{<IconContainer><IconAbout /></IconContainer>}</LinkButton>
                <LinkButton>Projetos{<IconContainer><IconConstruct /></IconContainer>}</LinkButton>
                <LinkButton>Fale comigo{<IconContainer><IconChat /></IconContainer>}</LinkButton>
            </Menu>
        </Container>
    );
};

export default Header;
/* 
altIcon="Ícone circular de informação/sobre">{"Sobre"}</LinkButton>
altIcon="Ícone de ferramentas cruzadas/projetos">{"Projetos"}</LinkButton>
altIcon="Ícone de balão de fala/chat">{"Fale comigo"}</LinkButton>
*/