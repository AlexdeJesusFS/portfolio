import Cv from "../../../../../assets/download-cv-button/Curriculo.pdf";
import DownloadIcon from "../../../../../assets/download-cv-button/file-download.svg";
import { Button } from "./styles";

function DownloadButton() {
	return (
		<a href={Cv} style={{ textDecoration: "none", color: "inherit" }}>
			<Button>
				{"Baixar CV"} <img src={DownloadIcon} alt="arquivo download ícone" />
			</Button>
		</a>
	);
}

export default DownloadButton;
