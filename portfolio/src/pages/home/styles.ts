import styled from "styled-components";
import media from "../../media";


export const MainContainer = styled.main`
    display: flex;
    padding: 12.8rem 14.4rem;
    flex-direction: column;
    align-items: center;
    gap: 20.6rem;
    align-self: stretch;

    ${media.tablet(`
        padding: 8.6rem 3.2rem;
        gap: 17.4rem;
    `)}

    ${media.mobile(`
        padding: 3.8rem 1.6rem;
        gap: 8.7rem;
    `)}
`

export const AnimationsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 8.2rem;

    ${media.mobile(`
        gap: 2.1rem;
    `)}
`
