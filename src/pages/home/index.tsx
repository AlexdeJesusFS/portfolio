import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutSection from "./components/AboutSection";
import EllipsesAnimation from "./components/EllipsesAnimation";
import ProjectsSection from "./components/ProjectsSection";
import StacksSection from "./components/StacksSection";
import TypeWrite from "./components/TypeWriter";
import styles from "./styles.module.scss";

const listPhrases = ["Front-end", "Back-end", "Full-Stack"];

function Home() {
  return (
    <>
      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.animationsContainer}>
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
        </div>

        <AboutSection />

        <ProjectsSection />

        <StacksSection />
      </main>

      <p id="fale_comigo" />
      <Footer />
    </>
  );
}

export default Home;
