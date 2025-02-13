import clickButtonSound from "../../assets/sounds/buttonClicking.wav";
import HeaderButton from "./Button/index";
import { AboutIcon, ChatIcon, ConstructIcon } from "./icons";
import { Container, IconContainer, LeftSide, Menu } from "./styles";

function Header() {

	function clickSound() {
		const audio = new Audio(clickButtonSound);
		audio.play();
	}

	return (
		<Container>
			<LeftSide>
				<HeaderButton
					href="/"
					fontSize="clamp(1.7rem, 1.47vw, 2rem);"
					fontWeight={600}
				>
					Alex de Jesus
				</HeaderButton>
			</LeftSide>
			<Menu>
				<HeaderButton
					className="headerButton"
					href="#sobre"
					onClick={clickSound}
				>
					Sobre
					{
						<IconContainer>
							<AboutIcon />
						</IconContainer>
					}
				</HeaderButton>
				<HeaderButton
					className="headerButton"
					href="#projetos"
					onClick={clickSound}
				>
					Projetos
					{
						<IconContainer>
							<ConstructIcon />
						</IconContainer>
					}
				</HeaderButton>
				<HeaderButton href="#fale_comigo" onClick={clickSound}>
					Fale comigo
					{
						<IconContainer>
							<ChatIcon />
						</IconContainer>
					}
				</HeaderButton>
			</Menu>
		</Container>
	);
}

export default Header;
