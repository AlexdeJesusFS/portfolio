import styled from "styled-components";
import cursorPointer from "../../assets/cursor/cursorPointer.svg";


export const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 2px;

    padding: 4px 6px;
    border-radius: 8px;
    background: none;
    border: none;
    cursor: url(${cursorPointer}) 12 12, pointer; /* Cursor pointer */


    /* text */
    color: var(--Primary-water-green-900, #005647);
    font-family: "Fira Code";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;

    &:hover {
        background: var(--Primary-water-green-900, #005647);
        color: var(--Primary-water-green-50, #E6FAF7);   
    }

    &:active {
        background: none;
        color: var(--Primary-water-green-900, #005647);
    }
    
`
