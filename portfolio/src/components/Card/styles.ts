import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    width: 564px;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    border-radius: 8px;
    border: 1.5px solid var(--Neutral-gray-50, #F8F9F9);
    background: var(--Neutral-gray-1000, #1D1F20);

    /* Card Shadows/Heavy Shadow */
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.40);

    &:hover {
        border: 1.5px solid var(--Neutral-gray-0, #FFF);
        box-shadow: 5px 15px 30px 5px rgba(0, 0, 0, 0.60);
    }
`

export const TagContainer = styled.div`
    display: flex;
    padding: 8px 0px;
    align-items: center;
    align-content: center;
    gap: 10px;
    align-self: stretch;
    flex-wrap: wrap;
`

export const Title = styled.h6`
    color: var(--Primary-water-green-400, #33D6BB);
`
