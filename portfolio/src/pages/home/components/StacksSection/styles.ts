import styled from "styled-components";
import media from "../../../../media";


export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8.4rem;

    //para carrossel ocupar toda a largura da tela, passando por cima do padding do container:
    margin: -14.4rem;
    width: calc(100% + 28.8rem);

    ${media.tablet(`
        margin: -3.2rem;
        width: calc(100% + 6.4rem);
    `)}

    ${media.mobile(`
        margin: -1.6rem;
        width: calc(100% + 2.2rem);
    `)}


    h4 {
        margin-left: 14.2rem;

        ${media.tablet(`
            margin-left: 3.2rem;
        `)}

        ${media.mobile(`
            margin-left: 1.6rem;
        `)}
    }
`
