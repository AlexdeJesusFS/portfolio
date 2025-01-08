import styled from "styled-components";
import media from "../../media";


export const Container = styled.header`
    display: flex;
    height: 6rem; 
    width: 100%;
    padding: 1.6rem 14.4rem;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;

    position: fixed;
    z-index: 10; //Valor mais alto de elevação para impedir que outros elementos passem por cima

    background: ${({ theme }) => theme.colors.Primary["water green-50"]};

    .headerButton {
        ${media.tablet(`
            display: none;
        `)}
    }
`

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1 0 0;
    align-self: stretch;
`

export const Menu = styled.div`
    display: flex;
    padding: 1.5rem 0rem;
    align-items: center;
    gap: 6rem;
    align-self: stretch;
`

export const IconContainer = styled.span`
    display: flex; 
    justify-content: right; 
    margin-bottom: 0.4rem; //ajusta o icone na melhor posição
    height: 100%;
`
