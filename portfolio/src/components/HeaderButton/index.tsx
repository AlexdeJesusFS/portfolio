import { Button } from "./styles";
import { IHeaderButtonProps } from "./types";

function HeaderButton({children, onClick, href, ...props}: IHeaderButtonProps) {
    return (
        <a style={{textDecoration: 'none', color: 'inherit'}} href={href}>
            <Button onClick={onClick} {...props}>
                {children}
            </Button>
        </a>
    );
};

export default HeaderButton;