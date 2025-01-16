import Header from "../../components/Header";
import { AnimationsContainer, MainContainer } from "./styles";
import EllipsesAnimation from "./components/EllipsesAnimation";
import TypeWrite from "./components/TypeWriter";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import StacksSection from "./components/StacksSection";
import Footer from "../../components/Footer";


const listPhrases = ["Front-end", "Back-end", "Full-Stack"]

function Home() {

  return (
    <>
      <Header />

      <MainContainer>

      <AnimationsContainer>
          <EllipsesAnimation />
          <TypeWrite prefix="Desenvolvedor" phrases={listPhrases} typeSpeed={100} backSpeed={50} 
          loop={false} backDelay={1000} startDelay={4500}/>
        </AnimationsContainer>

        <AboutSection />

        <ProjectsSection />
        
        <StacksSection />

      </MainContainer>

      <p id="fale_comigo"></p>
      <Footer />
    </>
  );
};

export default Home;
