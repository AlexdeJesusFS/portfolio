import { Button } from "./styles";
import { IButtonProps } from "./types";

function HeaderButton({children, onClick, ...props}: IButtonProps) {
    return (
        <Button onClick={onClick}>
            {children} 
        </Button>
    );
};

export default HeaderButton;