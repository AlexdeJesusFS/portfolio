import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutSection from "./components/AboutSection";
import EllipsesAnimation from "./components/EllipsesAnimation";
import ProjectsSection from "./components/ProjectsSection";
import StacksSection from "./components/StacksSection";
import TypeWrite from "./components/TypeWriter";
import { AnimationsContainer, MainContainer } from "./styles";

const listPhrases = ["Front-end", "Back-end", "Full-Stack"];

function Home() {
	return (
		<>
			<Header />

			<MainContainer>
				<AnimationsContainer>
					<EllipsesAnimation />
					<TypeWrite
						prefix="Desenvolvedor"
						phrases={listPhrases}
						typeSpeed={100}
						backSpeed={50}
						loop={false}
						backDelay={1000}
						startDelay={4500}
					/>
				</AnimationsContainer>

				<AboutSection />

				<ProjectsSection />

				<StacksSection />
			</MainContainer>

			<p id="fale_comigo" />
			<Footer />
		</>
	);
}

export default Home;
