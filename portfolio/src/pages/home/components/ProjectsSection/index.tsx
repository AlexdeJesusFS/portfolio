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
import { ColumnCards, ContainerCards, Section } from "./styles";

const projectsColumnLeft = [
	{
		id: "elgscreen-stock-update",
		title: "ELGScreen.",
		text: "Automação para atualizar o estoque do ERP, onde arquivos XML eram capturados via API, os erros nos arquivos eram corrigidos e, por fim, os dados eram enviados para o servidor do ERP. Projeto desenvolvido utilizando Python.",
		tags: [
			{ text: "API", icon: apiIcon },
			{ text: "Python", icon: pythonIcon },
		],
	},

	{
		id: "elgscreen-order-status",
		title: "ELGScreen.",
		text: "Automação desenvolvida em Python para atualizar o status dos pedidos entregues no Mercado Livre, agilizando o processo de liberação de faturamento da empresa. A solução utiliza a API dos Correios para verificar o status de entrega dos pedidos e a API do Mercado Livre para atualizar os respectivos status.",
		tags: [
			{ text: "API", icon: apiIcon },
			{ text: "Python", icon: pythonIcon },
		],
	},

	{
		id: "personal-project-site",
		title: "Projeto Pessoal",
		text: "Este site também conta, certo? Neste projeto pratiquei mais habilidades front-end, usando HTML, CSS, TypeScript e o framework React. O protótipo do projeto foi feito no Figma e com base nele criado o código.",
		tags: [
			{ text: "HTML", icon: htmlIcon },
			{ text: "CSS", icon: cssIcon },
			{ text: "TypeScript", icon: tsIcon },
			{ text: "React", icon: reactIcon },
			{ text: "Figma", icon: figmaIcon },
		],
	},
];

const projectsColumnRight = [
	{
		id: "g2-tech-movidesk-whatsapp",
		title: "G2 Tecnologia.",
		text: "Desenvolvimento de uma integração entre o Service Desk Movidesk e o WhatsApp para envio de mensagens aos clientes, utilizando Python e a API do 360Dialog para a comunicação com o WhatsApp. A solução atualizava os clientes sobre seus tickets sempre que uma alteração de status era realizada. Para isso, foi criada uma API com FastAPI para receber os webhooks do Movidesk e enviar as mensagens automaticamente.",
		tags: [
			{ text: "API", icon: apiIcon },
			{ text: "Python", icon: pythonIcon },
		],
	},

	{
		id: "elgscreen-mercadolivre-tool",
		title: "ELGScreen.",
		text: "Desenvolvimento de uma ferramenta para listar os produtos mais vendidos no Mercado Livre que a empresa não comercializa. Utilizando a API do Mercado Livre, foi gerada uma lista dos produtos mais vendidos em uma determinada categoria. Em seguida, foi realizada uma consulta ao banco de dados SQL Server da empresa para obter a lista de produtos vendidos na mesma categoria. Com o uso de expressões regulares e um framework de correspondência de texto, foi possível identificar correspondências superiores a 70% nos títulos. Os produtos mais vendidos do Mercado Livre que não estavam no portfólio da empresa foram exibidos em uma tabela na intranet, com imagens e links. A solução foi implementada com HTML, CSS e Python Django.",
		tags: [
			{ text: "API", icon: apiIcon },
			{ text: "Python", icon: pythonIcon },
			{ text: "SQL Server", icon: sqlserverIcon },
		],
	},
];

function ProjectsSection() {
	return (
		<Section>
			<EllipesesBackground className="ellipses-background" />
			<p id="projetos" />
			<br />
			<h3>Projetos.</h3>
			<ContainerCards>
				<ColumnCards>
					{/*Left*/}
					{projectsColumnLeft.map((project, index) => (
						//uso de id e comibinação de id tag text para uso de um valor único para chave que não pode ser alterado dinamicamente
						<Card key={project.id} title={project.title} text={project.text}>
							{project.tags.map((tag, i) => (
								<CardTag key={`${project.id}-${tag.text}`} text={tag.text}>
									<img src={tag.icon} alt={`${tag.text} ícone`} />
								</CardTag>
							))}
						</Card>
					))}
				</ColumnCards>

				<ColumnCards>
					{/*Right*/}
					{projectsColumnRight.map((project, index) => (
						<Card key={project.id} title={project.title} text={project.text}>
							{project.tags.map((tag, i) => (
								<CardTag key={`${project.id}-${tag.text}`} text={tag.text}>
									<img src={tag.icon} alt={`${tag.text} ícone`} />
								</CardTag>
							))}
						</Card>
					))}
				</ColumnCards>
			</ContainerCards>
		</Section>
	);
}

export default ProjectsSection;
