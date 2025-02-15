import { Button } from "./styles";
import type { IHeaderButtonProps } from "./types";

function HeaderButton({
  children,
  onClick,
  href,
  fontSize,
  fontWeight,
  className,
}: IHeaderButtonProps) {
  return (
    <a
      style={{ textDecoration: "none", color: "inherit" }}
      href={href}
      className={className}
    >
      <Button onClick={onClick} fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Button>
    </a>
  );
}

export default HeaderButton;
