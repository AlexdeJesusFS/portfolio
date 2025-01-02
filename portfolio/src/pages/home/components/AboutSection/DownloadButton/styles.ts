import styled from "styled-components";


export const Button = styled.button`
    display: flex;
    height: 5.4rem;
    justify-content: center;
    align-items: center;

    padding: 0rem 1.2rem;
    gap: 0.6rem;

    border-radius: 8px;
    border: 2px solid var(--Primary-water-green-900, #005647);
    background: var(--Primary-water-green-500, #0CA);

    //text
    color: var(--Neutral-gray-1000, #1D1F20);
    font-family: "Fira Code";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem; /* 150% */
    
    &:hover {
        //box-shadow: 4px 4px 0 var(--Primary-water-green-900, #005647);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        
        animation: bouncy 0.6s ease forwards;
        @keyframes bouncy {
            0% {
                transform: translateY(0);
                box-shadow: 4px 4px 0 var(--Primary-water-green-900, #005647);
            }
            30% {
                transform: translateY(-10px);
                box-shadow: 4px 8px 0 var(--Primary-water-green-900, #005647);
            }
            50% {
                transform: translateY(0);
                box-shadow: 4px 4px 0 var(--Primary-water-green-900, #005647);
            }
            70% {
                transform: translateY(-5px);
                box-shadow: 4px 6px 0 var(--Primary-water-green-900, #005647);
            }
            100% {
                transform: translateY(0);
                box-shadow: 4px 4px 0 var(--Primary-water-green-900, #005647);

            }
        }
    }

    &:active {
        animation: none; //cancela qualquer animação em andamento
        transform: translateY(4px);
        box-shadow: 2px 2px 0 var(--Primary-water-green-900, #005647);
        transition: transform 0.1s ease, box-shadow 0.1s ease;
    }
`
