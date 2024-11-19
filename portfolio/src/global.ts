import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #121212;
    }

    h1 {
        color: var(--Primary-water-green-600, #00BA9B);
        font-family: "Source Code Pro";
        font-size: 51px;
        font-style: normal;
        font-weight: 600;
        line-height: 48px; /* 94.118% */
    }

    h3 {
        color: var(--Secondary-cyan-blue-400, #33B6D6);
        font-family: "Source Code Pro";
        font-size: 35px;
        font-style: normal;
        font-weight: 600;
        line-height: 36px; /* 102.857% */
    }

    h4 {
        color: var(--Secondary-cyan-blue-400, #33B6D6);
        font-family: "Source Code Pro";
        font-size: 29px;
        font-style: normal;
        font-weight: 500;
        line-height: 36px; /* 124.138% */
    }

    h6 {
        color: var(--Primary-water-green-900, #005647);
        font-family: "Source Code Pro";
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 120% */
    }

    p {
        color: var(--Neutral-gray-50, #F8F9F9);
        text-align: justify;
        font-family: "Fira Code";
        font-size: 17px;
        font-style: normal;
        font-weight: 450;
        line-height: 24px; /* 141.176% */
    }
`