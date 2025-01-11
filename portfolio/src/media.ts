import theme from "./theme/theme"


const media = {
  mobile: (styles: string) =>
    `@media (max-width: ${theme.breakpoints.mobile}) {${styles}}`,
    
  tablet: (styles: string) =>
    `@media (min-width: ${theme.breakpoints.tablet}) and (max-width: ${theme.breakpoints.desktop}) {${styles}}`,
    
  desktop: (styles: string) =>
    `@media (min-width: ${theme.breakpoints.desktop}) {${styles}}`,
};

export default media;