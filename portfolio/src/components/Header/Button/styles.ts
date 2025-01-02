import styled from "styled-components";


export const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;

    padding: 0.4rem 0.6rem;
    border-radius: 0.8rem;
    background: none;
    border: none;
    white-space: nowrap;

    /* text */
    color: var(--Primary-water-green-900, #005647);
    font-family: "Fira Code";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem;

    &:hover {
        background: var(--Primary-water-green-900, #005647);
        color: var(--Primary-water-green-50, #E6FAF7);   
    }

    &:active {
        background: none;
        color: var(--Primary-water-green-900, #005647);
    }
    
`
