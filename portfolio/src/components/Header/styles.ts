import styled from "styled-components";


export const Container = styled.header`

    display: flex;
    width: 100%;
    height: 80px;
    padding: 16px 144px;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;

    background: var(--Primary-water-green-50, #E6FAF7);
`

export const LeftSide = styled.div`

    display: flex;
    height: 48px;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
`

export const Menu = styled.div`

    display: flex;
    height: 100%;
    padding: 15px 0px;
    align-items: center;
    gap: 34px;
`

export const IconContainer = styled.span`

    display: flex; 
    justify-content: right; 
    margin-bottom: 4px; //ajusta o icone na melhor posição
    height: 100%;
`
