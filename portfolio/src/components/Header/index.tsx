import { Container, LeftSide, Menu, IconContainer, HeaderTitle } from "./styles"
import HeaderButton from "../HeaderButton/index";
import IconCertificate from "../../assets/header-icons/certificate-inline";
import IconAbout from "../../assets/header-icons/about-circle-outline";
import IconConstruct from "../../assets/header-icons/construct-outline";
import IconChat from "../../assets/header-icons/chat-line";
import {useNavigate} from "react-router-dom";


function Header() {

    const navigate = useNavigate();

    return (
        <Container>
            <LeftSide>
                <HeaderTitle onClick={() => navigate("/")}>Alex de Jesus</HeaderTitle>
            </LeftSide>
            <Menu>
                <HeaderButton href="#sobre">Sobre{<IconContainer><IconAbout /></IconContainer>}</HeaderButton>
                <HeaderButton href="#projetos">Projetos{<IconContainer><IconConstruct /></IconContainer>}</HeaderButton>
                <HeaderButton href="#certificações">Certificações{<IconContainer><IconCertificate /></IconContainer>}</HeaderButton>
                <HeaderButton href="#fale_comigo">Fale comigo{<IconContainer><IconChat /></IconContainer>}</HeaderButton>
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