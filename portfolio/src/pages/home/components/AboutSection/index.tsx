import { Section } from "./styles";
import DownloadCVButton from "./DownloadButton"


function AboutSection() {
    return (
        <Section>
            <p id="sobre"></p>
            <br />    
            <h3>Sobre mim.</h3>
            <p>Sou um profissional com <strong>mais de 2 anos de experiência em desenvolvimento </strong>
            realizando <strong>integrações</strong> e <strong>automações</strong> em <strong>Python</strong>, focado em otimizar processos 
            internos e resolver desafios técnicos. Meu trabalho inclui o gerenciamento de 
            chamados técnicos e o cumprimento de SLAs. Estou familiarizado com <strong>metodologias 
            ágeis</strong>, como <strong>Scrum</strong> e <strong>Kanban</strong>, e práticas do <strong>PMBOK para gerenciar projetos</strong>, já 
            trabalhei em equipe cumprindo metas por meio do uso de OKRs e feedbacks 
            contínuos. Sempre buscando melhorar o desempenho individual e da equipe.</p>
            <DownloadCVButton />
        </Section>
    );
};

export default AboutSection;