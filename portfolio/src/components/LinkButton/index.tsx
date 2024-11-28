import { Link } from "./styles";
import { ILinkButtonProps } from "./types";


function LinkButton({ href, label, icon }: ILinkButtonProps) {

  return (
    <Link href={href}>
      {label} <img className="default" src={icon} alt="ícone de certificado."/>
    </Link>
  );
}

export default LinkButton;
