import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    //width: 790px;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;
    white-space: nowrap; //evita quebra de linhas
    
    //text:
    color: ${({ theme }) => theme.colors.Primary["water green-600"]};

    @media (max-width: 500px) { //quebra de linha entre as divs para não ultrapassar largura da tela
        flex-direction: column;
    };
`;

export const TypedContainer = styled.div`
    @media (min-width: 500px) { //quebra de linha entre as divs para não ultrapassar largura da tela
        width: clamp(203px, 25.03vw, 333px);
    };
`;
