import styled from "styled-components";


export const Container = styled.div`
    color: #005647;

    &:hover {
        text-decoration: underline;
        color: var(--Primary-water-green-800, #00705E)   
    }

    &:hover > * {
        text-decoration: underline;
        color: var(--Primary-water-green-800, #00705E)   
    }

    &:focus {
        text-decoration: underline;
        color: var(--Primary-water-green-700, #009179)
    }

    &:focus > * {
        text-decoration: underline;
        color: var(--Primary-water-green-700, #009179)
    }
` 

export const Button = styled.button`

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 2px;

    padding: 8px 12px;
    background: none;
    border: none;
    cursor: pointer;

    /* text */
    color: currentColor;
    font-family: "Fira Code";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;

    &:focus {
        text-decoration: underline;
        color: var(--Primary-water-green-700, #009179)
    }
    
`
