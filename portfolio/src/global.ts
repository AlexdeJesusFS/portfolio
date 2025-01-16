import { createGlobalStyle } from "styled-components";
import cursorDefault from "./assets/cursor/cursorDefault.svg";
import cursorPointer from "./assets/cursor/cursorPointer.svg";
import cursorText from "./assets/cursor/cursorText.svg";
//import {color, space, layout, ColorProps, SpaceProps, LayoutProps } from "styled-system";


export default createGlobalStyle`

    * {
        font-size: 62.5%; // 10px
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: ${({theme}) => theme.colors.background};
        cursor: url(${cursorDefault}), url(${cursorDefault}.cur), url(${cursorDefault}.png) 12 12, auto;
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6, p, li {
        cursor: url(${cursorText}), url(${cursorText}.cur), url(${cursorText}.png) 12 12, text;
    }

    button, a {
        cursor: url(${cursorPointer}), url(${cursorPointer}.cur), url(${cursorPointer}.png) 12 12, pointer; /* Fallbacks */
    }

    h1 {
        color: ${({ theme }) => theme.colors.Primary["water green-600"]};
        font-family: "Source Code Pro";
        font-size: clamp(3.06rem, 3.74vw, 5.1rem);
        font-style: normal;
        font-weight: 600;
        line-height: 4.8rem;
    }
    span { //Texto de TypeWrite
        font-family: "Source Code Pro";
        font-size: clamp(3.06rem, 3.74vw, 5.1rem);
        font-style: normal;
        font-weight: 600;
        line-height: 4.8rem;
    }

    h3 {
        color: ${({ theme }) => theme.colors.Secondary["cyan blue-400"]};
        font-family: "Source Code Pro";
        font-size: clamp(2.1rem, 2.57vw, 3.5rem);
        font-style: normal;
        font-weight: 600;
        line-height: 3.6rem; /* 102.857% */
    }

    h4 {
        color: ${({ theme }) => theme.colors.Secondary["cyan blue-400"]};
        font-family: "Source Code Pro";
        font-size: clamp(1.9rem, 2.13vw, 2.9rem);
        font-style: normal;
        font-weight: 500;
        line-height: 3.6rem; /* 124.138% */
    }

    h6 {
        color: ${({ theme }) => theme.colors.Primary["water green-900"]};
        font-family: "Source Code Pro";
        font-size: clamp(1.7rem, 1.47vw, 2rem);
        font-style: normal;
        font-weight: 500;
        line-height: 2.4rem; /* 120% */
    }

    p {
        color: ${({ theme }) => theme.colors.Neutral["gray-50"]};
        text-align: justify;
        font-family: "Fira Code";
        font-size: clamp(1.5rem, 1.25vw, 1.7rem);
        font-style: normal;
        font-weight: 450;
        line-height: 2.4rem; /* 141.176% */
    }

    strong {
        color: ${({ theme }) => theme.colors.Feedback.Info["blue-100"]};
        font-size: clamp(1.5rem, 1.25vw, 1.7rem);
    }

    a {
        color: ${({ theme }) => theme.colors.Feedback.Info["blue-300"]};
        padding: 0.2rem 0.2rem
    }

    a:visited {
        color: ${({ theme }) => theme.colors.Feedback.Danger["orange-300"]};
    }

    ul {
        color: ${({ theme }) => theme.colors.Neutral["gray-50"]};
        list-style: inside;

        //text
        text-align: justify;
        font-family: "Fira Code";
        font-size: clamp(1.5rem, 1.25vw, 1.7rem);
        font-style: normal;
        font-weight: 450;
        line-height: 2.4rem; /* 141.176% */
    }
`
