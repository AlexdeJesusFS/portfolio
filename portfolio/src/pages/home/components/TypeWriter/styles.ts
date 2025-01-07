import styled from "styled-components";

export const Container = styled.div`
    display: inline-block;
    width: 100%;
    align-items: center;
    //gap: 50rem;

    text-align: center;
    overflow: hidden; // Impede o texto de ultrapassar os limites do contêiner
    white-space: nowrap; // Evita quebra de linhas
    
    //text:
    color: ${({ theme }) => theme.colors.Primary["water green-600"]};

    .prefix {
        position: relative;
    }
`;

export const TypedContainer = styled.div`
    display: inline-block;
    margin-left: 2.5rem;
    //border: 1px solid white;
    //width: fit-content; // largura fixa impedindo movimento horizontal durante animação
    //overflow: hidden; // Impede o texto de ultrapassar os limites do contêiner
    
`;
