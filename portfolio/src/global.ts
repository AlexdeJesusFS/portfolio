import { createGlobalStyle } from "styled-components";
import cursorDefault from "./assets/cursor/cursorDefault.svg";
import cursorPointer from "./assets/cursor/cursorPointer.svg";
import cursorText from "./assets/cursor/cursorText.svg";


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
        background-color: #121212;
        cursor: url(${cursorDefault}), url(${cursorDefault}.cur), url(${cursorDefault}.png) 12 12, auto;
    }

    h1, h2, h3, h4, h5, h6, p, li {
        cursor: url(${cursorText}), url(${cursorText}.cur), url(${cursorText}.png) 12 12, text;
    }

    button, a {
        cursor: url(${cursorPointer}), url(${cursorPointer}.cur), url(${cursorPointer}.png) 12 12, pointer; /* Fallbacks */
    }

    h1 {
        color: var(--Primary-water-green-600, #00BA9B);
        font-family: "Source Code Pro";
        font-size: 5.1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 4.8rem; /* 94.118% */
    }

    h3 {
        color: var(--Secondary-cyan-blue-400, #33B6D6);
        font-family: "Source Code Pro";
        font-size: 3.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: 3.6rem; /* 102.857% */
    }

    h4 {
        color: var(--Secondary-cyan-blue-400, #33B6D6);
        font-family: "Source Code Pro";
        font-size: 2.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: 3.6rem; /* 124.138% */
    }

    h6 {
        color: var(--Primary-water-green-900, #005647);
        font-family: "Source Code Pro";
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.4rem; /* 120% */
    }

    p {
        color: var(--Neutral-gray-50, #F8F9F9);
        text-align: justify;
        font-family: "Fira Code";
        font-size: 1.7rem;
        font-style: normal;
        font-weight: 450;
        line-height: 2.4rem; /* 141.176% */
    }

    strong {
        color: #BADEFB;
        font-size: 1.7rem;
    }

    a {
        color: var(--Feedback-Info-blue-300, #6AB9F7);
        padding: 0.2rem 0.2rem
    }

    a:visited {
        color: var(--Feedback-Danger-orange-300, #F88178);
    }

    ul {
        color: var(--Neutral-gray-50, #F8F9F9);
        list-style: inside;

        //text
        text-align: justify;
        font-family: "Fira Code";
        font-size: 1.7rem;
        font-style: normal;
        font-weight: 450;
        line-height: 2.4rem; /* 141.176% */
    }
`
