import { Container, LeftSide, Center, RightSide, GifContainer, ContactsContainer } from "./styles";
import computerGif from "../../assets/computer.gif";
import copyright from "../../assets/copyright.svg"
import { GithubIcon, EmailIcon, LinkedinIcon, WhatsappIcon } from './icons';


function Footer() {
    const currentYear = new Date().getFullYear();
    const gitgubAccount = "https://github.com/AlexdeJesusFS";
    const emailAccount = "mailto:alexjesus864@gmail.com";
    const whatsappMessage = "whatsapp://send?text=Ei, dê uma olhadinha esse portfolio que incrível! url aqui";
    const linkedinAccount = "https://www.linkedin.com/in/alexdejesusfs/";

    return (
        <Container>
            <LeftSide>
                <img src={copyright} alt="simbolo do copyright" />
                <p className="copyright">{currentYear} Alex de Jesus. All rights reserved.</p>
            </LeftSide>
            <Center>
                <GifContainer>
                    <a href="https://pixabay.com/pt/gifs/internet-computador-escrit%C3%B3rio-3443">
                        <img className="gif-computer" src={computerGif} alt="GIF de um computador antigo com monitor de tubo e com os números de 1 à 5 aparecendo na tela um por vez."/>
                    </a>
                </GifContainer>
            </Center>
            <RightSide>
                <h6>Fale comigo e compartilhe!</h6>
                <ContactsContainer>
                    <EmailIcon className="email" href={emailAccount} />
                    <WhatsappIcon className="whatsapp" href={whatsappMessage} />
                    <LinkedinIcon className="linkedin" href={linkedinAccount} />
                    <GithubIcon className="github" href={gitgubAccount} />
                </ContactsContainer>
            </RightSide>
        </Container>
    );
};

export default Footer;