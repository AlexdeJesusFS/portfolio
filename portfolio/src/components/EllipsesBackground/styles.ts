import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: -424px;

    position: absolute;
    z-index: -1;
`

export const EllipseBase = styled.div`
    width: 600px;
    height: 600px;
    flex-shrink: 0;
`

export const Ellipse1 = styled(EllipseBase)`
    border-radius: 600px;
    background: linear-gradient(180deg, #8A2BE2 0%, #FF4C4C 100%);
    filter: blur(250px);
`

export const Ellipse2 = styled(EllipseBase)`
    border-radius: 600px;
    background: linear-gradient(180deg, #2ECC71 0%, #5D5FEF 100%);
    filter: blur(250px);
`
