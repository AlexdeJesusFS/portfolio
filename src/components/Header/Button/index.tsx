import styles from "./styles.module.css";
import type { IHeaderButtonProps } from "./types";

function HeaderButton({ children, onClick, href, className }: IHeaderButtonProps) {
  return (
    <a style={{ textDecoration: "none", color: "inherit" }} href={href}>
      <button
        onClick={onClick}
        className={`${styles.button} ${className || ""}`} // Combina estilos
        type="button"
      >
        {children}
      </button>
    </a>
  );
}

export default HeaderButton;
