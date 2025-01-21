import styled from "styled-components";
import media from "../../../../media";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4.4rem;
    position: relative;

    .ellipses-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1; //mantém o background atrás do conteúdo
    }
`;

export const ContainerCards = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: stretch;

    ${media.mobile(`
        flex-direction: column;
    `)}
`;

export const ColumnCards = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    gap: 24px;
`;
