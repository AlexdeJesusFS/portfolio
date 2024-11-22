import Header from "../../components/Header";
import imgElipses from "../../assets/Elipses.png";
import { 
  ContainerImgElipses, SectionAbout, SectionProjects, ContainerCards, ContainerBlur 
} from "./styles"


function Home() {
  return (
    <>
      <Header />
      <ContainerImgElipses>
        <img src={imgElipses} alt="Elipses com foto de AlexdeJesusFS, e outras com tecnologia sobre cloud, computador com programação, front-end javascript e tecnologia sobre datacenter e banco de dados." />
        <h1>Alex de Jesus Full-Stack</h1>
      </ContainerImgElipses>
      <SectionAbout>
        <h3>Sobre mim.</h3>
        <p>Sou um profissional com mais de 2 anos de experiência em desenvolvimento realizando integrações e automações em Python, focado em otimizar processos internos e resolver desafios técnicos. Entre os meus principais projetos, estão a criação de integrações entre o Movidesk e o WhatsApp via API, além de automações que atualizam estoque e status de pedidos em sistemas de ERP. Também tenho experiência em suporte técnico, atuando na resolução de problemas em sistemas de ERP, redes e equipamentos, e configurando ferramentas como Movidesk, Microsoft 365 e Portal Azure. Meu trabalho inclui o gerenciamento de chamados técnicos, o cumprimento de SLAs e a realização de treinamentos para capacitar os usuários. Estou familiarizado com metodologias ágeis, como Scrum e Kanban, e práticas do PMBOK para gerenciar projetos, já trabalhei em equipe cumprindo metas por meio do uso de OKRs e feedbacks contínuos. Sempre buscando melhorar o desempenho individual e da equipe.</p>
      </SectionAbout>

      <ContainerBlur>
        <SectionProjects>
          <h3>Projetos.</h3>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <ContainerCards>
          </ContainerCards>
          
        </SectionProjects>
      </ContainerBlur>
    </>
  );
}

export { Home };
