import Header from "../../components/Header";
import imgElipses from "../../assets/Elipses.png";
import { 
  ContainerImgElipses, SectionAbout, SectionProjects, ContainerCards, ContainerBlur, ColumnCards, SectionCertifications, ContainerCertifications, Certification
} from "./styles";
import Card from "../../components/Card";
import CardTag from "../../components/CardTag";
import { htmlIcon, cssIcon, tsIcon, figmaIcon, reactIcon, pythonIcon, apiIcon, sqlserverIcon } from "../../assets/dev-icon-tags/"; import "../../assets/dev-icon-tags/";


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
          <ContainerCards>
            <ColumnCards>{/*Left*/}
              <Card title="ELGScreen." text="Automação para atualizar o estoque do ERP, onde arquivos XMLs eram capturados via API, corrigindo erros no arquivo e por fim os enviado para o servidor do ERP. Projeto feito usando Python.">
                <CardTag text="API"><img src={apiIcon} alt="API ícone" /></CardTag>
                <CardTag text="Python"><img src={pythonIcon} alt="Python ícone" /></CardTag>
              </Card>
              <Card title="ELGScreen." text="Automação para atualizar os status dos pedidos entregues no mercado livre, para faturamento. Usando API dos correios para verificar status de entrega dos pedidos e API do mercado livre para atualizar status.">
                <CardTag text="API"><img src={apiIcon} alt="API ícone" /></CardTag>
                <CardTag text="Python"><img src={pythonIcon} alt="Python ícone" /></CardTag>
              </Card>
              <Card title="Projeto pessoal." text="Este site também conta, certo? Neste projeto pratiquei mais habilidades front-end, usando HTML, CSS, TypeScript e o framework React. O protótipo do projeto foi feito no Figma e com base nele criado o código.">
                <CardTag text="HTML"><img src={htmlIcon} alt="HTML ícone" /></CardTag>
                <CardTag text="CSS"><img src={cssIcon} alt="CSS ícone" /></CardTag>
                <CardTag text="TypeScript"><img src={tsIcon} alt="TypeScript ícone" /></CardTag>
                <CardTag text="React"><img src={reactIcon} alt="React ícone" /></CardTag>
                <CardTag text="Figma"><img src={figmaIcon} alt="Figma ícone" /></CardTag>
              </Card>
            </ColumnCards>
            <ColumnCards>{/*Right*/}
              <Card title="G2." text="Integração entre o service desk Movidesk e WhatsApp para envio de mensagens aos clientes, utilizando python. Onde os clientes eram atualizados sobre o status de seus tickets quando alterados, para isso foi criado uma API usando FastAPI para receber os webhooks do Movidesk e enviar a mensagem.">
                <CardTag text="API"><img src={apiIcon} alt="API ícone" /></CardTag>
                <CardTag text="Python"><img src={pythonIcon} alt="Python ícone" /></CardTag>
              </Card>
              <Card title="ELGScreen." text="Lista de produtos mais vendidos no mercado livre que a empresa não vende. Utilizando a API do mercado livre para pegar uma lista dos produtos mais vendidos, em uma determinada categoria e consultando o banco SQL Server da empresa para pegar a lista de produtos vendidos nessa mesma categoria, usando expressões regulares e um framework para verificar uma correspondência acima de 70% para os títulos foi listados produtos mais vendidos do mercado livre que a empresa não estava vendendo. A lista era exibida na intranet da empresa em uma tabela.">
                <CardTag text="API"><img src={apiIcon} alt="API ícone" /></CardTag>
                <CardTag text="Python"><img src={pythonIcon} alt="Python ícone" /></CardTag>
                <CardTag text="SQL Server"><img src={sqlserverIcon} alt="SQL Server ícone" /></CardTag>
                <CardTag text="HTML"><img src={htmlIcon} alt="HTML ícone" /></CardTag>
                <CardTag text="CSS"><img src={cssIcon} alt="CSS ícone" /></CardTag>
              </Card>
            </ColumnCards>
          </ContainerCards>
        </SectionProjects>
      </ContainerBlur>

      <SectionCertifications>
        <h3>Certificações.</h3>
          <ContainerCertifications>
            <Certification>
              <h6>certificação.</h6>
              <p>alguma coisa</p>
            </Certification>
          </ContainerCertifications>
          
      </SectionCertifications>
    </>
  );
};

export { Home };
