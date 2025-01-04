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
    color: ${({ theme }) => theme.colors.Primary["water green-900"]};
    font-family: "Fira Code";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem;

    &:hover {
        background: ${({ theme }) => theme.colors.Primary["water green-900"]};
        color: ${({ theme }) => theme.colors.Primary["water green-50"]};  
    }

    &:active {
        background: none;
        color: ${({ theme }) => theme.colors.Primary["water green-900"]};
    }
    
`
