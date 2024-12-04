import styled from "styled-components";


export const Link = styled.a`
    //removendo stilo padrão
    text-decoration: none; //Remove o sublinhado
    color: inherit; //Herda a cor do elemento pai
    background: none; //Remove fundos padrão
    border: none; //Remove bordas padrão
    margin: 0; //Remove margens

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    background: none;
    padding: 0px 4px;
    
    /* text */
    color: var(--Primary-water-green-400, #33D6BB);
    font-family: "Source Code Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /*120%*/

    &:visited {
        color: var(--Primary-water-green-400, #33D6BB);
    }

    &:hover {
        text-decoration: underline;
    }
`
