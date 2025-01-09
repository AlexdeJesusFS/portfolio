import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    //width: 790px;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;
    //gap: clamp(30px);
    white-space: nowrap; //evita quebra de linhas
    
    //text:
    color: ${({ theme }) => theme.colors.Primary["water green-600"]};
`;

export const TypedContainer = styled.div`
    width: clamp(203px, 25.03vw, 333px);
`;
