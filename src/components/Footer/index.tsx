import { useMediaQuery } from "react-responsive";
import computerMp4 from "../../assets/videos/computer.mp4";
import computerWebm from "../../assets/videos/computer.webm";
import media from "../../media";
import { EmailIcon, GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons";
import {
	ContactsContainer,
	Container,
	CopyrightContainer,
	RightSide,
} from "./styles";

function Footer() {
	const currentYear = new Date().getFullYear();
	const gitgubAccount = "https://github.com/AlexdeJesusFS";
	const emailAccount = "mailto:alexjesus864@gmail.com";
	const whatsappMessage =
		"whatsapp://send?text=Ei, olha esse portfolio que incrível! url aqui";
	const linkedinAccount = "https://www.linkedin.com/in/alexdejesusfs/";

	const isMobile = useMediaQuery({ query: media.queries.mobile });
	const isTablet = useMediaQuery({ query: media.queries.tablet });
	const isDesktop = useMediaQuery({ query: media.queries.desktop });

	return (
		<>
			{(isTablet || isDesktop) && (
				<Container>
					<CopyrightContainer>
						<p className="copyright">
							© {currentYear} Alex de Jesus. All rights reserved.
						</p>
					</CopyrightContainer>

					<video muted autoPlay loop className="computer">
						<source src={computerWebm} type="video/webm" />
						<source src={computerMp4} type="video/mp4" />
					</video>

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

			{isMobile && (
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
						<p className="copyright">
							© {currentYear} Alex de Jesus. All rights reserved.
						</p>
					</CopyrightContainer>
				</Container>
			)}
		</>
	);
}

export default Footer;
