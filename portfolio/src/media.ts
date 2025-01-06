import {DefaultTheme} from "styled-components";


export const media = {
    mobile: (styles: string) => `@media (max-width: ${(props: DefaultTheme) => props.breakpoints.mobile}) {${styles}}`,
    tablet: (styles: string) => `@media (max-width: ${(props: DefaultTheme) => props.breakpoints.tablet}) {${styles}}`,
    desktop: (styles: string) => `@media (min-width: ${(props: DefaultTheme) => props.breakpoints.desktop}) {${styles}}`,
}
