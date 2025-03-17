import cv from "/Curriculo.pdf";
import DownloadIcon from "../../../../../assets/download-cv-button/file-download.svg";
import styles from "./styles.module.css";

function DownloadButton() {
  return (
    <a href={cv} style={{ textDecoration: "none", color: "inherit" }}>
      <button className={styles.button} type="button">
        {"Baixar CV"} <img src={DownloadIcon} alt="arquivo download ícone" />
      </button>
    </a>
  );
}

export default DownloadButton;
