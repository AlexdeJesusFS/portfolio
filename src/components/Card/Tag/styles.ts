import styled from "styled-components";
import theme from "../../../theme/theme";

export const Tag = styled.div`
    display: flex;
    padding: 0rem 0.8rem;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    border-radius: 12px;
    background: ${theme.colors.Primary["water green-600"]};

    /* text */
    font-family: "Fira Code";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem;
`;
