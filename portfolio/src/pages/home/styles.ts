import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    padding: 0px 144px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    gap: 44px;

    .ellipses-background {
        top: 1380px;
    }
`

export const AnimationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Alinha verticalmente */
    justify-content: center; /* Alinha horizontalmente */
    height: 532px;
    gap: 62px;
`

export const SectionAbout = styled.section`
    display: flex;
    width: 100%;
    //height: 292px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
    //margin: auto;
    gap: 44px;
`

export const SectionProjects = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    margin: 252px auto;
    gap: 44px;
`

export const ContainerCards = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: stretch;
`

export const ColumnCards = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    gap: 24px;
`

export const SectionCertifications = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    //margin: auto;
    gap: 44px;
`

export const ContainerCertifications = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;
    align-self: stretch;
`

export const Certification = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

export const SectionStacks = styled.section`
    display: flex;
    width: 98.7vw;//largura correta para evitar scroll horizontal
    flex-direction: column;
    align-items: flex-start;
    gap: 84px;
    margin-top: 84px;
    margin-bottom: 154px;

    h4 {
        margin-left: 142px;
    }
`
