import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  apiIcon,
  cssIcon,
  figmaIcon,
  htmlIcon,
  pythonIcon,
  reactIcon,
  sqlserverIcon,
  tsIcon,
} from "../../../../assets/dev-icon-tags/index";
import Card from "../../../../components/Card";
import CardTag from "../../../../components/Card/Tag";
import EllipesesBackground from "./EllipsesBackground";
import styles from "./styles.module.scss";
import type { BusinessProjects } from "./types";

const iconMap: Record<string, string> = {
  apiIcon: apiIcon,
  cssIcon: cssIcon,
  figmaIcon: figmaIcon,
  htmlIcon: htmlIcon,
  pythonIcon: pythonIcon,
  reactIcon: reactIcon,
  sqlserverIcon: sqlserverIcon,
  tsIcon: tsIcon,
};

function ProjectsSection() {
  const [businessProjects, setBusinessProjects] = useState<BusinessProjects | null>(null);

  //busca o JSON quando o componente é montado
  useEffect(() => {
    fetch("/businessProjects.json")
      .then((response) => response.json())
      .then((data) => setBusinessProjects(data))
      .catch((error) => console.error("Erro ao carregar JSON:", error));
  }, []);

  //mostra "Carregando..." enquanto os dados não estão disponíveis
  if (!businessProjects) return <div>Carregando...</div>;

  const projectsColumnLeft = businessProjects.projectsColumnLeft;
  const projectsColumnRight = businessProjects.projectsColumnRight;

  return (
    <section className={styles.section}>
      <EllipesesBackground className={styles.ellipsesBackground} />
      <p id="projetos" />
      <br />
      <h3>Projetos.</h3>
      <div className={styles.containerCards}>
        <div className={styles.columnCards}>
          {/* Left */}
          {projectsColumnLeft.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              text={<ReactMarkdown>{project.text}</ReactMarkdown>}
            >
              {project.tags.map((tag) => (
                <CardTag key={`${project.title}-${tag.text}`} text={tag.text}>
                  <img src={iconMap[tag.icon]} alt={`${tag.text} ícone`} />
                </CardTag>
              ))}
            </Card>
          ))}
        </div>

        <div className={styles.columnCards}>
          {/* Right */}
          {projectsColumnRight.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              text={<ReactMarkdown>{project.text}</ReactMarkdown>}
            >
              {project.tags.map((tag) => (
                <CardTag key={`${project.title}-${tag.text}`} text={tag.text}>
                  <img src={iconMap[tag.icon]} alt={`${tag.text} ícone`} />
                </CardTag>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
