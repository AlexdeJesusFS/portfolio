import styled from "styled-components";
import media from "../../media";


export const Container = styled.footer`
    display: flex;
    width: 100%;
    height: 15rem;
    padding: 0rem 14.4rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: ${({ theme }) => theme.colors.Primary["water green-50"]};
    margin-top: 9rem;

    ${media.tablet(`
        padding: 0rem 3.2rem;
        margin-top: 2rem;
    `)}

    ${media.mobile(`
        display: flex;
        padding: 1.6rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        margin-top: 0rem;
    `)}

    .copyright {
        color: ${({ theme }) => theme.colors.Primary["water green-900"]};
        /* Caption */
        font-family: "Fira Code";
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.4rem; /* 200% */
    }

    .gif-computer {
        width: 152px;
        height: 147px;
        flex-shrink: 0;
    }
`

export const RightSide = styled.div`
    display: flex;
    height: 12rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
    flex: 1 0 0;

    ${media.mobile(`
        gap: 0rem;
    `)}
`

export const ContactsContainer = styled.div`
    display: flex;
    height: 8.4rem;
    justify-content: center;
    align-items: center;
    gap: 2.6rem;

    .email {
        color: ${({ theme }) => theme.colors.Primary["water green-900"]};
        transition: color 0.4s ease;
        &:hover {
            color: ${({ theme }) => theme.colors.contacts.email};
        }
    }
    
    .github {
        color: ${({ theme }) => theme.colors.Primary["water green-900"]};
        transition: color 0.4s ease;
        &:hover {
            color: ${({ theme }) => theme.colors.contacts.github};
        }
    }

    .linkedin {
        color: ${({ theme }) => theme.colors.Primary["water green-900"]};
        transition: color 0.4s ease;
        &:hover {
            color: ${({ theme }) => theme.colors.contacts.linkedin};
        }
    }

    .whatsapp {
        color: ${({ theme }) => theme.colors.Primary["water green-900"]};
        transition: color 0.4s ease;
        &:hover {
            color: ${({ theme }) => theme.colors.contacts.whatsapp};
        }
    }

    @media (${media.queries.tablet}) or (${media.queries.mobile}) {
        .email {
            color: ${({ theme }) => theme.colors.contacts.email};
        }
        .github {
            color: ${({ theme }) => theme.colors.contacts.github};
        }
        .linkedin {
            color: ${({ theme }) => theme.colors.contacts.linkedin};
        }
        .whatsapp {
            color: ${({ theme }) => theme.colors.contacts.whatsapp};
        }
    }
`

export const CopyrightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    flex: 1 0 0;
    align-self: stretch;

    ${media.mobile(`
        justify-content: center;
    `)}
`
