import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    //width: 564px;
    flex: 1; /* Permite que o card cresça automaticamente */

    padding: 0.8rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;

    border-radius: 8px;
    border: 1.5px solid ${({ theme }) => theme.colors.Neutral["gray-50"]};
    background: ${({ theme }) => theme.colors.Neutral["gray-1000"]};

    /* Card Shadows/Heavy Shadow */
    box-shadow: ${({ theme }) => theme.shadows.cards.initial};
    /* Transição mais suave */
    transition: box-shadow 0.4s ease-in-out, transform 0.4s ease-in-out;
    z-index: 1;

    &:hover {
        border: 1.5px solid var(--Neutral-gray-0, #FFF);
        /* Transição suave de sombra */
        box-shadow: ${({ theme }) => theme.shadows.cards.initial}, ${({ theme }) => theme.shadows.cards.final};
        transform: translateY(-2px); /* Elevação sutil */
    }
`;

export const TagContainer = styled.div`
    display: flex;
    padding: 0.8rem 0rem;
    align-items: center;
    align-content: center;
    gap: 1rem;
    align-self: stretch;
    flex-wrap: wrap;
`;
