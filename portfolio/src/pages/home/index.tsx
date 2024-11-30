import Header from "../../components/Header";
import imgElipses from "../../assets/Elipses.png";
import { 
  ContainerImgElipses, SectionAbout, SectionProjects, ContainerCards, ContainerBlur, ColumnCards, SectionCertifications, ContainerCertifications, Certification, SectionStacks, Container
} from "./styles";
import Card from "../../components/Card";
import CardTag from "../../components/CardTag";
import { htmlIcon, cssIcon, tsIcon, figmaIcon, reactIcon, pythonIcon, apiIcon, sqlserverIcon } from "../../assets/dev-icon-tags/index"; 
import "../../assets/dev-icon-tags/";
import LinkButton from "../../components/LinkButton";
import certificateIcon from "../../assets/certificate.svg";
import Carousel from "../../components/Carousel";


function Home() {
  return (
    <>
      <Header />

      <ContainerImgElipses>{/*TODO: criar animação com movimento das elipses*/}
        <img src={imgElipses} alt="Elipses com foto de AlexdeJesusFS, e outras com tecnologia sobre cloud, computador com programação, front-end javascript e tecnologia sobre datacenter e banco de dados." />
        <h1>Alex de Jesus Full-Stack</h1>{/*TODO: criar autotyping animation aqui */}
      </ContainerImgElipses>

      <Container>
        <p id="sobre"></p>
        <br />
        <SectionAbout>        
          <h3>Sobre mim.</h3>
          <p>Sou um profissional com mais de 2 anos de experiência em desenvolvimento 
            realizando integrações e automações em Python, focado em otimizar processos 
            internos e resolver desafios técnicos. Meu trabalho inclui o gerenciamento de 
            chamados técnicos, o cumprimento de SLAs. Estou familiarizado com metodologias 
            ágeis, como Scrum e Kanban, e práticas do PMBOK para gerenciar projetos, já 
            trabalhei em equipe cumprindo metas por meio do uso de OKRs e feedbacks 
            contínuos. Sempre buscando melhorar o desempenho individual e da equipe.</p>
        </SectionAbout>
        

        <ContainerBlur>
          <SectionProjects>
            <p id="projetos"></p>
            <br />
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
        <p id="certificações"></p>
        <br />
          <h3>Certificações.</h3>
            <ContainerCertifications>
              <Certification>
                <LinkButton href="https://drive.google.com/file/d/1h3dRokO5raLRI1jmEF3ZjvJ6nKkqsOaq/view" label="Alura." 
                icon={certificateIcon} />
                <ul>
                  <li>Git e GitHub</li>
                  <li>Python</li>
                  <li>HTML5 e CSS3</li>
                  <li>JavaScript</li>
                  <li>Figma</li>
                  <li>Design System</li>
                </ul>
              </Certification>
              <Certification>
              <LinkButton href="https://hermes.dio.me/certificates/5QUZOAXG.pdf" label="Digital Innovation One." 
              icon={certificateIcon} />
                <p>Bootcamp XP Inc. - Full Stack Developer:<br />
                Nesse bootcamp aprendi mais sobre C#, React, conceitos e metodolias de programação.</p>
                <br />
                <p>Conteúdo:</p>
                <ul>
                  <li>Introdução ao Ambiente .NET e Projetos Colaborativos</li>
                  <li>Sintaxe Básica com .NET C#</li>
                  <li>Dados e Listas com .NET C#</li>
                  <li>Programação Orientada a Objetos com C#</li>
                  <li>Introdução a Banco de Dados</li>
                  <li>Construindo APIs com .NET C#</li>
                  <li>Trabalhando com Desenvolvimento Orientado a Testes</li>
                  <li>Introdução a Front End com React</li>
                  <li>Conceitos Básicos de React</li>
                  <li>Gerenciando Componentes React</li>
                  <li>Criando Front-end com Next e Typescript</li>
                  <li>Introdução a Cloud com Azure</li>
                </ul>
                <br />
                <p>Tudo que aprendi ao longo da formação foi salvo em um <a href="https://github.com/AlexdeJesusFS/Bootcamp-XP-Inc.-Full-Stack-Developer">repositório GitHub</a> disponível em meu perfil. Acesse e veja mais sobre o que aprendi e os desafios que fiz.</p>
              </Certification>
            </ContainerCertifications>
        </SectionCertifications>

        <SectionStacks>
          <h4>Stacks & Tecnologias.</h4>
          <Carousel />
        </SectionStacks>

      </Container>

    </>
  );
};

export { Home };
