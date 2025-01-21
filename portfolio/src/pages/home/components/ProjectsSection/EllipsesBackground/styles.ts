import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 89.3%;//impede scroll horizontal
    justify-content: center;
    align-items: center;
    gap: -424px;

    position: absolute;
    z-index: -1;
`;

export const EllipseBase = styled.div`
    flex: 1 0 0;
    align-self: stretch;

    //style
    border-radius: 840px;
    filter: blur(250px);
`;

export const Ellipse1 = styled(EllipseBase)`
    background: linear-gradient(180deg, #8A2BE2 0%, #FF4C4C 100%);
`;

export const Ellipse2 = styled(EllipseBase)`
    background: linear-gradient(180deg, #2ECC71 0%, #5D5FEF 100%);
`;
