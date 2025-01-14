import { Container, CopyrightContainer, RightSide, ContactsContainer } from "./styles";
import computerGif from "../../assets/computer.gif";
import { GithubIcon, EmailIcon, LinkedinIcon, WhatsappIcon } from './icons';
import { useMediaQuery } from 'react-responsive';
import media from "../../media";


function Footer() {
    const currentYear = new Date().getFullYear();
    const gitgubAccount = "https://github.com/AlexdeJesusFS";
    const emailAccount = "mailto:alexjesus864@gmail.com";
    const whatsappMessage = "whatsapp://send?text=Ei, dê uma olhadinha esse portfolio que incrível! url aqui";
    const linkedinAccount = "https://www.linkedin.com/in/alexdejesusfs/";

    const isMobile = useMediaQuery({ query: media.queries.mobile });
    const isTablet = useMediaQuery({ query: media.queries.tablet });
    const isDesktop = useMediaQuery({ query: media.queries.desktop });

    return (
        <>
            {(isTablet || isDesktop) && (
                <Container>
                    <CopyrightContainer>
                        <p className="copyright">© {currentYear} Alex de Jesus. All rights reserved.</p>
                    </CopyrightContainer>
                        <img className="gif-computer" src={computerGif} alt="GIF de um computador antigo com monitor de tubo e com os números de 1 à 5 aparecendo na tela um por vez."/>
                    <RightSide>
                        <h6>Fale comigo e compartilhe!</h6>
                        <ContactsContainer>
                            <GithubIcon className="github" href={gitgubAccount} />
                            <LinkedinIcon className="linkedin" href={linkedinAccount} />
                            <WhatsappIcon className="whatsapp" href={whatsappMessage} />
                            <EmailIcon className="email" href={emailAccount} />
                        </ContactsContainer>
                    </RightSide>
            </Container>
        )}

        {isMobile && 
            <Container>
                <RightSide>
                        <h6>Fale comigo e compartilhe!</h6>
                        <ContactsContainer>
                            <GithubIcon className="github" href={gitgubAccount} />
                            <LinkedinIcon className="linkedin" href={linkedinAccount} />
                            <WhatsappIcon className="whatsapp" href={whatsappMessage} />
                            <EmailIcon className="email" href={emailAccount} />
                        </ContactsContainer>
                </RightSide>
                <CopyrightContainer>
                    <p className="copyright">© {currentYear} Alex de Jesus. All rights reserved.</p>
                </CopyrightContainer>
            </Container>
        }
        </>
    );
};

export default Footer;