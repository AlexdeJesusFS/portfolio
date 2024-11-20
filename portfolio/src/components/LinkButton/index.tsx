import { Container, Button } from "./styles";
import { IButtonProps } from "./types";

function LinkButton({children, onClick}: IButtonProps) {
    return (
        <Container>
            <Button onClick={onClick}>
                {children} 
            </Button>
        </Container>
    );
};

export default LinkButton;