import styled from "styled-components";

export const Container = styled.div`
    display: flex;  
    align-items: center;
    gap: 2.8rem;
`;

export const TypedContainer = styled.div`
    display: inline-block; 
    width: 350px; // largura fixa impedindo movimento horizontal durante animação
    text-align: left; 
    overflow: hidden; // Impede o texto de ultrapassar os limites do contêiner
    white-space: nowrap; // Evita quebra de linhas
    
    .typed {
        font-size: 8.16rem;
    }
`;
