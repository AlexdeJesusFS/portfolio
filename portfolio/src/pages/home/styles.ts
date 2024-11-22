import styled from "styled-components";
import imageBlur from "../../assets/FrameBlur.png";


export const Container = styled.div`
    width: 1142px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
`

export const ContainerImgElipses = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Alinha verticalmente */
    justify-content: center; /* Alinha horizontalmente */
    height: 532px;
    gap: 62px;
`

export const SectionAbout = styled.section`
    display: flex;
    width: 1142px;
    height: 292px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
    //background: lightgray;
    margin: 100px auto;
`

export const SectionProjects = styled.section`
    display: flex;
    width: 1152px;
    flex-direction: column;
    align-items: flex-start;
    gap: 44px;
    margin: 252px auto;
`

export const ContainerCards = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: stretch;
`

export const ContainerBlur = styled.div`
    display: flex;

    background-image: url(${imageBlur});
    background-size: cover;
`
